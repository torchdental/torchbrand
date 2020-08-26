import React from 'react';
import ReactDOM from 'react-dom';


import Nav from './example-components/Nav.jsx';


import makeBem from '../../src/makeBem';

const containerBlock = makeBem('container')

const links = [
  {
    name: 'Colors',
    path: 'colors'    
  },
  {
    name: 'Typography',
    path: 'typography'    
  },  
  {
    name: 'Spacing & Layout',
    path: 'spacing'    
  },
  {
    name: 'Icons', 
    path: 'icons'    
  },  
  // TODO style "Components as right-aligned auth menu"
  // Nav
  // {
  //   name: 'Components',
  //   path: 'components'
  // },
  // Buttons, Links, Badges, Icons, Forms, menus (filter, sort), 
  // Cards & card-grid, tables, notifications
  // modals, tooltips
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedItems: [],
    }
    this.isExpanded = this.isExpanded.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  
  isExpanded(item) {
    return this.state.expandedItems.includes(item);
  }
  
  toggleExpanded(item) {
    const idx = this.state.expandedItems.indexOf(item);
    console.log(item, idx)
    if (idx > -1) {
      const items = this.state.expandedItems
      items.splice(idx, 1);
      this.setState({
        expandedItems: items
      })
    } else {
      this.setState({
        expandedItems: [...this.state.expandedItems, item]
      })      
    }
  }
  
  render() {
    
    const colorMap = {
      '$color--blue-20': ["#E9F3F6"],
      '$color--blue-30': ["#00AEF6"],
      '$color--blue-40': ["#008FBE", "highlight"], // highlight
      '$color--blue-50': ["#0078A0", "text, background"], // text, bg
      '$color--blue-60': ["#006F94", "active color"], // active
      '$color--blue-90': ["#002B4A"],
      '$color--green-20': ["#E7F7F3"],
      '$color--green-30': ["#29BD9A", "text"], // text
      '$color--green-40': ["#2BA88A"],
      '$color--green-50': ["#1D8F74", "text"], // text
      '$color--green-60': ["#1A846B"],
      '$color--berry-20': ["#F9EBEB"],
      '$color--berry-50': ["#CD5858"],
      '$color--yellow-20': ["#F8F1DA"],
      '$color--orange-50': ["#C77729"],
      '$color--purple-20': ["#F0EEF8"],
      '$color--purple-50': ["#6D5BB9"],
      '$color--white': ["#fff"],
      '$color--gray-20': ["#F7F7F7"],
      '$color--gray-30': ["#D8D8D8"],
      '$color--gray-50': ["#A4A4A4"],
      '$color--gray-60': ["#6C6C6C", "text"],     
      '$color--gray-90': ["#1D1D1D", "body text"] 
    }
    
    const colorGroups = [];
    let lastColor = null;
    Object.keys(colorMap).forEach((varName)=> {
      const hex = colorMap[varName][0];
      const notes = colorMap[varName][1];
      let colorName = varName.replace('$color--', '')
      colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
      const colorGroup = colorName.replace(/-\d+$/,'');
      if (colorGroup != lastColor) {
        colorGroups.push([])
        lastColor = colorGroup;
      }
      colorGroups[colorGroups.length - 1].push({
        varName,
        hex,
        colorName,
        colorGroup,
        notes
      })
    });
    
    console.log(colorGroups)
    
    return <div className="app-root bg-light d-flex">
      <Nav links={links}/>
      <main className="app-body">
        <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('nav')})} id="nav">
          <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, 'nav')}>
            <h3>Navs</h3>
          </div>
          <div className={containerBlock('body')}>
            <p>Info about navs</p>
          </div>
        </section>
        <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('colors')})} id="colors">
          <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, 'colors')}>
            <h3>Colors</h3>
          </div>
          <div className={containerBlock('body')}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {colorGroups.map((group)=> {
                return <div style={{display: 'flex', flexDirection: 'column', margin: "1em"}}>
                  <h4>{group[0].colorGroup}</h4>
                  {group.map((color) => {
                    const {varName, hex, colorName, notes} = color;
                    const style = {
                      display: "inline-block",
                      width: "40px", height: "40px", backgroundColor: hex 
                    }
                    return <div key={varName} style={{marginBottom: "1em", display: 'flex', alignItems: 'flex-start'}}>
                      <span style={style}></span>
                      <span>
                        &nbsp;{colorName} / {hex}
                        <br/>
                        &nbsp;{varName}
                      </span>
                      {notes ? <strong>&nbsp;{notes}</strong>: ''}
                    </div>                    
                  })}
                </div>
                const hex = colorMap[varName];
                
                let colorName = varName.replace('$color--', '').replace('-', ' ');
                colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
                
              })}
            </div>
          </div>
        </section>
        <div className='section-label'>
          <h3 id="typography">Typography</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                Dark Gray
              </th>
              <th>
                Gray
              </th>
              <th>
                Primary
              </th>
              <th>
                Green
              </th>
              <th>
                Raspberry
              </th>
              <th>
                Bright Green
              </th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4, 5].map((n) => {
              return  <tr>
                  <td>
                    <div className="details2">h{n}, .styleAs-h{n}</div>
                    <span className={`styleAs-h${n}`}>Headline{n}</span>
                  </td>
                  <td>
                    <div className="details2">h1.text--muted, .styleAs-h1.text--muted</div>
                    <span className={`styleAs-h${n} text--muted`}>Headline{n}</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              
                </tr>
            })}
            <tr>
              <td>
                <div className="details2">h6, .styleAs-h6, .subheader</div>
                <span className={`subheader`}>Subheader</span>
                <div className="details2">h6.subheader--light, .styleAs-h6--light, .subheader--light</div>
                <span className={`subheader subhedaer--light`}>Subheader</span>
              </td>
              <td>
                <div className="details2">h6.text--muted, .styleAs-h6.text--muted, .subheader.text--muted</div>
                <span className={`subheader text--muted`}>Subheader</span>
                <div className="details2">h6.text--muted.subheader--light, .styleAs-h6--light.text--muted, .subheader--light.text--muted</div>
                <span className={`subheader subheader--light text--muted`}>Subheader</span>
              </td>
              <td>
                <div className="details2">h6.text--primary, .styleAs-h6.text--primary, .subheader.text--primary</div>
                <span className={`subheader text--primary`}>Subheader</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="details2">p, .styleAs-p</div>
                <span className={`styleAs-p`}>Body</span>
                <div className="details2">p strong, .styleAs-p strong</div>
                <span className={`styleAs-p`}><strong>Body</strong></span>
                <div className="details2">p.text--strikethrough, .styleAs-p.text--strikethrough</div>
                <span className={`styleAs-p text--strikethrough`}>Body</span>
              </td>
              <td>
                <div className="details2">p.text--muted, .styleAs-p.text--muted</div>
                <span className={`subheader text--muted`}>Body</span>
                <div className="details2">p.text--muted strong, .styleAs-p.text--muted srong</div>
                <span className={`subheader text--muted`}><strong>Body</strong></span>
              </td>
              <td>
                <div className="details2">p.text--primary, .styleAs-p.text--primary</div>
                <span className={`subheader text--primary`}>Body</span>
                <div className="details2">p.text--primary strong, .styleAs-p.text--primary strong</div>
                <span className={`subheader text--primary`}><strong>Body</strong></span>
              </td>
              <td></td>
              <td>
                <div className="details2">p.text--danger, .styleAs-p.text--pridangermary</div>
                <span className={`subheader text--danger`}>Body</span>
                <div className="details2">p.text--danger strong, .styleAs-p.text--pridangermary strong</div>
                <span className={`subheader text--danger`}><strong>Body</strong></span>
              </td>
              <td>
                <div className="details2">p.text--bright, .styleAs-p.text--bright</div>
                <span className={`subheader text--bright`}>Body</span>
                <div className="details2">p.text--bright strong, .styleAs-p.text--bright strong</div>
                <span className={`subheader text--bright`}><strong>Body</strong></span>
              </td>
            
            </tr>
            <tr>
              <td>
                <div className="details2">small, .details1, .supheader</div>
                <span className={`details1`}>Details 1</span>
                <div className="details2">small strong, .details1 strong, .supheader strong</div>
                <span className={`details1`}><strong>Details 1</strong></span>
              </td>
              <td>
                <div className="details2">small.text--muted, .details1.text--muted, .supheader.text--muted</div>
                <span className={`details1 text--muted`}>Details 1</span>
                <div className="details2">small.text--muted strong, .details1.text--muted strong, .supheader.text--muted strong</div>
                <span className={`details1 text--muted`}><strong>Details 1</strong></span>
              </td>
              <td>
                <div className="details2">small.text--primary, .details1.text--primary, .supheader.text--primary</div>
                <span className={`details1 text--primary`}>Details 1</span>
                <div className="details2">small.text--primary strong, .details1.text--primary strong, .supheader.text--primary strong</div>
                <span className={`details1 text--primary`}><strong>Details 1</strong></span>
              </td>
              <td>
                <div className="details2">small.text--secondary, .details1.text--secondary, .supheader.text--secondary</div>
                <span className={`details1 text--secondary`}>Details 1</span>
                <div className="details2">small.text--secondary strong, .details1.text--secondary strong, .supheader.text--secondary strong</div>
                <span className={`details1 text--secondary`}><strong>Details 1</strong></span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="details2">.details2</div>
                <span className={`details2`}>Details 2</span>
                <div className="details2">.details2 strong</div>
                <span className={`details2`}><strong>Details 2</strong></span>
              </td>
              <td>
                <div className="details2">.details2.text--muted</div>
                <span className={`details2 text--muted`}>Details 2</span>
                <div className="details2">.details2.text--muted strong</div>
                <span className={`details2 text--muted`}><strong>Details 2</strong></span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="details2">.details3</div>
                <span className={`details3`}>Details 3</span>
                <div className="details2">.details3 strong</div>
                <span className={`details3`}><strong>Details 3</strong></span>
              </td>
              <td>
                <div className="details2">.details3.text--muted</div>
                <span className={`details3 text--muted`}>Details 3</span>
                <div className="details2">.details3.text--muted strong</div>
                <span className={`details3 text--muted`}><strong>Details 3</strong></span>            
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
            
        <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('spacing')})} id="spacing">
          <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, 'spacing')}>
            <h3>Spacing</h3>
          </div>
          <div className={containerBlock('body')}>
            <p>Most components and containers should have spacing built-in. If you need to construct a component use the spacing variables to ensure consistency:</p>
            <ul>
              <li>$s8:  8px;</li>
              <li>$s10: 10px;</li>
              <li>$s12: 12px;</li>
              <li>$s14: 14px;</li>
              <li>$s16: 16px;</li>
              <li>$s20: 20px;</li>
              <li>$s24: 24px;</li>
              <li>$s32: 32px;</li>
              <li>$s40: 40px;</li>
            </ul>            
          </div>
        </section>
        <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('pagelayout')})} id="pagelayout">
          <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, 'pagelayout')}>
            <h3>Page Layout</h3>
          </div>
          <div className={containerBlock('body')}>
            <p></p>         
          </div>
        </section>
      </main>
    </div>
  }
}


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);
