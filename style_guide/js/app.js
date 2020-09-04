import React from 'react';
import ReactDOM from 'react-dom';


import Nav from './example-components/Nav.jsx';


import makeBem from '../../src/makeBem';

const containerBlock = makeBem('container')
const qBem = makeBem("quantitySelector");
const layoutBem = makeBem("layout");
const tableToggleBem = makeBem("tableToggle");

const links = [
  {
    name: "Components",
    items: [
      {
        name: "Navs",
        path: "nav"
      },
      {
        name: "Menus, Filter & Sort",
        path: "menus"
      },
      {
        name: "Cards",
        path: "cards",
      },
      {
        name: "Variant Selector",
        path: 'variants'
      },
      {
        name: "Quantity Selector", 
        path: 'quantity',
      },
      {
        name: "Tables",
        path: "tables"
      },
      {
        name: "Modals",    
        path: "modals"
      },
      {
        name: "Forms",
        path: "forms"
      },
      {
        name: "Messages",
        path: "messages"
      }
    ]
  },
  {
    name: "Elements",
    items: [
      {
        name: "Buttons & Links",
        path: "buttons"
      },
      {
        name: "Notifications",
        path: "notifications"
      },
      {
        name: "Badges & Flags", 
        path: "badges"
      },
      {
        name: "Tooltips",
        path: "tooltips"
      },
      {
        name: 'Icons',
        path: 'icons'
      }
    ]
  },
  {
    name: 'Typography',
    path: 'typography'    
  },  
  {
    name: 'Colors',
    path: 'colors'
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
    this.iconLine = this.iconLine.bind(this);
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
            <h4>Secondary Nav</h4>
            <p>Secondary nav may include some additional column content</p>
            <p>TBD does secondary nav stay fixed or should it scroll away? (Assume scrolls esp if items are accessible via top nav dropdown)</p>
            <pre>
{`<nav class="navbarSecondary">
  <ul class="navbarSecondary-nav">
    <li class="navbarSecondary-item">
      <a href="url" class="navbar-link navbar-link--active">Item</a>
    </li>
    <li class="navbarSecondary-item">
      <a href="url" class="navbarSecondary-link">Item</a>
    </li>
    <li class="navbarSecondary-item">
      <a href="url" class="navbarSecondary-link">Item</a>
    </li>
  </ul>
  <div class="navbarSecondary-leftCol">
    Payment Setting: <span class="text--bright">Pay ASAP</span>
  </div>
</nav>`}              
            </pre>
            <h4>Bottom Nav</h4>
            <p>Bottom nav should be a separate element so the top account and logo can remain.</p>
            <pre>
{`<nav class="navbarBottom">
  <ul class="navbarBottom-nav">
    <li class="navbarBottom-item">
      <div class="navbarBottom-icons"><i class="icon icon-shop"></i></div>
      <div class="navbarBottom-label">Shop</div>
    </li>
    <li class="navbarBottom-item navbarBottom-item--selected">
      <div class="navbarBottom-icons"><i class="icon icon-cart icon-cart--selected"></i><span class="badge">8</span></div>
      <div class="navbarBottom-label">Cart</div>
    </li>
    <li class="navbarBottom-item">
      <div class="navbarBottom-icons"><i class="icon icon-orders"></i></div>
      <div class="navbarBottom-label">Orders</div>
    </li>
    <li class="navbarBottom-item">
      <div class="navbarBottom-icons"><i class="icon icon-payments"></i></div>
      <div class="navbarBottom-label">Payments</div>
    </li>
    <li class="navbarBottom-item">
    <div class="navbarBottom-icons"><i class="icon icon-messages"></i><span class="badge">2</span></div>
    <div class="navbarBottom-label">Messages</div>
    </li>
  </ul>
</nav>`}              
            </pre>
          </React.Fragment>)
  }
  
  get colorsSection() {
    const colorMap = {
      '$color--blue-20': ["#E9F3F6"],
      '$color--blue-30': ["#00AEF6", "active"],
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
    return <section className={containerBlock(null, {expandable: true, expanded: this.isExpanded('colors')})}>
          <a className="anchor" id="colors"></a>
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
                    <span className={`subheader subheader--light`}>Subheader</span>
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
    const main = this.makeSection("layout", "Page Layout", <React.Fragment>
      <p>There are only 4 layout options (not including gard grids which are a separate layout within these options):</p>
      <ol>
        <li>Full width page - most shop pages and all device layouts</li>
        <li>Left Gutter - for showing filters</li>
        <li>Right Gutter - Cart, Checkout, Payments, Account</li>
        <li>Left Gutter w/Divided main section(s) (nested)</li>
      </ol>
      <p>Gutters are static widths and main content expands to fill the space.</p>
    </React.Fragment>)


    return <React.Fragment>
      {main}
      <h3 className="pageHeader">Left Gutter</h3>
      <div className={layoutBem(null, 'gutterLeft')}>
        <div className={layoutBem('gutter')}>
          <section className="container">
            <p>Gutter Content</p>
          </section>
        </div>
        <div className={layoutBem('main')}>
          <section className="container">
            <p>Main Container Content</p>
          </section>
          <section className="container">
            <p>Main Container Content</p>
          </section>
        </div>
      </div>
      <h3 className="pageHeader">Right Gutter</h3>
      <div className={layoutBem(null, 'gutterRight')}>
        <div className={layoutBem('gutter')}>
          <section className="container">
            <p>Gutter Content</p>
          </section>
          <section className="container">
            <p>Gutter Content</p>
          </section>
        </div>
        <div className={layoutBem('main')}>
          <section className="container">
            <p>Main Container Content</p>
          </section>
          <section className="container">
            <p>Main Container Content</p>
          </section>
          <section className="container">
            <p>Main Container Content</p>
          </section>
        </div>
      </div>
      <h3 className="pageHeader">Nested Layout</h3>
      <div className={layoutBem(null, 'gutterLeft')}>
        <div className={layoutBem('gutter')}>
          <section className="container">
            <p>Gutter Content</p>
          </section>
          <section className="container">
            <p>Gutter Content</p>
          </section>
        </div>
        <div className={layoutBem('main')}>
          <section className="container">
            <p>Main Container Content</p>
          </section>
          <div className={layoutBem(null, 'gutterRight')}>
            <div className={layoutBem('main')}>
              <section className="container">
                <p>Main Container Main Content</p>
              </section>
            </div>
            <div className={layoutBem('gutter')}>
              <section className="container">
                <p>Main Container Gutter </p>
              </section>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  }

  get containersSection() {
    return this.makeSection("containers", "Containers", <React.Fragment>
      <p>
        Containers are similar to material design paper. They generally have a white background and glow shadow. 
        They are used to group sections on a page and may or may not have an expand/collapse header section.
      </p>
      <p>
        For example, this style guide is primarily composed of container--expandible with a container-header and container-body children.
      </p>
      <p>Withing a container or container-body, container-section blocks to control vertical spacing.</p>
    </React.Fragment>)
  }

  get buttonsSection() {
    const btnBem = makeBem("btn")
    return this.makeSection("buttons", "Buttons & Links", <React.Fragment>
      <p>New button elements should all have the class <code>.btn</code>. For backwards 
      compatility, all button elements and items with <code>.styleAs-button</code> will also generally work</p>
      <h4>Filled Buttons (default)</h4>
      <p>Note that these all have hover and active states. By default they take the full width of the container.</p>
      <div className={containerBlock('section')}>
        <p>Standard Button classnames <code>{btnBem()}</code></p>
        <div className={btnBem()}>Standard Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Standard Primary Button classnames <code>{btnBem(null, 'primary')}</code></p>
        <div className={btnBem(null, 'primary')}>Primary Standard Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Standard Secondary Button classnames <code>{btnBem(null, 'secondary')}</code></p>
        <div className={btnBem(null, 'secondary')}>Secondary Standard Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Disabled Button regardless of classnames. Real buttons marked as disabled</p>
        <button className={btnBem(null, 'secondary')} disabled>Disabled Button</button>
        <p>or classname className={btnBem(null, 'disabled')}</p>
        <div className={btnBem(null, ['primary', 'disabled'])}>Disabled Primary Button</div>
      </div>
      <h4>Medium Emphasis Buttons - oulined. These should have class <code>btn</code> with the <code>--outline</code> modifier 
      in addition to any other modifiers needed.</h4>
      <div className={containerBlock('section')}>
        <p>Standard Button classnames <code>{btnBem(null, 'outline')}</code></p>
        <div className={btnBem(null, 'outline')}>Outline Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Standard Primary Button classnames <code>{btnBem(null, ['outline', 'primary'])}</code></p>
       <div className={btnBem(null, ['outline', 'primary'])}>Primary Outline Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Standard Secondary Button classnames <code>{btnBem(null, ['outline', 'secondary'])}</code></p>
        <div className={btnBem(null, ['outline', 'secondary'])}>Secondary Outline Button</div>
      </div>
      <div className={containerBlock('section')}>
        <p>Disabled Button regardless of classnames. Real buttons marked as disabled</p>
        <button className={btnBem(null, ['outline', 'secondary'])} disabled>Disabled Outline Button</button>
        <p>or classname className={btnBem(null, ['outline', 'disabled'])}</p>
        <div className={btnBem(null, ['primary', 'disabled', 'outline'])}>Disabled Primary Outline Button</div>
      </div>
      <div className={containerBlock('section')}>
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
      </div>
      <div className={containerBlock('section')}>
        <h4>Links</h4>
        <p>In general, all links are the primary color, except ones inside menus which are the standard body text black color.
          Specific links can be overridden with other colors as below.
        </p>
        <p><a className='text--default'>text--default e.g. for menus</a></p>
        <p><a className='text--primary'>text--primary for paragraphy text</a></p>
        <p><a className='text--secondary'>text--secondary</a></p>
        <p><a className='text--muted'>text--muted - disabled links.</a></p>
        <p><a className='text--danger'>text--danger - error and verification messages.</a></p>
      </div>

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
    return this.makeSection("quantity", "Quantity Selector", <React.Fragment>
      <div className={containerBlock('section')}>
        <h4>With single button</h4>
        <div className={qBem()}>
          <div className={qBem('minus', { disabled: true })}>&ndash;</div>
          <div className={qBem('count')}>1</div>
          <div className={qBem('plus')}>+</div>
          <div className={qBem('add')}>Add</div>
        </div>
      </div>

      <div className={containerBlock('section')}>
        <h4>With Icon </h4>
        <div className={qBem()}>
          <div className={qBem('label')}><i className="icon icon-trash"></i></div>
          <div className={qBem('minus', { disabled: true })}>&ndash;</div>
          <div className={qBem('count')}>1</div>
          <div className={qBem('plus')}>+</div>        
        </div>
      </div>

      <div className={containerBlock('section')}>
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
          <p><span className={nBem(null, ['left'])}><i className="icon icon-tooltip icon-tooltip--primary"></i>Info Notification</span></p>
          <p><span className={nBem(null, ['left', 'success'])}><i className="icon icon-check"></i>Success Notification</span></p>
          <p><span className={nBem(null, ['left', 'warning'])}><i className="icon icon-warning"></i>Warning Notification<br />Multi-line</span></p>
          <p><span className={nBem(null, ['left', 'error'])}><i className="icon icon-alert icon-alert--active"></i>Error Notification</span></p>
        </div>
      </div>
      <div className={containerBlock('section')}>
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
      </div>
    </React.Fragment>)
  }

  get badgesSection() {
    const fBem = makeBem('flag');
    const ttBem = makeBem('tooltip');
    return this.makeSection("badges", "Badges & Flags", <React.Fragment>
      <div className={containerBlock('section')}>
        <h4>Badges</h4>
        <p>Badges are generally used as numerical icons</p>
        <p>Five <span className='badge'>5</span></p>
        <p>Thirty four <span className='badge'>34</span></p>
        <p>Six hundred ninety seven <span className='badge'>697</span></p>
      </div>
      <div className={containerBlock('section')}>
        <h5>Muted Badges</h5>
        <p>Thirty four <span className='badge badge--muted-light'>34</span></p>
      </div>
      <div className={containerBlock('section')}>
        <h5>Step Badges</h5>
        <div className='badgeStep'>1</div>
        <div className='badgeStep'>2</div>
        <div className='badgeStep badgeStep--muted-light'>1</div>
        <div className='badgeStep badgeStep--muted-light'>2</div>
        <h5>Smaller Step Badges</h5>
        <div className='badgeStep badgeStep--small'>1</div>
        <div className='badgeStep badgeStep--small'>2</div>
        <div className='badgeStep badgeStep--muted-light badgeStep--small'>1</div>
        <div className='badgeStep badgeStep--muted-light badgeStep--small'>2</div>
      </div>
      <div className={containerBlock('section')}>
        <h4>Flags</h4>
        <p>There are 4 types of Flags, each my have a tooltip</p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div className={fBem(null, 'preferred')}>
            Preferred
            <div className={ttBem(null)}>
              <div className={ttBem('body')}>
                This item is offered by a supplier that offers fast shipping and fair prices.
              </div>
            </div>
          </div>
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
          <div className={fBem(null, 'bestSeller')}>
            Best Seller
            <div className={ttBem(null)}>
              <div className={ttBem('body')}>
                This item is offered by a supplier that offers fast shipping and fair prices.
              </div>
            </div>
          </div>
          <div className={fBem(null, 'promo')}>
            Promo
            <div className={ttBem(null, 'right')}>
              <div className={ttBem('body')}>
                This item is offered by a supplier that offers fast shipping and fair prices.
              </div>
            </div>
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
        <div className={containerBlock('section')}>
          <div className="searchBar">
            <input type="text" className="search" id="search" name="search" placeholder="Search"/>
            <div className="searchBar-icons">
              <i className="icon icon-close"></i>
              <i className="icon icon-search"></i>
              
            </div>
          </div>
        </div>
        <div className={containerBlock('section')}>
          <label htmlFor="sampleId">Sample Field</label>
          <input type="text" id="sampleId" name="sample" placeholder="hint"/>          
        </div>
        
        <div className={containerBlock('section')}>
          <label htmlFor="sampleTextArea">Text Area</label>
          <textarea id="sampleTextArea" placeholder="Write text"></textarea>
        </div>
      
        <div className={containerBlock('section')}>
          <div className={menuBem(null, { select: true, expanded: !this.isExpanded("exampleSelect")})}>
            <div className={menuBem('label')} onClick={this.toggleExpanded.bind(this, "exampleSelect")}>
              Selected Value
            </div>
            <div className={menuBem('body')}>
              <div className={menuBem('item')}>Option 1</div>
              <div className={menuBem('item')}>Option 2</div>
            </div>
          </div>
        </div>
        <div className={containerBlock('section')}>
          <input type="radio" value="1" id="radio_1" name="radio"></input><label htmlFor="radio_1">Radio 1</label>
          <br/>
          <input type="radio" value="2" id="radio_2" name="radio"></input><label htmlFor="radio_2">Radio 2</label>
        </div>
        <div className={containerBlock('section')}>
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

  get cardsSection() {
    const cardBem = makeBem('card');
    const catBem = makeBem('card', 'catalogProduct');
    const fBem = makeBem('flag');
    const ttBem = makeBem('tooltip');
    const productBem = makeBem("product");
    const iBem = makeBem("icon");
    
    const id = "cards";
    return <section>
      <a className="anchor" id={id}></a>
      <h3 className="pageHeader">Cards</h3>
      <h4 className="pageHeader">Basic cards (for any use) - even layouts across wrap and no-wrap sets</h4>
      <div className="cardGrid">
        <div className={cardBem()}>
          <h5>Card header</h5>
          <p>Card content 1 of 2</p>
        </div>
        <div className={cardBem()}>
          <h5>Card header</h5>
          <p>Card content 2 of 2</p>
        </div>
      </div>
      <h6 className="pageHeader">Cards that likely wrap</h6>
      <div className="cardGrid">
        { [1,2,3,4,5,6].map((i) => {
          return <div className={cardBem()}>
            <h5>Card header</h5>
            <p>Card content {i} of 6</p>
          </div>
        })}        
      </div>  
      <h4 className="pageHeader">Catalog cards</h4>    
      <div className="cardGrid">
        {[1,2,3,4,5].map((i) => {
          const favorited = i % 2 == 0;
          const imgSrc = i % 2 == 0 ? '/assets/styleguide/product-portrait.png' : '/assets/styleguide/product-landscape.jpg';
          const title = i % 2 == 0 ? "Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx" : "Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx";
          return <div className={catBem()}>
            <div className={catBem('header')}>
              <div className={catBem('favorite')}>
                <i className={iBem('favorite', {favorited})}></i>
              </div>
              <div className={catBem('flags')}>
                <div className={fBem(null, 'preferred')}>
                  Preferred
                  <div className={ttBem(null)}>
                    <div className={ttBem('body')}>
                      This item is offered by a supplier that offers fast shipping and fair prices.
                    </div>
                  </div>
                </div>
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
              </div>
              <div className={catBem('addToList')}>
                <i className={iBem('cart-plus', { disabled: favorited })}></i>
              </div>
            </div>
            <div className={catBem('image')}>
              <img className={productBem('image')} src={imgSrc}/>
              <div className={catBem('viewDetails')}>View details</div>

            </div>
            <div className={catBem('body')}>
              <div className={productBem('title')}>{title}</div>
              <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div> 
              <div className="details2 text--muted">More options</div>
              <div className={productBem('prices')}>
                <div className={productBem('price', 'torch')}>$16 Torch</div>
                <div className={productBem('price', 'retail')}>$22 Retail</div>
              </div>
              <div className={productBem('availability')}>
                Eligible for 1-Day Shipping
              </div>
            </div>
          </div>
        })}
      </div>
      <h4 className="pageHeader">Horizontal Scroll catalog cards</h4>
      <div className="scrollContainer">
        <div className="scrollContainer-scrollArea--directionX">
          <div className="cardGrid">
            {[1, 2, 3, 4, 5, 6, 7, 8 ,9].map((i) => {
              const favorited = i % 2 == 0;
              const imgSrc = i % 2 == 0 ? '/assets/styleguide/product-portrait.png' : '/assets/styleguide/product-landscape.jpg';
              const title = i % 2 == 0 ? "Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx" : "Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx";
              return <div className={catBem()}>
                <div className={catBem('header')}>
                  <div className={catBem('favorite')}>
                    <i className={iBem('favorite', { favorited })}></i>
                  </div>
                  <div className={catBem('flags')}>
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
                  </div>
                  <div className={catBem('addToList')}>
                    <i className={iBem('cart-plus', { disabled: favorited })}></i>
                  </div>
                </div>
                <div className={catBem('image')}>
                  <img className={productBem('image')} src={imgSrc} />
                  <div className={catBem('viewDetails')}>View details</div>

                </div>
                <div className={catBem('body')}>
                  <div className={productBem('title')}>{title}</div>
                  <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
                  <div className="details2 text--muted">More options</div>
                  <div className={productBem('prices')}>
                    <div className={productBem('price', 'torch')}>$16 Torch</div>
                    <div className={productBem('price', 'retail')}>$22 Retail</div>
                  </div>
                  <div className={productBem('availability')}>
                    Eligible for 1-Day Shipping
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className="scrollContainer-arrow scrollContainer-arrow--left"></div>
        <div className="scrollContainer-arrow scrollContainer-arrow--right"></div>
      </div>
      <h4 className="pageHeader">Card Overlays</h4>
      <p>Note that due to mobile differences, the "favorite" interface needs to be specifically indicated as card-overlay--adder</p>
      <div className="cardGrid">
        {[1, 2, 3, 4, 5].map((i) => {
          const favorited = i % 2 == 0;
          const imgSrc = i % 2 == 0 ? '/assets/styleguide/product-portrait.png' : '/assets/styleguide/product-landscape.jpg';
          const title = i % 2 == 0 ? "Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx" : "Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx";
          return <div className={catBem()}>
            <div className={catBem('header')}>
              <div className={catBem('favorite')}>
                <i className={iBem('favorite', { favorited })}></i>
              </div>
              <div className={catBem('flags')}>
                <div className={fBem(null, 'preferred')}>
                  Preferred
                  <div className={ttBem(null)}>
                    <div className={ttBem('body')}>
                      This item is offered by a supplier that offers fast shipping and fair prices.
                    </div>
                  </div>
                </div>
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
              </div>
              <div className={catBem('addToList')}>
                <i className={iBem('cart-plus', { disabled: favorited })}></i>
              </div>
            </div>
            <div className={catBem('image')}>
              <img className={productBem('image')} src={imgSrc} />
              <div className={catBem('viewDetails')}>View details</div>
            </div>
            <div className={catBem('body')}>
              <div className={productBem('title')}>{title}</div>
              <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
              <div className="details2 text--muted">More options</div>
              <div className={productBem('prices')}>
                <div className={productBem('price', 'torch')}>$16 Torch</div>
                <div className={productBem('price', 'retail')}>$22 Retail</div>
              </div>
              <div className={productBem('availability')}>
                Eligible for 1-Day Shipping
              </div>
            </div>
            <div className={cardBem("overlay", { white: favorited, adder: i == 4 || i == 2})}>
              <div className={cardBem("overlayContent")}>
                {i == 1 ? <div className="itemStatus itemStatus--inList">In List</div> : null }
                {i == 2 ? <React.Fragment>
                  <h6>Add to List:</h6>
                  <div className={qBem(null, 'ctr')}>
                  <div className={qBem('label')}>QTY:</div>
                  <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                  <div className={qBem('count')}>1</div>
                  <div className={qBem('plus')}>+</div>
                  <div className={qBem('buttons')}>
                    <div className={qBem('cancel')}>Cancel</div>
                    <div className={qBem('add')}>Add</div>
                  </div>
                </div></React.Fragment> : null}
                {i == 3 ? <React.Fragment><div className="itemStatus itemStatus--unavailable">
                  Temporarily<br/>Unavailable
                </div><div className="btn btn--secondary btn--medium">
                  Substitute Available
                </div></React.Fragment> : null}
                {i == 4 ? <React.Fragment>
                  <i className={iBem('favorite', 'favorited')}></i>
                  <h6>Add to Favorite?</h6>
                  <div className={qBem(null, 'ctr')}>
                    <div className={qBem('label')}>
                      Preset<br/>
                      QTY:
                    </div>
                    <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                    <div className={qBem('count')}>1</div>
                    <div className={qBem('plus')}>+</div>
                    <div className={qBem('buttons')}>
                      <div className={qBem('cancel')}>Cancel</div>
                      <div className={qBem('add')}>Add</div>
                    </div>
                  </div></React.Fragment> : null}
                {i == 5 ? <div className="btn btn--outline btn--secondary btn--small">Add Vendor</div> : null}

              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  }

  get tablesSection() {
    const main = this.makeSection("tables", "Tables", <React.Fragment>
      <div className={containerBlock("section")}>
        <h4>Headered Tables</h4>
        <p>These are typical tables with labeled columns. The headers may or may not be interactive. 
          They may be within a container or exist as their own container.</p>
        <p>The typography section above is an example of a non-interactive headered table within a container.</p>
      </div>
      <div className={containerBlock("section")}>
        <h6>Table with interactive header, inside a container</h6>
        <p>Table header may also include interactive elements for sorting, filtering and selecting</p>
        <table>
          <thead className="with-controls">
            <tr>
              <th>Torch Order # <i className="icon icon-sort"></i></th>
              <th>Vendor <i className="icon icon-filter"></i></th>
              <th>Invoice Date <i className="icon icon-sort-up"></i></th>
              <th>Amount <i className="icon icon-sort-down"></i></th>
              <th>Pay <input type="checkbox" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1120
              </td>
              <td>
                Atlanta Dental
              </td>
              <td>
                01/01/2020
              </td>
              <td>
                $244.55
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                1120
              </td>
              <td>
                Atlanta Dental
              </td>
              <td>
                01/01/2020
              </td>
              <td>
                $244.55
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                1120
              </td>
              <td>
                Atlanta Dental
              </td>
              <td>
                01/01/2020
              </td>
              <td>
                $244.55
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={containerBlock("section")}>
        <h4>Table Toggles</h4>
        <p>Some headered tables may have sets of radios (buttons on mobile) above for additional filtering.</p>
        <ul className={tableToggleBem()}>
          <li className={tableToggleBem('item')}>
            <div>
              <span className={tableToggleBem('label')}>
                Unpaid
                <span className={tableToggleBem('count')}>(20)</span>
              </span>
              <span className={tableToggleBem('details')}>
                $1,283.33
              </span>
            </div>
          </li>
          <li className={tableToggleBem('item')}>
            <div>
              <span className={tableToggleBem('label')}>
                Unpaid
                <span className={tableToggleBem('count')}>(20)</span>
              </span>
              <span className={tableToggleBem('details')}>
                $1,283.33
              </span>
            </div>
          </li>
          <li className={tableToggleBem('item', 'selected')}>
            <div>
              <span className={tableToggleBem('label')}>
                Unpaid
                <span className={tableToggleBem('count')}>(20)</span>
              </span>
              <span className={tableToggleBem('details')}>
                $1,283.33
              </span>
            </div>
          </li>
        </ul>   
      </div>      
    </React.Fragment>)
    return <React.Fragment>
      {main}
      <div className={layoutBem(null, 'gutterLeft')}>
        <div className={layoutBem('gutter')}>
          <div className="container">
            <h4 className="pageHeader">
              Order Summary<br/>
              $980.00
            </h4>
            <div className="summaryTable">
              <table>
                <tbody>
                  <tr className="summaryTable-rollup summaryTable-rollup--expanded">
                    <td>
                      DC Dental <span className="summaryTable-count">(2 Items)</span>
                    </td>
                    <td>
                      $cost                    
                    </td>
                  </tr>
                  <tr className="summaryTable-subItem">
                    <td>Item</td>
                    <td>$cost</td>
                  </tr>
                  <tr className="summaryTable-subItem">
                    <td>Item</td>
                    <td>$cost</td>
                  </tr>
                  <tr className="summaryTable-rollup">
                    <td>
                      Atlanta Dental <span className="summaryTable-count">(3 Items)</span>
                    </td>
                    <td>
                      $cost
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Torch Service Charge
                    </td>
                    <td>
                      $cost
                    </td>
                  </tr>
                </tbody>                
              </table>
              <div className="summaryTable-footer">
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>$subtotal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className={layoutBem('main')}>
          <div className="container">
            <h4>Summary Tables</h4>
            <p>These tables are always 2 columns and are used for things like orders and cards</p>   
          </div>
        </div>
      </div>
    </React.Fragment>
    

  }

  get modalsSection() {
    return this.makeSection("modals", "Modals", <React.Fragment>TBD</React.Fragment>)
  }

  iconLine(i) {
    if (Array.isArray(i)) {
      return <React.Fragment>
        <h5>{i[0]}{i[2] && " (deprecated)"}</h5>
        {[i[0], ...i[1].map((m) => `${i[0]}--${m}`)].map((icon) => this.iconLine(icon))}
      </React.Fragment>
    }
    const idx = i.indexOf("--");
    if (idx && idx > 0) {
      i = `${i.substr(0, idx)} icon-${i}`
    }
    const className = `icon icon-${ i }`
    return <React.Fragment><i className={className}></i> {className}<br /><br/></React.Fragment>
  }

  get iconsSection() {
    return this.makeSection("icons", "Icons", <React.Fragment>
      <p>Some icons use font awesome and other use SVG icons  so there are slightly different options for modifying each one. 
        Generally the options provided here are the only ones that should be used.</p>
      <h4>Font Awesome Icons</h4>
      {
        ['radio', 'radio--large', 
        'radio-checked', 'radio-checked--large', 
        'checkbox', 'checkbox--large', 
        'checkbox-checked', 'checkbox-checked--large', 
          'check', 'success', 'check--large', 
          'check-circle', 'check-circle--large',
        'search',
        'sort',
        'sort-up',
        'sort-down',
        'filter'
        ].map((i) => this.iconLine(i))
      }
      <h4>Image Icons</h4>
      {
        [
          ['chat', []],
          ['tooltip', ['primary', 'active', 'disabled']],
          ['info', ['primary', 'active', 'disabled'], true],
          ['warning', ['active', 'disabled']],
          ['alert', ['active', 'disabled']],
          ['danger', ['active', 'disabled'], true],
          ['account', ['active', 'disabled']],
          ['profile', ['active', 'disabled'], true],
          ['compose', ['active', 'disabled', 'primary', 'primary icon-compose--active'] ],
          ['edit', ['active', 'disabled', 'primary', 'primary icon-edit--active'], true],
          ['equipment', ['active', 'disabled']],
          ['rewards', ['active', 'disabled']],
          ['password-show', []],
          ['visible', [], true],
          ['password-hide', []],
          ['invisible', [], true],
          ['list', []],
          ['trash', ['active', 'disabled']],
          ['close', ['active', 'disabled', 'small', 'small icon-close--active', 'small icon-close--disabled']],
          ['cart-plus', ['active', 'disabled']],
          ['plus-circle', ['active', 'disabled'], true],
          ['favorite', ['favorited']],
          ['star', ['favorited'], true],
          ['carousel-chevron-right', []],
          ['carousel-chevron-left', []],
          ['print', ['selected', 'active', 'disabled']],
          ['shop', ['selected', 'active', 'disabled']],
          ['cart', ['selected', 'active', 'disabled']],
          ['messages', ['selected', 'active', 'disabled']],
          ['orders', ['selected', 'active', 'disabled']],
          ['payments', ['selected', 'active', 'disabled']],

        ].map((i) => this.iconLine(i))
      }
      <div className="bg-muted">
      {
        [
          ['chevron-right', ['white', 'small', 'small icon-chevron-right--white']]
        ].map((i) => this.iconLine(i))
      }
      </div>
          

    </React.Fragment>)
  }

  render() {
    return <div className="app-root bg-light d-flex">
      <Nav links={links}/>
      <main className="app-body">
        <nav className="navbarSecondary">
          <ul className="navbarSecondary-nav">
            <li className="navbarSecondary-item">
              <a href="#" className="navbarSecondary-link navbarSecondary-link--active">Invoices</a>
            </li>
            <li className="navbarSecondary-item">
              <a href="#" className="navbarSecondary-link">Charges</a>
            </li>
            <li className="navbarSecondary-item">
              <a href="#" className="navbarSecondary-link">Statements</a>
            </li>
          </ul>
          <div className="navbarSecondary-leftCol">
            <p>
              Payment Setting: <span className="text--bright">Pay ASAP</span>&nbsp;
              <i className="icon icon-tooltip"><div className="tooltip tooltip--right">Tooltip content</div></i>
            </p>
          </div>
        </nav>
        {this.navSection}
        {this.menuSection}
        {this.cardsSection}
        {this.variantsSection}
        {this.quantitySection}
        {this.tablesSection}
        {this.modalsSection}
        {this.formsSection}
        {this.messagesSection}

        {this.buttonsSection}
        {this.notificationsSection}
        {this.badgesSection}
        {this.tooltipsSection}
        {this.iconsSection}

        {this.typographySection}
        {this.colorsSection}
        
        {this.containersSection}
        {this.pageLayoutSection}
        {this.spacingSection}
      </main>
      <nav class="navbarBottom">
        <ul class="navbarBottom-nav">
          <li class="navbarBottom-item">
            <div class="navbarBottom-icons"><i class="icon icon-shop"></i></div>
            <div class="navbarBottom-label">Shop</div>
          </li>
          <li class="navbarBottom-item navbarBottom-item--selected">
            <div class="navbarBottom-icons"><i class="icon icon-cart icon-cart--selected"></i><span class="badge">8</span></div>
            <div class="navbarBottom-label">Cart</div>
          </li>
          <li class="navbarBottom-item">
          <div class="navbarBottom-icons"><i class="icon icon-orders"></i></div>
          <div class="navbarBottom-label">Orders</div>
          </li>
          <li class="navbarBottom-item">
          <div class="navbarBottom-icons"><i class="icon icon-payments"></i></div>
          <div class="navbarBottom-label">Payments</div>
          </li>
          <li class="navbarBottom-item">
            <div class="navbarBottom-icons"><i class="icon icon-messages"></i><span class="badge">2</span></div>
            <div class="navbarBottom-label">Messages</div>
          </li>
        </ul>
      </nav>
    </div>
  }
}


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);
