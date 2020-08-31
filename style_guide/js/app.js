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
    path: 'spacing',
    items: [
      {
        name: 'Page Layout',
        path: 'layout'
      },
      {
        name: 'Containers',
        path: 'containers'
      }
    ]
  },
  {
    name: 'Icons', 
    path: 'icons'
  },  
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedItems: {},
    }
    this.isExpanded = this.isExpanded.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.makeSection = this.makeSection.bind(this);
  }
  
  isExpanded(item) {
    return this.state.expandedItems[item] !== false;
  }
  
  toggleExpanded(item) {
    const expandedItems = this.state.expandedItems;
    if (expandedItems[item] == false) {
      expandedItems[item] = true
    } else {
      expandedItems[item] = false
    }
    this.setState({ expandedItems });
  }
  
  makeSection(id, title, content) {
    return <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded(id)})}>
      <a className="anchor" id={id}></a>
      <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, id)}>
        <h3>{title}</h3>
      </div>
      <div className={containerBlock('body')}>
        {content}
      </div>
    </section>
  }
  
  get navSection() {
    return this.makeSection('nav', "Navs", <React.Fragment><p>There are two separate navs in the design system. The top nav has all primary links visible above the tablet breakpoint, and only the logo/menu visible below that breakpoint.</p><p>The bottom nav includes all the primary links with icons and is visible below the table breakpoint.</p>
            <h4>Top Nav</h4>
            <p>The top nav structure should be identital to the existing nav element structure and should be structure as: </p>
            <pre>
{`<nav class="navbar">
  <div class="navbar-brand">
    <img class="navbar-torchLogo" src="/assets/images/torch_logo.svg">
  </div>
  <ul class="navbar-nav">
    <li class="navbar-item">
      <a href="url" class="navbar-link">Item</a>
    </li>
    <li class="navbar-item">
      <div class="menu menu--hoverable"> <!-- with subnav //-->
          <a href="url" class="navbar-link menu-label">Item</a>
          <!--standard menu body //-->
      </div>
    </li>
  </ul>
  <div class="navbar-menu">
    <div class="menu"><!--standard menu label / body //--></div>
  </div>
</nav>`}
            </pre>
            <h4>Bottom Nav</h4>
            <p>TBD</p>
          </React.Fragment>)
  }
  
  get colorsSection() {
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
    return         <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('colors')})} id="colors">
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
  }

  get typographySection() {
    return this.makeSection('typography', "Typography", <React.Fragment>
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
            </table></React.Fragment>)
  }
  
  get spacingSection() {
    return this.makeSection("spacing", "Spacing", <React.Fragment><p>Most components and containers should have spacing built-in. If you need to construct a component use the spacing variables to ensure consistency:</p>
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
            </ul></React.Fragment>)
  }
  
  get pageLayoutSection() {
    return this.makeSection("layout", "Page Layout", null)
  }

  get containersSection() {
    return this.makeSection("containers", "Containers", null)
  }

  get buttonsSection() {
    const btnBem = makeBem("btn")
    return this.makeSection("buttons", "Buttons & Links", <React.Fragment>
      <p>New button elements should all have the class <code>.btn</code>. For backwards 
      compatility, all button elements and items with <code>.styleAs-button</code> will also generally work</p>
      <h4>Filled Buttons (default)</h4>
      <p>Note that these all have hover and active states. By default they take the full width of the container.</p>
      <br />
      <br />
      <p>Standard Button classnames <code>{btnBem()}</code></p>
      <div className={btnBem()}>Standard Button</div>
      <br />
      <br />
      <p>Standard Primary Button classnames <code>{btnBem(null, 'primary')}</code></p>
      <div className={btnBem(null, 'primary')}>Primary Standard Button</div>
      <br />
      <br />
      <p>Standard Secondary Button classnames <code>{btnBem(null, 'secondary')}</code></p>
      <div className={btnBem(null, 'secondary')}>Secondary Standard Button</div>
      <br />
      <br />
      <p>Disabled Button regardless of classnames. Real buttons marked as disabled</p>
      <button className={btnBem(null, 'secondary')} disabled>Disabled Button</button>
      <p>or classname className={btnBem(null, 'disabled')}</p>
      <div className={btnBem(null, ['primary', 'disabled'])}>Disabled Primary Button</div>
      <br />
      <br />

      <h4>Medium Emphasis Buttons - oulined. These should have class <code>btn</code> with the <code>--outline</code> modifier 
      in addition to any other modifiers needed.</h4>
      <br />
      <br />
      <p>Standard Button classnames <code>{btnBem(null, 'outline')}</code></p>
      <div className={btnBem(null, 'outline')}>Outline Button</div>
      <br />
      <br />
      <p>Standard Primary Button classnames <code>{btnBem(null, ['outline', 'primary'])}</code></p>
      <div className={btnBem(null, ['outline', 'primary'])}>Primary Outline Button</div>
      <br />
      <br />
      <p>Standard Secondary Button classnames <code>{btnBem(null, ['outline', 'secondary'])}</code></p>
      <div className={btnBem(null, ['outline', 'secondary'])}>Secondary Outline Button</div>
      <br />
      <br />
      <p>Disabled Button regardless of classnames. Real buttons marked as disabled</p>
      <button className={btnBem(null, ['outline', 'secondary'])} disabled>Disabled Outline Button</button>
      <p>or classname className={btnBem(null, ['outline', 'disabled'])}</p>
      <div className={btnBem(null, ['primary', 'disabled', 'outline'])}>Disabled Primary Outline Button</div>

      <h4>Button Sizing</h4>
      <p>All buttons can have size modifiers applied to them. Note that any combination of color/style is permitted, not just those shown</p>
      <div className="cardGrid">
        <div className="card">
          <h5>Standard buttons</h5>
          <p><code>{btnBem(null, 'large')}</code></p>
          <div className={btnBem(null, 'large')}>Large (default)</div>
          <br />
          <p><code>{btnBem(null, ['primary', 'medium'])}</code></p>
          <div className={btnBem(null, ['primary', 'medium'])}>Medium Button</div>
          <br />
          <p><code>{btnBem(null, ['secondary', 'small'])}</code></p>
          <div className={btnBem(null, ['secondary', 'small'])}>Small Button</div>
          <br />
          <p><code>{btnBem(null, ['secondary', 'xSmall'])}</code></p>
          <button className={btnBem(null, ['secondary', 'xSmall'])} disabled>xSmall Button</button>
        </div>
        <div className="card">
          <h5>Standard buttons</h5>
          <p><code>{btnBem(null, ['large', 'disabled', 'outline'])}</code></p>
          <div className={btnBem(null, ['large', 'disabled', 'outline'])}>Large (default)</div>
          <br />
          <p><code>{btnBem(null, ['secondary', 'outline', 'medium'])}</code></p>
          <div className={btnBem(null, ['secondary', 'outline', 'medium'])}>Medium Button</div>
          <br />
          <p><code>{btnBem(null, ['outline', 'small'])}</code></p>
          <div className={btnBem(null, ['outline', 'small'])}>Small Button</div>
          <br />
          <p><code>{btnBem(null, ['primary', 'outline', 'xSmall'])}</code></p>
          <button className={btnBem(null, ['primary', 'outline', 'xSmall'])}>xSmall Button</button>
        </div>
        <div className="card">
          <h5>Sized buttons <code>--sized</code> or <code>btn-tight</code></h5>
          <p><code>{btnBem(null, ['large', 'secondary', 'sized'])}</code></p>
          <div className={btnBem(null, ['large', 'secondary', 'sized'])}>Large (default)</div>
          <br />
          <p><code>{btnBem(null, ['primary', 'sized', 'outline', 'medium'])}</code></p>
          <div className={btnBem(null, ['primary', 'sized', 'outline', 'medium'])}>Medium Button</div>
          <br />
          <p><code>{btnBem(null, ['outline', 'small', 'sized'])}</code></p>
          <div className={btnBem(null, ['outline', 'small', 'sized'])}>Small Button</div>
          <br />
          <p>button:disabled <code>{btnBem(null, ['sized', 'xSmall'])}</code></p>
          <button className={btnBem(null, ['primary', 'sized', 'xSmall'])} disabled>xSmall Button</button>

        </div>
      </div>
      <br/><br/>
      <h4>Links</h4>
      <p>In general, all links are the primary color, except ones inside menus which are the standard body text black color.
        Specific links can be overridden with other colors as below.
      </p>
      <p><a className='text--default'>text--default e.g. for menus</a></p>
      <p><a className='text--primary'>text--primary for paragraphy text</a></p>
      <p><a className='text--secondary'>text--secondary</a></p>
      <p><a className='text--muted'>text--muted - disabled links.</a></p>
      <p><a className='text--danger'>text--danger - error and verification messages.</a></p>


    </React.Fragment>)
  }
  
  get variantsSection() {
    return this.makeSection("variants", "Variant Selector", <React.Fragment>
      <h4>Variant Selector Buttons</h4>
      <p>The base class for these are .variantBtn or .variantSelect-value. Selected buttons have the --selected modifier, and unavailable ones have --unavailable</p>
      <div className="variantBtn">option</div>
      <div className="variantBtn variantBtn--selected">selected option</div>
      <div className="variantBtn variantBtn--unavailable">unavailable option</div>
    </React.Fragment>)
  }

  get quantitySection() {
    const qBem = makeBem("quantitySelector");
    return this.makeSection("quantity", "Quantity Selector", <React.Fragment>
      <h4>With single button</h4>
      <div className={qBem()}>
        <div className={qBem('minus', {disabled: true})}>&ndash;</div>
        <div className={qBem('count')}>1</div>
        <div className={qBem('plus')}>+</div>
        <div className={qBem('add')}>Add</div>
      </div>

      <h4>With Icon </h4>
      <div className={qBem()}>
        <div className={qBem('label')}>TODO: icon</div>
        <div className={qBem('minus', { disabled: true })}>&ndash;</div>
        <div className={qBem('count')}>1</div>
        <div className={qBem('plus')}>+</div>        
      </div>

      <h4>With Two Buttons</h4>
      <div className={qBem()}>
        <div className={qBem('label')}>QTY:</div>
        <div className={qBem('minus', { disabled: true })}>&ndash;</div>
        <div className={qBem('count')}>1</div>
        <div className={qBem('plus')}>+</div>
        <div className={qBem('buttons')}>
          <div className={qBem('cancel')}>Cancel</div>
          <div className={qBem('add')}>Add</div>
        </div>
        
      </div>

    </React.Fragment>)
  }

  get notificationsSection() {
    const nBem = makeBem('notification');
    return this.makeSection("notifications", "Notifications", <React.Fragment>
      <div className="cardGrid">
        <div className="card">
          <p>Standard notifications are centered</p>
          <p><span className={nBem()}>Info Notification</span></p>
          <p><span className={nBem(null, 'success')}>Success Notification</span></p>
          <p><span className={nBem(null, 'warning')}>Warning Notification<br />Multi-line</span></p>
          <p><span className={nBem(null, 'error')}>Error Notification</span></p>
        </div>
        <div className="card">
          <p>Optional --left notifications</p>
          <p><span className={nBem(null, ['left'])}>Info Notification</span></p>
          <p><span className={nBem(null, ['left', 'success'])}>Success Notification</span></p>
          <p><span className={nBem(null, ['left', 'warning'])}>Warning Notification<br />Multi-line</span></p>
          <p><span className={nBem(null, ['left', 'error'])}>Error Notification</span></p>
        </div>
        <div className="card">
          <p>TODO with icons</p>
          <p><span className={nBem(null, ['left'])}>Info Notification</span></p>
          <p><span className={nBem(null, ['left', 'success'])}>Success Notification</span></p>
          <p><span className={nBem(null, ['left', 'warning'])}>Warning Notification<br />Multi-line</span></p>
          <p><span className={nBem(null, ['left', 'error'])}>Error Notification</span></p>
        </div>
      </div>
      <h4>Product Status Notifications</h4>
      <p>Two variations for iten status .itemStatus are intended over darker backgrounds</p>
      <div className="cardGrid">
        <div className="card bg-muted">
          <br />
          <div className="itemStatus itemStatus--unavailable">unavailable</div>
          <br />  
        </div>
        <div className="card bg-muted">
          <br />
          <div className="itemStatus itemStatus--inList">In List</div>
          <br />
        </div>
      </div>
    </React.Fragment>)
  }

  get badgesSection() {
    const fBem = makeBem('flag');
    const ttBem = makeBem('tooltip');
    return this.makeSection("badges", "Badges & Flags", <React.Fragment>
      <h4>Badges</h4>
      <p>Badges are generally used as numerical icons</p>
      <p>Five <span className='badge'>5</span></p>
      <p>Thirty four <span className='badge'>34</span></p>
      <p>Six hundred ninety seven <span className='badge'>697</span></p>
      <h5>Muted Badges</h5>
      <p>Thirty four <span className='badge badge--muted-light'>34</span></p>
      <h4>Flags</h4>
      <p>There are 4 types of Flags, each my have a tooltip</p>
      <div className={fBem(null, 'preferred')}>
        Preferred
        <div className={ttBem(null)}>
          <div className={ttBem('body')}>
            This item is offered by a supplier that offers fast shipping and fair prices.
          </div>
        </div>
      </div>
      &nbsp;
      <div className={fBem(null, 'purchasedBefore')}>
        Purchased Before
        <div className={ttBem(null)}>
          <div className={ttBem('body')}>
            <strong>Purchase 19 days ago</strong>
            <br />
            Vendor: <strong>DC Dental</strong>
          </div>
        </div>
      </div>
      &nbsp;
      <div className={fBem(null, 'bestSeller')}>
        Best Seller
        <div className={ttBem(null)}>
          <div className={ttBem('body')}>
            This item is offered by a supplier that offers fast shipping and fair prices.
          </div>
        </div>
      </div>
      &nbsp;
      <div className={fBem(null, 'promo')}>
        Promo
        <div className={ttBem(null, 'right')}>
          <div className={ttBem('body')}>
            This item is offered by a supplier that offers fast shipping and fair prices.
          </div>
        </div>
      </div>
    </React.Fragment>);
  }

  get tooltipsSection() {
    const ttBem = makeBem('tooltip');
    return this.makeSection("tooltips", "Tooltips", <React.Fragment>
      <p>Tooltips with static --visible modifier here for display. See <a href="#badges">badges section</a> above for in-line example</p>
      <div style={{position: 'relative'}}>
        Tooltip container
        <div className={ttBem(null, 'visible')}>
          <div className={ttBem('body')}>
            <strong>Purchase 19 days ago</strong>
            <br />
          Vendor: <strong>DC Dental</strong>
          </div>
        </div>
      </div>
      
      <br/>
      <br />
      <br />
      <br />
      {/* adding extra lines to compensate for absolutely positioned tooltip */}
    </React.Fragment>);
  }

  


  get formsSection() {
    const menuBem = makeBem('menu');
    return this.makeSection("forms", "Forms", <React.Fragment>
      <form>
        <div>
          <input type="text" id="search" name="search" placeholder="Search" className="search"/>
        </div>
        <br /><br /><br />
        <div>
          <label htmlFor="sampleId">Sample Field</label>
          <input type="text" id="sampleId" name="sample" placeholder="hint"/>          
        </div>
        <br />
        <div>
          <label htmlFor="sampleTextArea">Text Area</label>
          <textarea id="sampleTextArea" placeholder="Write text"></textarea>
        </div>
        <br/>
        <div>
          <div className={menuBem(null, { select: true, expanded: this.isExpanded("exampleSelect")})}>
            <div className={menuBem('label')} onClick={this.toggleExpanded.bind(this, "exampleSelect")}>
              Selected Value
            </div>
            <div className={menuBem('body')}>
              <div className={menuBem('item')}>Option 1</div>
              <div className={menuBem('item')}>Option 2</div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
        <div>
          <input type="radio" value="1" id="radio_1" name="radio"></input><label htmlFor="radio_1">Radio 1</label>
          <br/>
          <input type="radio" value="2" id="radio_2" name="radio"></input><label htmlFor="radio_2">Radio 2</label>
        </div>
        <div>
          <input type="checkbox" value="1" id="checkbox" name="checkbox"></input><label htmlFor="checkbox">Checkbox</label>          
        </div>
      </form>
    </React.Fragment>)
  }

  get messagesSection() {
    const mBem = makeBem('comment');
    return this.makeSection("messages", "Messages", <React.Fragment>
      <div className={mBem()}>
        <div className={mBem('controls')}>
          <div className={mBem('controlTextArea')}>
            <textarea name="new_message" placeholder="What can we help you with?"></textarea>
          </div>
          <div className={mBem('addButton')}>send</div>
        </div>
      </div>
    </React.Fragment>)
  }

  get menuSection() {
    const menuBem = makeBem('menu');
    return this.makeSection("menus", "Menus, Filter & Sort", <React.Fragment>
      <h4>Menus</h4>
      <p>Standard menu with sections.</p>
      <div className={menuBem(null, 'expanded')}>
        <div className={menuBem('label')}>
          Menu Label
        </div>
        <div className={menuBem('body')}>
          <div className={menuBem('section')}>
            <div className={menuBem('item', 'header')}>
              .menu-item--header <br/>
              <strong>bold element</strong>
            </div>
            <div className={menuBem('item')}>
              .menu-item
            </div>
            <div className={menuBem('item')}>
              .menu-item<br/>
              <p className="text--muted">.text--muted</p>
            </div>
          </div>
          <div className={menuBem('section')}>
            <div className={menuBem('item')}>
              .menu-item
            </div>
          </div>
        </div>        
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h4>Filters</h4>
      <p>Standard menu with sections.</p>
      <div className={menuBem(null, { select: true, expanded: this.isExpanded("exampleFilter") })}>
        <div className={menuBem('label')} onClick={this.toggleExpanded.bind(this, "exampleFilter")}>
          Selected Value
        </div>
        <div className={menuBem('body')}>
          <div className={menuBem('item')}>.menu-item</div>
          <div className={menuBem('item')}>.menu-item</div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />



      <h4>Sort</h4>
      <p>Sort menus are the same as filters but use a standard label text before the selected value.</p>
      <div className={menuBem(null, { select: true, expanded: this.isExpanded("exampleSort") })}>
        <div className={menuBem('label')} onClick={this.toggleExpanded.bind(this, "exampleSort")}>
          <span className={menuBem('labelPrefix')}>Sort By</span> Selected Value
        </div>
        <div className={menuBem('body')}>
          <div className={menuBem('item')}>.menu-item</div>
          <div className={menuBem('item')}>.menu-item</div>
        </div>
      </div>
      <br /><br /><br /><br /><br />


    </React.Fragment>)
  }

  render() {
    return <div className="app-root bg-light d-flex">
      <Nav links={links}/>
      <main className="app-body">
        {this.colorsSection}
        {this.typographySection}
        {this.spacingSection}
        {this.pageLayoutSection}
        {this.containersSection}
        {this.navSection}
        {this.buttonsSection}
        {this.notificationsSection}
        {this.badgesSection}
        {this.tooltipsSection}
        {this.formsSection}
        {this.messagesSection}
        {this.menuSection}
        
{/*   ["Menus, Filter & Sort", "menus"],
      ["Cards"],
      ["Card Grid (?)"],
      */}
        {this.variantsSection}
        {this.quantitySection}
{/* 
          ["Tables"],
      ["Modals"]      */}
      </main>
    </div>
  }
}


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);