import React from 'react';
import ReactDOM from 'react-dom';

import { makeBem } from './util';
import { Align, List, Spacing, TopNav, BottomNav } from './sections';

const containerBlock = makeBem('container');
const qBem = makeBem('quantitySelector');
const ciBem = makeBem('counterInput');
const layoutBem = makeBem('layout');
const tableToggleBem = makeBem('tableToggle');
const menuBem = makeBem('menu');

const cardBem = makeBem('card');
const catBem = makeBem('card', 'product');
const fBem = makeBem('flag');
const ttBem = makeBem('tooltip');
const productBem = makeBem('product');
const iBem = makeBem('icon');

const links = [
  {
    name: 'Components',
    path: 'components',
    items: [
      {
        name: 'Navs',
        path: 'nav',
      },
      {
        name: 'Menus, Filter & Sort',
        path: 'menus',
      },
      {
        name: 'Cards',
        path: 'cards',
      },
      {
        name: 'Variant Selector',
        path: 'variants',
      },
      {
        name: 'Quantity Selector',
        path: 'quantity',
      },
      {
        name: 'Tables',
        path: 'tables',
      },
      {
        name: 'Modals',
        path: 'modals',
      },
      {
        name: 'Forms',
        path: 'forms',
      },
      {
        name: 'Messages',
        path: 'messages',
      },
    ],
  },
  {
    name: 'Elements',
    path: 'elements',
    items: [
      {
        name: 'Buttons & Links',
        path: 'buttons',
      },
      {
        name: 'Notifications',
        path: 'notifications',
      },
      {
        name: 'Badges & Flags',
        path: 'badges',
      },
      {
        name: 'Tooltips',
        path: 'tooltips',
      },
      {
        name: 'Icons',
        path: 'icons',
      },
    ],
  },
  {
    name: 'Brand',
    path: 'brand',
    items: [
      {
        name: 'Typography',
        path: 'typography',
      },
      {
        name: 'Colors',
        path: 'colors',
      },
    ],
  },
  {
    name: 'Flow',
    path: 'flow',
    items: [
      {
        name: 'Containers',
        path: 'containers',
      },
      {
        name: 'Layout',
        path: 'layout',
      },
      {
        name: 'Spacing',
        path: 'spacing',
      },
      {
        name: 'Align',
        path: 'align',
      },
    ],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedItems: {},
    };
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
      expandedItems[item] = true;
    } else {
      expandedItems[item] = false;
    }
    this.setState({ expandedItems });
  }

  makeSection(id, title, content) {
    return (
      <section
        className={containerBlock(null, { expandable: true, expanded: this.isExpanded(id) })}
      >
        <a className="anchor" id={id}></a>
        <div className={containerBlock('header')} onClick={this.toggleExpanded.bind(this, id)}>
          <h3>{title}</h3>
        </div>
        <div className={containerBlock('body')}>{content}</div>
      </section>
    );
  }

  get navSection() {
    return this.makeSection(
      'nav',
      'Navs',
      <React.Fragment>
        <p>
          There are two separate navs in the design system. The top nav has all primary links
          visible above the tablet breakpoint, and only the logo/menu visible below that breakpoint.
        </p>
        <p>
          The bottom nav includes all the primary links with icons and is visible below the table
          breakpoint.
        </p>
        <h4>Top Nav</h4>
        <p>
          The top nav structure should be identital to the existing nav element structure and should
          be structure as:{' '}
        </p>
        <pre>
          {`<nav class="navbar">
  <div class="navbar-brand">
    <img class="navbar-torchLogo" src="/assets/images/torch_logo.logo">
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
        <p>
          Secondary nav scrolls away because items are also accessible from the top-nav dropdowns.
        </p>
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
  <div class="navbarSecondary-rightCol">
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
      <div class="navbarBottom-icons">
        <i class="icon icon-cart icon-cart--selected"></i>
        <span class="badge">8</span>
        </div>
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
    <div class="navbarBottom-icons">
      <i class="icon icon-messages"></i>
      <span class="badge">2</span>
    </div>
    <div class="navbarBottom-label">Messages</div>
    </li>
  </ul>
</nav>`}
        </pre>
      </React.Fragment>
    );
  }

  get colorsSection() {
    const colorMap = {
      '$color--blue-20': ['#E9F3F6'],
      '$color--blue-30': ['#00AEF6', 'active'],
      '$color--blue-40': ['#008FBE', 'highlight'], // highlight
      '$color--blue-50': ['#0078A0', 'text, background'], // text, bg
      '$color--blue-60': ['#006F94', 'active color'], // active
      '$color--blue-90': ['#002B4A'],
      '$color--green-20': ['#E7F7F3'],
      '$color--green-30': ['#29BD9A', 'text'], // text
      '$color--green-40': ['#2BA88A'],
      '$color--green-50': ['#1D8F74', 'text'], // text
      '$color--green-60': ['#1A846B'],
      '$color--berry-20': ['#F9EBEB'],
      '$color--berry-50': ['#CD5858'],
      '$color--yellow-20': ['#F8F1DA'],
      '$color--yellow-50': ['#FDC81B'],
      '$color--orange-40': ['#CF5E37'],
      '$color--orange-50': ['#C77729'],
      '$color--purple-20': ['#F0EEF8'],
      '$color--purple-50': ['#6D5BB9'],
      '$color--white': ['#fff'],
      '$color--gray-20': ['#F7F7F7'],
      '$color--gray-30': ['#D8D8D8'],
      '$color--gray-50': ['#A4A4A4'],
      '$color--gray-60': ['#6C6C6C', 'text'],
      '$color--gray-90': ['#1D1D1D', 'body text'],
    };

    const colorGroups = [];
    let lastColor = null;
    Object.keys(colorMap).forEach((varName) => {
      const hex = colorMap[varName][0];
      const notes = colorMap[varName][1];
      let colorName = varName.replace('$color--', '');
      colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
      const colorGroup = colorName.replace(/-\d+$/, '');
      if (colorGroup != lastColor) {
        colorGroups.push([]);
        lastColor = colorGroup;
      }
      colorGroups[colorGroups.length - 1].push({
        varName,
        hex,
        colorName,
        colorGroup,
        notes,
      });
    });
    return (
      <section
        className={containerBlock(null, { expandable: true, expanded: this.isExpanded('colors') })}
      >
        <a className="anchor" id="colors"></a>
        <div
          className={containerBlock('header')}
          onClick={this.toggleExpanded.bind(this, 'colors')}
        >
          <h3>Colors</h3>
        </div>
        <div className={containerBlock('body')}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colorGroups.map((group, i) => (
              <div style={{ display: 'flex', flexDirection: 'column', margin: '1em' }} key={i}>
                <h4>{group[0].colorGroup}</h4>
                {group.map((color, j) => {
                  const { varName, hex, colorName, notes } = color;
                  const style = {
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    backgroundColor: hex,
                  };
                  return (
                    <div
                      key={j}
                      style={{ marginBottom: '1em', display: 'flex', alignItems: 'flex-start' }}
                    >
                      <span style={style}></span>
                      <span>
                        &nbsp;{colorName} / {hex}
                        <br />
                        &nbsp;{varName}
                      </span>
                      {notes ? <strong>&nbsp;{notes}</strong> : ''}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  //TODO: Move to another page so this wide table doesn't interfere with page layout on the main style guide page.
  get typographySection() {
    return this.makeSection(
      'typography',
      'Typography',
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Dark Gray</th>
              <th>Gray</th>
              <th>Primary</th>
              <th>Green</th>
              <th>Raspberry</th>
              <th>Bright Green</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((n) => {
              return (
                <tr key={n}>
                  <td>
                    <div className="details2">
                      h{n}, .styleAs-h{n}
                    </div>
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
              );
            })}
            <tr>
              <td>
                <div className="details2">h6, .styleAs-h6, .subheader</div>
                <span className={`subheader`}>Subheader</span>
                <div className="details2">
                  h6.subheader--light, .styleAs-h6--light, .subheader--light
                </div>
                <span className={`subheader subheader--light`}>Subheader</span>
              </td>
              <td>
                <div className="details2">
                  h6.text--muted, .styleAs-h6.text--muted, .subheader.text--muted
                </div>
                <span className={`subheader text--muted`}>Subheader</span>
                <div className="details2">
                  h6.text--muted.subheader--light, .styleAs-h6--light.text--muted,
                  .subheader--light.text--muted
                </div>
                <span className={`subheader subheader--light text--muted`}>Subheader</span>
              </td>
              <td>
                <div className="details2">
                  h6.text--primary, .styleAs-h6.text--primary, .subheader.text--primary
                </div>
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
                <span className={`styleAs-p`}>
                  <strong>Body</strong>
                </span>
                <div className="details2">
                  p.text--strikethrough, .styleAs-p.text--strikethrough
                </div>
                <span className={`styleAs-p text--strikethrough`}>Body</span>
              </td>
              <td>
                <div className="details2">p.text--muted, .styleAs-p.text--muted</div>
                <span className={`subheader text--muted`}>Body</span>
                <div className="details2">p.text--muted strong, .styleAs-p.text--muted srong</div>
                <span className={`subheader text--muted`}>
                  <strong>Body</strong>
                </span>
              </td>
              <td>
                <div className="details2">p.text--primary, .styleAs-p.text--primary</div>
                <span className={`subheader text--primary`}>Body</span>
                <div className="details2">
                  p.text--primary strong, .styleAs-p.text--primary strong
                </div>
                <span className={`subheader text--primary`}>
                  <strong>Body</strong>
                </span>
              </td>
              <td></td>
              <td>
                <div className="details2">p.text--danger, .styleAs-p.text--danger</div>
                <span className={`subheader text--danger`}>Body</span>
                <div className="details2">
                  p.text--danger strong, .styleAs-p.text--danger strong
                </div>
                <span className={`subheader text--danger`}>
                  <strong>Body</strong>
                </span>
              </td>
              <td>
                <div className="details2">p.text--bright, .styleAs-p.text--bright</div>
                <span className={`subheader text--bright`}>Body</span>
                <div className="details2">
                  p.text--bright strong, .styleAs-p.text--bright strong
                </div>
                <span className={`subheader text--bright`}>
                  <strong>Body</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="details2">small, .details1, .supheader</div>
                <span className={`details1`}>Details 1</span>
                <div className="details2">small strong, .details1 strong, .supheader strong</div>
                <span className={`details1`}>
                  <strong>Details 1</strong>
                </span>
              </td>
              <td>
                <div className="details2">
                  small.text--muted, .details1.text--muted, .supheader.text--muted
                </div>
                <span className={`details1 text--muted`}>Details 1</span>
                <div className="details2">
                  small.text--muted strong, .details1.text--muted strong, .supheader.text--muted
                  strong
                </div>
                <span className={`details1 text--muted`}>
                  <strong>Details 1</strong>
                </span>
              </td>
              <td>
                <div className="details2">
                  small.text--primary, .details1.text--primary, .supheader.text--primary
                </div>
                <span className={`details1 text--primary`}>Details 1</span>
                <div className="details2">
                  small.text--primary strong, .details1.text--primary strong,
                  .supheader.text--primary strong
                </div>
                <span className={`details1 text--primary`}>
                  <strong>Details 1</strong>
                </span>
              </td>
              <td>
                <div className="details2">
                  small.text--secondary, .details1.text--secondary, .supheader.text--secondary
                </div>
                <span className={`details1 text--secondary`}>Details 1</span>
                <div className="details2">
                  small.text--secondary strong, .details1.text--secondary strong,
                  .supheader.text--secondary strong
                </div>
                <span className={`details1 text--secondary`}>
                  <strong>Details 1</strong>
                </span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="details2">.details2</div>
                <span className={`details2`}>Details 2</span>
                <div className="details2">.details2 strong</div>
                <span className={`details2`}>
                  <strong>Details 2</strong>
                </span>
              </td>
              <td>
                <div className="details2">.details2.text--muted</div>
                <span className={`details2 text--muted`}>Details 2</span>
                <div className="details2">.details2.text--muted strong</div>
                <span className={`details2 text--muted`}>
                  <strong>Details 2</strong>
                </span>
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
                <span className={`details3`}>
                  <strong>Details 3</strong>
                </span>
              </td>
              <td>
                <div className="details2">.details3.text--muted</div>
                <span className={`details3 text--muted`}>Details 3</span>
                <div className="details2">.details3.text--muted strong</div>
                <span className={`details3 text--muted`}>
                  <strong>Details 3</strong>
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="details2">a, .styleAs-a</div>
                <span className={`styleAs-a`}>link</span>
                <div className="details2">a strong, .styleAs-a strong</div>
                <span className={`styleAs-a`}>
                  <strong>a</strong>
                </span>
              </td>
              <td>
                <div className="details2">.text--muted a, .text--muted .styleAs-a</div>
                <span className="text--muted">
                  <span className={`styleAs-a`}>link</span>
                </span>
              </td>
              <td>
                <div className="details2">.text--primary a, .text--primary .styleAs-a</div>
                <span className="text--primary">
                  <span className={`styleAs-a`}>link</span>
                </span>
              </td>
              <td>
                <div className="details2">.text--secondary a, .text--secondary .styleAs-a</div>
                <span className="text--secondary">
                  <span className={`styleAs-a`}>link</span>
                </span>
              </td>
              <td>
                <div className="details2">.text--danger a, .text--danger .styleAs-a</div>
                <span className="text--danger">
                  <span className={`styleAs-a`}>link</span>
                </span>
              </td>
              <td>
                <div className="details2">.text--bright a, .text--bright .styleAs-a</div>
                <span className="text--bright">
                  <span className={`styleAs-a`}>link</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="details2">strong</div>
                <strong>strong</strong>
                <div className="details2">.text--semiBold</div>
                <span className="text--semiBold">text--semiBold</span>
              </td>
              <td>
                <div className="details2">strong.text--muted</div>
                <strong className="text--muted">strong</strong>
                <div className="details2">.text--semiBold.text--muted</div>
                <span className="text--semiBold text--muted">text--semiBold</span>
              </td>
              <td>
                <div className="details2">strong.text--primary</div>
                <strong className="text--primary">strong</strong>
                <div className="details2">.text--semiBold.text--primary</div>
                <span className="text--semiBold text--primary">text--semiBold</span>
              </td>
              <td>
                <div className="details2">strong.text--secondary</div>
                <strong className="text--secondary">strong</strong>
                <div className="details2">.text--semiBold.text--secondary</div>
                <span className="text--semiBold text--secondary">text--semiBold</span>
              </td>
              <td>
                <div className="details2">strong.text--danger</div>
                <strong className="text--danger">strong</strong>
                <div className="details2">.text--semiBold.text--danger</div>
                <span className="text--semiBold text--danger">text--semiBold</span>
              </td>
              <td>
                <div className="details2">strong.text--bright</div>
                <strong className="text--bright">strong</strong>
                <div className="details2">.text--semiBold.text--bright</div>
                <span className="text--semiBold text--bright">text--semiBold</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="details2">.text--bold</div>
                <span className="text--bold">text--bold</span>
              </td>
              <td>
                <div className="details2">.text--bold.text--muted</div>
                <span className="text--bold text--muted">text--bold</span>
              </td>
              <td>
                <div className="details2">.text--bold.text--primary</div>
                <span className="text--bold text--primary">text--bold</span>
              </td>
              <td>
                <div className="details2">.text--bold.text--secondary</div>
                <span className="text--bold text--secondary">text--bold</span>
              </td>
              <td>
                <div className="details2">.text--bold</div>
                <span className="text--bold text--danger">text--bold</span>
              </td>
              <td>
                <div className="details2">.text--bold.text--bright</div>
                <span className="text--bold text--bright">text--bold</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="details2">del</div>
                <del>del</del>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  get spacingSection() {
    return this.makeSection(
      'spacing',
      'Spacing',
      <React.Fragment>
        <p>
          Most components and containers should have spacing built-in. If you need to construct a
          component, use the spacing variables to ensure consistency. Generally speaking, use $s8
          between related/grouped elements ($s16 if those elements are more substantial e.g.
          vertical space between large buttons) and $s24 between groups within a container. Use $s32
          for most container vertical padding except for smaller cards that need to be tighter.
        </p>
        <ul>
          <li>$s8: 8px;</li>
          <li>$s10: 10px;</li>
          <li>$s12: 12px;</li>
          <li>$s14: 14px;</li>
          <li>$s16: 16px;</li>
          <li>$s20: 20px;</li>
          <li>$s24: 24px;</li>
          <li>$s32: 32px;</li>
          <li>$s40: 40px;</li>
        </ul>
        <p>Spacing utilities</p>
      </React.Fragment>
    );
  }

  get pageLayoutSection() {
    const main = this.makeSection(
      'layout',
      'Page Layout',
      <React.Fragment>
        <p>
          There are only 5 layout options (not including card grids which are a separate layout
          element within these options):
        </p>
        <ol>
          <li>Full width page - most shop pages and all device layouts</li>
          <li>Left Column - for showing filters</li>
          <li>Right Column - Cart, Checkout, Payments, Account</li>
          <li>Left Column w/Divided main section(s) (nested)</li>
          <li>Two Column - for centered content and two side columns</li>
        </ol>
        <p>Side Columns are static widths and main content expands to fill the space.</p>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        {main}
        <h3 className="pageHeader">Full Width</h3>
        <div className={layoutBem(null)}>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Container Content</p>
            </section>
          </div>
        </div>
        <h3 className="pageHeader">Left Column</h3>
        <div className={layoutBem(null, 'colLeft')}>
          <div className={layoutBem('col')}>
            <section className="container">
              <p>Column Content</p>
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
        <h3 className="pageHeader">Right Column</h3>
        <div className={layoutBem(null, 'colRight')}>
          <div className={layoutBem('col')}>
            <section className="container">
              <p>Column Content</p>
            </section>
            <section className="container">
              <p>Column Content</p>
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
        <h3 className="pageHeader">Nested Layout (&gt;= 1145px)</h3>
        <div className={layoutBem(null, 'colLeft')}>
          <div className={layoutBem('col')}>
            <section className="container">
              <p>Column Content</p>
            </section>
            <section className="container">
              <p>Column Content</p>
            </section>
          </div>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Container Content</p>
            </section>
            <div className={layoutBem(null, 'colRight')}>
              <div className={layoutBem('main')}>
                <section className="container">
                  <p>Main Container Main Content</p>
                </section>
              </div>
              <div className={layoutBem('col')}>
                <section className="container">
                  <p>Main Container Column </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <h3 className="pageHeader">Two Main</h3>
        <div className={layoutBem(null, 'twoMain')}>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Content</p>
            </section>
          </div>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Container</p>
            </section>
          </div>
        </div>

        <h3 className="pageHeader">Product Row</h3>
        <div className={layoutBem(null, 'productRow')}>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Content</p>
            </section>
          </div>
          <div className={layoutBem('main')}>
            <section className="container">
              <p>Main Container</p>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get containersSection() {
    return this.makeSection(
      'containers',
      'Containers',
      <React.Fragment>
        <p>
          Containers are similar to material design paper elements. They generally have a white
          background and glow shadow. They are used to group sections on a page and may or may not
          have an expand/collapse header section.
        </p>
        <p>
          For example, this style guide is primarily composed of <code>container--expandable</code>{' '}
          with a<code>container-header</code> and <code>container-body</code> children.
        </p>
        <p>
          Within a container or container-body, use
          <code>.container-block</code> (display: block) or <code>.container-section</code>{' '}
          (display: flex) to control vertical spacing.
        </p>

        <div style={{ maxWidth: '500px' }}>
          <h4>Container footers</h4>
          <div className={containerBlock('block')}>
            <code>.container-footer</code>
            <div className={containerBlock(null)}>
              <div className={containerBlock('footer')}>
                <button className="btn-tight btn-outline">B</button>
                <button className="btn-tight btn-primary">C</button>
              </div>
            </div>
          </div>
          <code>.container-footer--spaceBetween</code>
          <div className={containerBlock(null)}>
            <div className={containerBlock('footer', 'spaceBetween')}>
              <a>Link</a>
              <button className="btn-tight btn-primary">OK</button>
            </div>
          </div>
          <div className={containerBlock(null)}>
            <div className={containerBlock('footer', 'spaceBetween')}>
              <button className="btn-outline">A</button>
              <button className="btn-primary">B</button>
            </div>
          </div>
          <div className={containerBlock(null)}>
            <div className={containerBlock('footer', 'spaceBetween')}>
              <button className="btn-outline">A</button>
              <button className="btn-primary">B</button>
              <button className="btn-secondary">C</button>
            </div>
          </div>
          <code>.container-footer--buttonsRight</code>
          <div className={containerBlock(null)}>
            <div className={containerBlock('footer', 'buttonsRight')}>
              <button className="btn-tight btn-outline">A</button>
              <button className="btn-tight btn-primary">B</button>
            </div>
          </div>
          <code>.container-footer--buttonsLeft</code>
          <div className={containerBlock(null)}>
            <div className={containerBlock('footer', 'buttonsLeft')}>
              <button className="btn-tight btn-outline">A</button>
              <button className="btn-tight btn-primary">B</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get buttonsSection() {
    const btnBem = makeBem('btn');
    return this.makeSection(
      'buttons',
      'Buttons & Links',
      <React.Fragment>
        <p>
          New button elements should all have the class <code>.btn</code>. For backwards
          compatility, all button elements and items with <code>.styleAs-button</code> will also
          generally work.
        </p>
        <h4>Filled Buttons (default)</h4>
        <p>
          Note that these all have hover and active states. By default they take the full width of
          the container.
        </p>
        <div className={containerBlock('block')}>
          <p>
            Standard Button classnames <code>{btnBem()}</code>
          </p>
          <div className={btnBem()}>Standard Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>
            Standard Primary Button classnames <code>{btnBem(null, 'primary')}</code>
          </p>
          <div className={btnBem(null, 'primary')}>Primary Standard Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>
            Standard Secondary Button classnames <code>{btnBem(null, 'secondary')}</code>
          </p>
          <div className={btnBem(null, 'secondary')}>Secondary Standard Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>Disabled Button regardless of classnames. Real buttons marked as disabled.</p>
          <button className={btnBem(null, 'secondary')} disabled>
            Disabled Button
          </button>
          <p>
            or classname <code>{btnBem(null, 'disabled')}</code>
          </p>
          <div className={btnBem(null, ['primary', 'disabled'])}>Disabled Primary Button</div>
        </div>
        <h4>
          Medium Emphasis Buttons - outlined. These should have class <code>btn</code> with the{' '}
          <code>--outline</code> modifier in addition to any other modifiers needed.
        </h4>
        <div className={containerBlock('block')}>
          <p>
            Standard Button classnames <code>{btnBem(null, 'outline')}</code>
          </p>
          <div className={btnBem(null, 'outline')}>Outline Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>
            Standard Primary Button classnames <code>{btnBem(null, ['outline', 'primary'])}</code>
          </p>
          <div className={btnBem(null, ['outline', 'primary'])}>Primary Outline Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>
            Standard Secondary Button classnames{' '}
            <code>{btnBem(null, ['outline', 'secondary'])}</code>
          </p>
          <div className={btnBem(null, ['outline', 'secondary'])}>Secondary Outline Button</div>
        </div>
        <div className={containerBlock('block')}>
          <p>Disabled Button regardless of classnames. Real buttons marked as disabled</p>
          <button className={btnBem(null, ['outline', 'secondary'])} disabled>
            Disabled Outline Button
          </button>
          <p>
            or classname <code>{btnBem(null, ['outline', 'disabled'])}</code>
          </p>
          <div className={btnBem(null, ['primary', 'disabled', 'outline'])}>
            Disabled Primary Outline Button
          </div>
        </div>
        <div className={containerBlock('block')}>
          <h4>Button Sizing</h4>
          <p>
            All buttons can have size modifiers applied to them. Note that any combination of
            color/style is permitted, not just those shown.
          </p>
          <div className="cardGrid">
            <div className="card">
              <h5>Standard buttons</h5>
              <p>
                <code>{btnBem(null, 'large')}</code>
              </p>
              <div className={btnBem(null, 'large')}>Large (default)</div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'medium'])}>Medium Button</div>
              <br />
              <p>
                <code>{btnBem(null, ['secondary', 'small'])}</code>
              </p>
              <div className={btnBem(null, ['secondary', 'small'])}>Small Button</div>
              <br />
              <p>
                <code>{btnBem(null, ['secondary', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['secondary', 'xSmall'])} disabled>
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>Outlined buttons</h5>
              <p>
                <code>{btnBem(null, ['large', 'disabled', 'outline'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'disabled', 'outline'])}>Large (default)</div>
              <br />
              <p>
                <code>{btnBem(null, ['secondary', 'outline', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['secondary', 'outline', 'medium'])}>Medium Button</div>
              <br />
              <p>
                <code>{btnBem(null, ['outline', 'small'])}</code>
              </p>
              <div className={btnBem(null, ['outline', 'small'])}>Small Button</div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'outline', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'outline', 'xSmall'])}>
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>
                Sized buttons <code>--sized</code> or <code>btn-sized</code>
              </h5>
              <p>
                <code>{btnBem(null, ['large', 'secondary', 'sized'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'secondary', 'sized'])}>Large (default)</div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'sized', 'outline', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'sized', 'outline', 'medium'])}>
                Medium Button
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['outline', 'small', 'sized'])}</code>
              </p>
              <div className={btnBem(null, ['outline', 'small', 'sized'])}>Small Button</div>
              <br />
              <p>
                <code>button:disabled {btnBem(null, ['sized', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'sized', 'xSmall'])} disabled>
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>
                Tight buttons <code>--tight</code> or <code>btn-tight</code>
              </h5>
              <p>
                <code>{btnBem(null, ['large', 'secondary', 'tight'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'secondary', 'tight'])}>Large (default)</div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'tight', 'outline', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'tight', 'outline', 'medium'])}>
                Medium Button
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['outline', 'small', 'tight'])}</code>
              </p>
              <div className={btnBem(null, ['outline', 'small', 'tight'])}>Small Button</div>
              <br />
              <p>
                <code>button:disabled {btnBem(null, ['tight', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'tight', 'xSmall'])} disabled>
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>
                Squared buttons <code>--squared</code> or <code>btn-squared</code>
              </h5>
              <p>
                <code>{btnBem(null, ['large', 'secondary', 'squared'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'secondary', 'squared'])}>Large (default)</div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'squared', 'outline', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'squared', 'outline', 'medium'])}>
                Medium Button
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['outline', 'small', 'squared'])}</code>
              </p>
              <div className={btnBem(null, ['outline', 'small', 'squared'])}>Small Button</div>
              <br />
              <p>
                <code>button:disabled {btnBem(null, ['squared', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'squared', 'xSmall'])} disabled>
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>
                Flex buttons <code>--flex</code>
              </h5>
              <p>
                <code>{btnBem(null, ['large', 'secondary', 'flex'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'secondary', 'flex'])}>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                Large (default)
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'flex', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'flex', 'medium'])}>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                Medium Button
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['small', 'flex'])}</code>
              </p>
              <div className={btnBem(null, ['small', 'flex'])}>
                <i className="icon icon-chevron-left" />
                Small Button
              </div>
              <br />
              <p>
                <code>button:disabled {btnBem(null, ['flex', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'flex', 'xSmall'])} disabled>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                xSmall Button
              </button>
            </div>
            <div className="card">
              <h5>
                Sized flex buttons <code>--flex --sized</code>
              </h5>
              <p>
                <code>{btnBem(null, ['large', 'secondary', 'flex', 'sized'])}</code>
              </p>
              <div className={btnBem(null, ['large', 'secondary', 'flex', 'sized'])}>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                Large (default)
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['primary', 'flex', 'sized', 'medium'])}</code>
              </p>
              <div className={btnBem(null, ['primary', 'flex', 'sized', 'medium'])}>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                Medium Button
              </div>
              <br />
              <p>
                <code>{btnBem(null, ['small', 'flex', 'sized'])}</code>
              </p>
              <div className={btnBem(null, ['small', 'flex', 'sized'])}>
                <i className="icon icon-chevron-left" />
                Small Button
              </div>
              <br />
              <p>
                <code>button:disabled {btnBem(null, ['flex', 'sized', 'xSmall'])}</code>
              </p>
              <button className={btnBem(null, ['primary', 'flex', 'sized', 'xSmall'])} disabled>
                <i className="icon icon-chevron-left icon-chevron-left--white" />
                xSmall Button
              </button>
            </div>
          </div>
        </div>
        <div className={containerBlock('block')}>
          <h4>Toggle Buttons</h4>
          <div className="inputGroup inputGroup--horizontal">
            <button className="btn btn--sized btn-toggle btn-toggle--positive">Yes</button>
            <button className="btn btn--sized btn-toggle btn-toggle--positive btn-toggle--active">
              Yes
            </button>
            <button className="btn btn--sized btn-toggle btn-toggle--neutral">Maybe</button>
            <button className="btn btn--sized btn-toggle btn-toggle--neutral btn-toggle--active">
              Maybe
            </button>
            <button className="btn btn--sized btn-toggle btn-toggle--negative">No</button>
            <button className="btn btn--sized btn-toggle btn-toggle--negative btn-toggle--active">
              No
            </button>
          </div>
        </div>
        <div className={containerBlock('block')}>
          <h4>Links</h4>
          <p>
            In general, all links are the primary color, except ones inside menus which are the
            standard body text black color. Specific links can be overridden with other colors as
            below.
          </p>
          <div className="cardGrid">
            <div className="card">
              <h5>Links O1 (w/o underline)</h5>
              <p>
                <code>.text--default</code>
              </p>
              <a className="text--default">dark grey link</a>
              <br />
              <p>
                <code>.text--primary</code>
              </p>
              <a className="text--primary">primary link</a>
              <br />
              <p>
                <code>.text--secondary</code>
              </p>
              <a className="text--secondary">secondary link</a>
              <br />
              <p>
                <code>.text--muted</code>
              </p>
              <a className="text--muted">muted link</a>
              <br />
              <p>
                <code>.text--danger</code>
              </p>
              <a className="text--danger">error link</a>
            </div>
            <div className="card">
              <h5>Links O2 (w/ underline)</h5>
              <p>
                <code>.text--default &gt; a</code>
                <br />
                <code>.text--default &gt; .styleAs-a</code>
              </p>
              <div className="text--default">
                <a>dark grey link</a>
              </div>
              <p>
                <code>.text--primary &gt; a</code>
                <br />
                <code>.text--primary &gt; .styleAs-a</code>
              </p>
              <div className="text--primary">
                <a>primary link</a>
              </div>
              <p>
                <code>.text--secondary &gt; a</code>
                <br />
                <code>.text--secondary &gt; .styleAs-a</code>
              </p>
              <div className="text--secondary">
                <a>secondary link</a>
              </div>
              <p>
                <code>.text--muted &gt; a</code>
                <br />
                <code>.text--muted &gt; .styleAs-a</code>
              </p>
              <div className="text--muted">
                <a>muted link</a>
              </div>
              <p>
                <code>.text--danger &gt; a</code>
                <br />
                <code>.text--danger &gt; .styleAs-a</code>
              </p>
              <div className="text--danger">
                <a>error link</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get variantsSection() {
    return this.makeSection(
      'variants',
      'Variant Selector',
      <React.Fragment>
        <h4>Variant Selector Buttons</h4>
        <p>
          The base class for these are .variantBtn or .variantSelect-value. Selected buttons have
          the --selected modifier, and unavailable ones have --unavailable
        </p>
        <div className="variantBtn">option</div>
        <div className="variantBtn variantBtn--selected">selected option</div>
        <div className="variantBtn variantBtn--unavailable">unavailable option</div>
      </React.Fragment>
    );
  }

  get quantitySection() {
    return this.makeSection(
      'quantity',
      'Quantity Selector',
      <React.Fragment>
        <div className={containerBlock('block')}>
          <h4>With single button</h4>
          <div className={qBem()}>
            <div className={qBem('minus', { disabled: true })}>&ndash;</div>
            <div className={qBem('count')}>
              <input className={qBem('input')} placeholder="1" readOnly />
            </div>
            <div className={qBem('plus')}>+</div>
            <div className={qBem('add')}>Add</div>
          </div>
        </div>

        <div className={containerBlock('block')}>
          <h4>With Icon</h4>
          <div className={qBem()}>
            <div className={qBem('label')}>
              <i className="icon icon-trash"></i>
            </div>
            <div className={qBem('minus', { disabled: true })}>&ndash;</div>
            <div className={qBem('count')}>1</div>
            <div className={qBem('plus')}>+</div>
          </div>
        </div>

        <div className={containerBlock('block')}>
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

        <div className={containerBlock('block')}>
          <h4>In Card Overlays</h4>
          <div className="scrollContainer-scrollArea--directionX">
            <div className="cardGrid">
              <div className={catBem()}>
                <div className={productBem('image')}>
                  <img src={'/assets/styleguide/product-landscape.jpg'} />
                </div>
                <div className={productBem('body')}>
                  <div className={productBem('title')}>
                    Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate
                    Fresh Mint 1 oz 3/Bx
                    <span className={productBem('options')}>More options</span>
                  </div>
                  <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
                  <div className={productBem('prices')}>
                    <div className={productBem('price', 'torch')}>$16 Torch</div>
                    <div className={productBem('price', 'retail')}>$22 Retail</div>
                  </div>
                  <div className={productBem('availability')}>Eligible for 1-Day Shipping</div>
                </div>
                <div className={cardBem('overlay', { white: true, adder: true })}>
                  <div className={cardBem('overlayContent')}>
                    <React.Fragment>
                      <h6>Add to List:</h6>
                      <div className={qBem(null, 'ctr')}>
                        <div className={qBem('label')}>QTY:</div>
                        <div className={ciBem(null, 'ctr')}>
                          <div className={qBem('minus')}>&ndash;</div>
                          <div className={qBem('count')}>
                            <input className={qBem('input')} value={2} readOnly />
                          </div>
                          <div className={qBem('plus')}>+</div>
                        </div>
                        <div className={qBem('buttons')}>
                          <div className={qBem('cancel')}>Cancel</div>
                          <div className={qBem('add')}>Add</div>
                        </div>
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              </div>
              <div className={catBem()}>
                <div className={productBem('image')}>
                  <img src={'/assets/styleguide/product-landscape.jpg'} />
                </div>
                <div className={productBem('body')}>
                  <div className={productBem('title')}>
                    Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate
                    Fresh Mint 1 oz 3/Bx
                    <span className={productBem('options')}>More options</span>
                  </div>
                  <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
                  <div className={productBem('prices')}>
                    <div className={productBem('price', 'torch')}>$16 Torch</div>
                    <div className={productBem('price', 'retail')}>$22 Retail</div>
                  </div>
                  <div className={productBem('availability')}>Eligible for 1-Day Shipping</div>
                </div>
                <div className={cardBem('overlay', { white: true, adder: true })}>
                  <div className={cardBem('overlayContent')}>
                    <React.Fragment>
                      <i className={`icon ${iBem('favorite', 'favorited')}`}></i>
                      <h6>Add to Favorite?</h6>
                      <div className={qBem(null, 'ctr')}>
                        <div className={qBem('label')}>
                          Preset
                          <br />
                          QTY:
                        </div>
                        <div className={ciBem(null, 'ctr')}>
                          <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                          <div className={qBem('count')}>
                            <input className={qBem('input')} value={1} readOnly />
                          </div>
                          <div className={qBem('plus')}>+</div>
                        </div>
                        <div className={qBem('buttons')}>
                          <div className={qBem('cancel')}>Cancel</div>
                          <div className={qBem('add')}>Add</div>
                        </div>
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get notificationsSection() {
    const nBem = makeBem('notification');
    return this.makeSection(
      'notifications',
      'Notifications',
      <React.Fragment>
        <div className="cardGrid">
          <div className="card">
            <p>Standard notifications are centered</p>
            <p>
              <span className={nBem()}>Info Notification</span>
            </p>
            <p>
              <span className={nBem(null, 'success')}>Success Notification</span>
            </p>
            <p>
              <span className={nBem(null, 'warning')}>
                Warning Notification
                <br />
                Multi-line
              </span>
            </p>
            <p>
              <span className={nBem(null, 'error')}>Error Notification</span>
            </p>
          </div>
          <div className="card">
            <p>Optional --left notifications</p>
            <p>
              <span className={nBem(null, ['left'])}>Info Notification</span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'success'])}>Success Notification</span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'warning'])}>
                Warning Notification
                <br />
                Multi-line
              </span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'error'])}>Error Notification</span>
            </p>
          </div>
          <div className="card">
            <p>With icons</p>
            <p>
              <span className={nBem(null, ['left'])}>
                <i className="icon icon-tooltip icon-tooltip--primary"></i>Info Notification
              </span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'success'])}>
                <i className="icon icon-check"></i>Success Notification
              </span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'warning'])}>
                <i className="icon icon-warning"></i>Warning Notification
                <br />
                Multi-line
              </span>
            </p>
            <p>
              <span className={nBem(null, ['left', 'error'])}>
                <i className="icon icon-alert icon-alert--active"></i>Error Notification
              </span>
            </p>
          </div>
        </div>
        <div className={containerBlock('block')}>
          <h4>Product Status Notifications</h4>
          <p>Two variations for iten status .itemStatus are intended over darker backgrounds</p>
          <div className="cardGrid">
            <div className="card bg-light">
              <br />
              <div className="itemStatus itemStatus--unavailable">unavailable</div>
              <br />
            </div>
            <div className="card bg-light">
              <br />
              <div className="itemStatus itemStatus--inList">In List</div>
              <br />
            </div>
          </div>
        </div>
        <div
          className={`layout layout--colLeft ${nBem(null, {
            left: true,
            warning: true,
            banner: true,
          })}`}
        >
          <div className="layout-col no-break">
            <div className="flex-align-center">
              <i className="icon icon-warning" />
              <b>Important Notice</b>
            </div>
          </div>
          <div className="layout-main">
            Masks, hand sanitizer, and infection control products are experiencing shortages which
            may cause shipping delays or cancellations. Quantities and prices of these items may
            change to reflect vendor updates. Unavailable items will be removed from orders. We
            appreciate your patience.
          </div>
          <i className="icon icon-close" onClick={this.handleClose} />
        </div>
      </React.Fragment>
    );
  }

  get badgesSection() {
    const bBem = makeBem('badge');
    const fBem = makeBem('flag');
    const ttBem = makeBem('tooltip');
    return this.makeSection(
      'badges',
      'Badges & Flags',
      <React.Fragment>
        <div className={containerBlock('block')}>
          <h4>Badges</h4>
          <p>Badges are generally used as numerical icons</p>
          <p>
            Five <span className="badge">5</span>
          </p>
          <p>
            Thirty four <span className="badge">34</span>
          </p>
          <p>
            Six hundred ninety seven <span className="badge">697</span>
          </p>
        </div>
        <div className={containerBlock('block')}>
          <p>Badges also support space modifiers</p>
          <code>badge--spaceLeft</code>
          <div className={containerBlock('footer')}>
            <span>text</span>
            <span className={bBem(null, ['spaceLeft'])}>8</span>
          </div>
          <code>badge--spaceRight</code>
          <div className={containerBlock('footer')}>
            <span className={bBem(null, ['spaceRight'])}>8</span>
            <span>text</span>
          </div>
          <code>badge--spaceTop</code>
          <div className={containerBlock('footer')}>
            <span>text</span>
            <span className={bBem(null, ['spaceTop'])}>8</span>
          </div>
          <code>badge--spaceBottom</code>
          <div className={containerBlock('footer')}>
            <span className={bBem(null, ['spaceBottom'])}>8</span>
            <span>text</span>
          </div>
        </div>
        <div className={containerBlock('block')}>
          <h5>Muted Badges</h5>
          <p>
            Thirty four <span className="badge badge--muted">34</span>
          </p>
        </div>
        <div className={containerBlock('block')}>
          <h5>Step Badges</h5>
          <div className="badgeStep">1</div>
          <div className="badgeStep">2</div>
          <div className="badgeStep badgeStep--muted">1</div>
          <div className="badgeStep badgeStep--muted">2</div>
          <h5>Smaller Step Badges</h5>
          <div className="badgeStep badgeStep--small">1</div>
          <div className="badgeStep badgeStep--small">2</div>
          <div className="badgeStep badgeStep--muted badgeStep--small">1</div>
          <div className="badgeStep badgeStep--muted badgeStep--small">2</div>
        </div>
        <div className={containerBlock('block')}>
          <h5>Badges on Chat</h5>
          <p>
            <i className="icon icon-chat">
              <span className={bBem()}>8</span>
            </i>
          </p>
        </div>
        <div className={containerBlock('block')}>
          <h4>Flags</h4>
          <p>There are 4 types of Flags</p>
          <div className="flex-space-between">
            <div className={fBem(null, 'preferred')}>Preferred</div>
            <div className={fBem(null, 'purchasedBefore')}>Purchased Before</div>
            <div className={fBem(null, 'bestSeller')}>Best Seller</div>
            <div className={fBem(null, 'promo')}>Promo</div>
          </div>
          <p>Flags also support space modifiers</p>
          <code>flag--spaceLeft</code>
          <div className={containerBlock('footer')}>
            <span>text</span>
            <span className={fBem(null, ['promo', 'spaceLeft'])}>Promo</span>
          </div>
          <code>flag--spaceRight</code>
          <div className={containerBlock('footer')}>
            <span className={fBem(null, ['promo', 'spaceRight'])}>Promo</span>
            <span>text</span>
          </div>
          <code>flag--spaceTop</code>
          <div className={containerBlock('footer')}>
            <span>text</span>
            <span className={fBem(null, ['promo', 'spaceTop'])}>Promo</span>
          </div>
          <code>flag--spaceBottom</code>
          <div className={containerBlock('footer')}>
            <span className={fBem(null, ['promo', 'spaceBottom'])}>Promo</span>
            <span>text</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get tooltipsSection() {
    const ttBem = makeBem('tooltip');
    return this.makeSection(
      'tooltips',
      'Tooltips',
      <React.Fragment>
        <p>
          Tooltips with static --visible modifier here for display. See{' '}
          <a href="#badges">badges section</a> above for in-line example. Tooltip anchor requires
          class <code>.tooltip-anchor</code>
        </p>
        <div className={'tooltip-anchor'} style={{ position: 'relative' }}>
          Tooltip container
          <div className={ttBem(null, 'visible')}>
            <div className={ttBem('body')}>
              <span className="text--semiBold">Purchase 19 days ago</span>
              <br />
              Vendor: <span className="text--semiBold">DC Dental</span>
            </div>
          </div>
        </div>

        {/* adding extra lines to compensate for absolutely positioned tooltip */}
        <div style={{ height: '100px' }} />

        <div className={'tooltip-anchor'} style={{ position: 'relative' }}>
          Tooltip container with close button
          <div className={ttBem(null, 'visible')}>
            <i className="icon icon-close" />
            <div className={ttBem('body')}>
              <span className="text--semiBold">Purchase 19 days ago</span>
              <br />
              Vendor: <span className="text--semiBold">DC Dental</span>
            </div>
          </div>
        </div>

        {/* adding extra lines to compensate for absolutely positioned tooltip */}
        <div style={{ height: '100px' }} />

        <div style={{ position: 'relative' }}>
          Icons with tooltip
          <div style={{ marginLeft: '14px' }}>
            <div className="tooltip-anchor">
              <i className="icon icon-tooltip" />
              <div className={ttBem(null, 'visible')}>
                <div className={ttBem('body')}>
                  <span className="text--semiBold">Purchase 19 days ago</span>
                  <br />
                  Vendor: <span className="text--semiBold">DC Dental</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '140px', marginLeft: '14px' }}>
            <div className="tooltip-anchor">
              <i className="icon icon-tooltip" />
              <div className={ttBem(null, 'visible tooltip--right')}>
                <div className={ttBem('body')}>
                  <span className="text--semiBold">Purchase 20 days ago</span>
                  <br />
                  Vendor: <span className="text--semiBold">DC Dental</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* adding extra lines to compensate for absolutely positioned tooltip */}
        <div style={{ height: '100px' }} />
      </React.Fragment>
    );
  }

  get formsSection() {
    const menuBem = makeBem('menu');
    return this.makeSection(
      'forms',
      'Forms',
      <React.Fragment>
        <form>
          <div className={containerBlock('block')}>
            <div className="searchBar">
              <input
                type="text"
                className="search"
                id="search"
                name="search"
                placeholder="Search"
              />
              <div className="searchBar-icons">
                <i className="icon icon-close"></i>
                <i className="icon icon-search"></i>
              </div>
            </div>
          </div>
          <div className={containerBlock('block')}>
            <div className="input">
              <label htmlFor="emptyId">Empty Field</label>
              <input type="text" id="emptyId" name="empty" placeholder="hint" />
            </div>
            <div className="input">
              <label htmlFor="disabledSampleId">Disabled Field</label>
              <input
                type="text"
                id="disabledSampleId"
                name="disabledSample"
                placeholder="hint"
                disabled={true}
              />
            </div>
            <div className="input">
              <label htmlFor="validId">Valid Field*</label>
              <input
                type="text"
                id="validId"
                name="valid"
                value="wendy@dental.com"
                onChange={() => false}
              />
            </div>
            <div className="input">
              <label htmlFor="errorSampleId">Error Field*</label>
              <input
                type="text"
                className="error"
                id="errorSampleId"
                name="error"
                value="wendy@dentalcom"
                onChange={() => false}
              />
              <span className="error">Error message</span>
            </div>
            <div className="input">
              <label htmlFor="selectId">Select Field</label>
              <div className="select--wrapper">
                <select id="selectId" name="select" placeholder="hint" defaultValue="default">
                  <option disabled value="default">Default</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </div>
            </div>
          </div>

          <div className={containerBlock('block')}>
            <div className="input">
              <label htmlFor="sampleInput">Wide text</label>
              <input id="sampleInput" placeholder="This should be full width"></input>
            </div>
          </div>

          <div className={containerBlock('block')}>
            <div className="input">
              <label htmlFor="sampleTextArea">Text Area</label>
              <textarea id="sampleTextArea" placeholder="Write text"></textarea>
            </div>
          </div>

          <div className={containerBlock('block')}>
            <h6>Select Menu</h6>
            <p>
              Applied with <code>.menu .menu-select</code>
            </p>
            <div
              className={menuBem(null, {
                select: true,
                expanded: !this.isExpanded('exampleSelect'),
              })}
            >
              <div
                className={menuBem('label')}
                onClick={this.toggleExpanded.bind(this, 'exampleSelect')}
              >
                Selected Value
              </div>
              <div className={menuBem('body')}>
                <div className={menuBem('item')}>Option 1</div>
                <div className={menuBem('item')}>Option 2</div>
              </div>
            </div>
          </div>
          <div className={containerBlock('block')}>
            <div className="input">
              <input type="radio" value="1" id="radio_1" name="radio"></input>
              <label htmlFor="radio_1">Radio 1</label>
            </div>
            <div className="input">
              <input type="radio" value="2" id="radio_2" name="radio"></input>
              <label htmlFor="radio_2">Radio 2</label>
            </div>
            <div className="input">
              <input type="radio" value="3" id="radio_3" name="radio" disabled></input>
              <label htmlFor="radio_3">Disabled Radio</label>
            </div>
            <div className="input">
              <input type="radio" value="4" id="radio_4" name="radio" className="error"></input>
              <label htmlFor="radio_4">Error Radio</label>
            </div>
          </div>
          <div className={containerBlock('block')}>
            <div className="input">
              <input type="checkbox" value="1" id="checkbox_1" name="checkbox"></input>
              <label htmlFor="checkbox_1">Checkbox</label>
            </div>
            <div className="input">
              <input type="checkbox" value="2" id="checkbox_2" name="checkbox" disabled></input>
              <label htmlFor="checkbox_2">Disabled Checkbox</label>
            </div>
            <div className="input">
              <input
                type="checkbox"
                value="3"
                id="checkbox_3"
                name="checkbox"
                className="error"
              ></input>
              <label htmlFor="checkbox_3">Error Checkbox</label>
            </div>
          </div>
        </form>

        <div className={`${containerBlock('block')} inputGroup--vertical`}>
          <form>
            <h6>Horizontal Input Group</h6>
            <div className="inputGroup inputGroup--horizontal">
              <div className="input">
                <label htmlFor="hGroupInput1">Input 1</label>
                <input id="hGroupInput1" placeholder="Input 1"></input>
              </div>
              <div className="input">
                <label htmlFor="hGroupInput2">Input 2</label>
                <input id="hGroupInput2" placeholder="Input 2"></input>
              </div>
            </div>

            <h6>Vertical Input Group</h6>
            <div className="inputGroup inputGroup--vertical">
              <div className="input">
                <label htmlFor="vGroupInput1">Input 1</label>
                <input id="vGroupInput1" placeholder="Input 1"></input>
              </div>
              <div className="input">
                <label htmlFor="vGroupInput2">Input 2</label>
                <input id="vGroupInput2" placeholder="Input 2"></input>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  get messagesSection() {
    const mBem = makeBem('comment');
    return this.makeSection(
      'messages',
      'Messages',
      <React.Fragment>
        <div className={mBem()}>
          <div className={mBem('controls')}>
            <div className={mBem('controlTextArea')}>
              <textarea
                rows={1}
                name="new_message"
                placeholder="What can we help you with?"
              ></textarea>
            </div>
            <div className={mBem('addButton', 'disabled')}>send</div>
          </div>
          <div className={mBem('controls')}>
            <div className={mBem('controlTextArea')}>
              <textarea
                rows={4}
                name="new_message"
                placeholder="What can we help you with?"
              ></textarea>
            </div>
            <div className={mBem('addButton')}>send</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  get menuSection() {
    return this.makeSection(
      'menus',
      'Menus, Filter & Sort',
      <React.Fragment>
        <h4>Menus</h4>
        <p>
          See the top right "More (spacing)" menu for a pre-built version of the account dropdown
          menu.
        </p>
        <h5>General menu with sections.</h5>
        <div className={menuBem(null, 'expanded')}>
          <div className={menuBem('body')}>
            <div className={menuBem('section')}>
              <div className={menuBem('item', 'header')}>
                .menu-item--header <br />
                <strong className="spaceLeft">bold element</strong>
              </div>
              <div className={menuBem('item')}>.menu-item</div>
              <div className={menuBem('item', 'active')}>.menu-item .menu-item--active</div>
              <div className={menuBem('item')}>
                .menu-item
                <span className="spaceLeft text--muted">muted element</span>
              </div>
            </div>
            <div className={menuBem('section')}>
              <div className={menuBem('item')}>.menu-item</div>
            </div>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h4>Filters</h4>
        <p>Standard dropdown menu.</p>
        <div style={{ lineHeight: '50px' }}>
          <div
            className={menuBem(null, { select: true, expanded: this.isExpanded('exampleFilter') })}
          >
            <div
              className={menuBem('label')}
              onClick={this.toggleExpanded.bind(this, 'exampleFilter')}
            >
              Selected Value
            </div>
            <div className={menuBem('body')}>
              <div className={menuBem('item')}>.menu-item</div>
              <div className={menuBem('item')}>.menu-item</div>
            </div>
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

        <h4>Sort</h4>
        <p>
          Sort dropdown menus are the same as filters but use a standard label text before the
          selected value.
        </p>
        <div className={menuBem(null, { select: true, expanded: this.isExpanded('exampleSort') })}>
          <div className={menuBem('label')} onClick={this.toggleExpanded.bind(this, 'exampleSort')}>
            <span className={menuBem('labelPrefix')}>Sort By</span> Selected Value
          </div>
          <div className={menuBem('body')}>
            <div className={menuBem('item')}>.menu-item</div>
            <div className={menuBem('item')}>.menu-item</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }

  get cardsSection() {
    const id = 'cards';
    return (
      <section>
        <a className="anchor" id={id}></a>
        <h3 className="pageHeader">Cards</h3>
        <h4 className="pageHeader">
          Basic cards (for any use) - even layouts across wrap and no-wrap sets
        </h4>
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className={cardBem()} key={i}>
              <h5>Card header</h5>
              <p>Card content {i} of 6</p>
            </div>
          ))}
        </div>
        <h4 className="pageHeader">Catalog cards</h4>
        <p>
          With <code>--resizeable</code> applied for reflow, cards can change width, but rarely
          reach max-width.
        </p>
        <div className="cardGrid cardGrid--resizeable">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const favorited = i % 2 == 0;
            const imgSrc =
              i % 2 == 0
                ? '/assets/styleguide/product-portrait.png'
                : '/assets/styleguide/product-landscape.jpg';
            const title =
              i % 2 == 0
                ? 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx'
                : 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx';
            return (
              <div className={catBem()} key={i}>
                <div className={catBem('header')}>
                  <i className={`icon ${iBem('favorite', { favorited })}`}></i>
                  <div className={catBem('flags')}>
                    <div className={fBem(null, 'preferred')}>
                      Preferred
                      <div className={ttBem(null)}>
                        <div className={ttBem('body')}>
                          This item is offered by a supplier that offers fast shipping and fair
                          prices.
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
                  <i className={`icon ${iBem('cart-plus', { disabled: favorited })}`}></i>
                </div>
                <div className={productBem('image')}>
                  <img src={imgSrc} />
                </div>
                <div className={productBem('body')}>
                  <div className={productBem('title')}>
                    {title}
                    <span className={productBem('options')}>More options</span>
                  </div>
                  <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
                  <div className={productBem('prices')}>
                    <div className={productBem('price', 'torch')}>$16 Torch</div>
                    <div className={productBem('price', 'retail')}>$22 Retail</div>
                  </div>
                  <div className={productBem('availability')}>Eligible for 1-Day Shipping</div>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="pageHeader">Horizontal Scroll catalog cards</h4>
        <div className="scrollContainer">
          <div className="scrollContainer-scrollArea--directionX">
            <div className="cardGrid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                const favorited = i % 2 == 0;
                const imgSrc =
                  i % 2 == 0
                    ? '/assets/styleguide/product-portrait.png'
                    : '/assets/styleguide/product-landscape.jpg';
                const title =
                  i % 2 == 0
                    ? 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx'
                    : 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx';
                return (
                  <div className={catBem()} key={i}>
                    <div className={catBem('header')}>
                      <i className={`icon ${iBem('favorite', { favorited })}`}></i>
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
                      <i className={`icon ${iBem('cart-plus', { disabled: favorited })}`}></i>
                    </div>
                    <div className={productBem('image')}>
                      <img src={imgSrc} />
                    </div>
                    <div className={productBem('body')}>
                      <div className={productBem('title')}>
                        {title}
                        <span className={productBem('options')}>More options</span>
                      </div>
                      <div className={productBem('manufacturer')}>
                        Cetylite Industries, Inc. - 0307
                      </div>
                      <div className={productBem('prices')}>
                        <div className={productBem('price', 'torch')}>$16 Torch</div>
                        <div className={productBem('price', 'retail')}>$22 Retail</div>
                      </div>
                      <div className={productBem('availability')}>Eligible for 1-Day Shipping</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="scrollContainer-arrow scrollContainer-arrow--left"></div>
          <div className="scrollContainer-arrow scrollContainer-arrow--right"></div>
        </div>
        <h4 className="pageHeader">Card Overlays</h4>
        <div className="cardGrid">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            const favorited = i % 2 == 0;
            const imgSrc =
              i % 2 == 0
                ? '/assets/styleguide/product-portrait.png'
                : '/assets/styleguide/product-landscape.jpg';
            const title =
              i % 2 == 0
                ? 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx'
                : 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx';
            return (
              <div className={catBem()} key={i}>
                <div className={catBem('header')}>
                  <i className={`icon ${iBem('favorite', { favorited })}`}></i>
                  <div className={catBem('flags')}>
                    <div className={fBem(null, 'preferred')}>
                      Preferred
                      <div className={ttBem(null)}>
                        <div className={ttBem('body')}>
                          This item is offered by a supplier that offers fast shipping and fair
                          prices.
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
                  <i className={`icon ${iBem('cart-plus', { disabled: favorited })}`}></i>
                </div>
                <div className={productBem('image')}>
                  <img src={imgSrc} />
                </div>
                <div className={productBem('body')}>
                  <div className={productBem('title')}>
                    {title}
                    <span className={productBem('options')}>More options</span>
                  </div>
                  <div className={productBem('manufacturer')}>Cetylite Industries, Inc. - 0307</div>
                  <div className={productBem('prices')}>
                    <div className={productBem('price', 'torch')}>$16 Torch</div>
                    <div className={productBem('price', 'retail')}>$22 Retail</div>
                  </div>
                  <div className={productBem('availability')}>Eligible for 1-Day Shipping</div>
                </div>
                <div className={cardBem('overlay', { white: favorited, adder: i == 4 || i == 2 })}>
                  <div className={cardBem('overlayContent')}>
                    {i == 1 ? <div className="itemStatus itemStatus--inList">In List</div> : null}
                    {i == 2 ? (
                      <React.Fragment>
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
                        </div>
                      </React.Fragment>
                    ) : null}
                    {i == 3 || i == 6 ? (
                      <React.Fragment>
                        <div className="itemStatus itemStatus--unavailable">
                          Temporarily Unavailable
                        </div>
                        <div className="btn btn--secondary btn--medium">Substitute Available</div>
                      </React.Fragment>
                    ) : null}
                    {i == 4 ? (
                      <React.Fragment>
                        <i className={`icon ${iBem('favorite', 'favorited')}`}></i>
                        <h6>Add to Favorite?</h6>
                        <div className={qBem(null, 'ctr')}>
                          <div className={qBem('label')}>
                            Preset
                            <br />
                            QTY:
                          </div>
                          <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                          <div className={qBem('count')}>1</div>
                          <div className={qBem('plus')}>+</div>
                          <div className={qBem('buttons')}>
                            <div className={qBem('cancel')}>Cancel</div>
                            <div className={qBem('add')}>Add</div>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null}
                    {i == 5 ? (
                      <div className="btn btn--outline btn--secondary btn--small">Add Vendor</div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  get tablesSection() {
    const tableWithControls = (isContainer) => (
      <table className={`withControls ${isContainer ? 'container' : ''}`}>
        <thead className="tablet">
          <tr>
            <th colSpan="2" className="withMenu">
              <div
                className={menuBem(null, {
                  select: true,
                  expanded: !this.isExpanded('exampleTableSort' + isContainer),
                })}
              >
                <div
                  className={menuBem('label')}
                  onClick={this.toggleExpanded.bind(this, 'exampleTableSort' + isContainer)}
                >
                  <span className={menuBem('labelPrefix')}>Sort by</span> Priority
                </div>
                <div className={menuBem('body')}>
                  <div className={menuBem('item')}>Date</div>
                  <div className={menuBem('item')}>Order Number</div>
                </div>
              </div>
            </th>
            <th colSpan="2" className="withMenu">
              <div
                className={menuBem(null, {
                  select: true,
                  expanded: !this.isExpanded('exampleTableFilter' + isContainer),
                })}
              >
                <div
                  className={menuBem('label')}
                  onClick={this.toggleExpanded.bind(this, 'exampleTableFilter' + isContainer)}
                >
                  <span className={menuBem('labelPrefix')}>Filter by</span> Vendor
                </div>
                <div className={menuBem('body')}>
                  <div className={menuBem('item')}>Status</div>
                </div>
              </div>
            </th>
            <th>
              Pay <input type="checkbox" />
            </th>
          </tr>
        </thead>
        <thead className="desktop">
          <tr>
            <th>
              Torch Order # <i className="icon icon-sort"></i>
            </th>
            <th>
              Vendor <i className="icon icon-filter"></i>
            </th>
            <th>
              Invoice Date <i className="icon icon-sort-up"></i>
            </th>
            <th>
              Amount <i className="icon icon-sort-down"></i>
            </th>
            <th>
              Pay <input type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1120</td>
            <td>Atlanta Dental</td>
            <td>01/01/2020</td>
            <td>$244.55</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>1120</td>
            <td>Atlanta Dental</td>
            <td>01/01/2020</td>
            <td>$244.55</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>1120</td>
            <td>Atlanta Dental</td>
            <td>01/01/2020</td>
            <td>$244.55</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    );
    const tableWithoutControls = (isContainer) => (
      <table className={`withoutControls ${isContainer ? 'container' : ''}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>QTY</th>
            <th>Vendor</th>
            <th>Ship To</th>
            <th>Order&nbsp;#</th>
            <th>ETA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex-align-stretch">
                <img className="product-image" src="/assets/styleguide/product-landscape.jpg" />
                <div className="text-semiBold">
                  Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate
                  Fresh Mint 1 oz 3/Bx
                </div>
              </div>
            </td>
            <td>1120</td>
            <td>1</td>
            <td>DC Dental</td>
            <td>
              <a>1004</a>
            </td>
            <td>06/15/2020</td>
          </tr>
          <tr>
            <td>
              <div className="flex-align-stretch">
                <img className="product-image" src="/assets/styleguide/product-portrait.png" />
                <div className="text-semiBold">
                  Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx
                </div>
              </div>
            </td>
            <td>1120</td>
            <td>2</td>
            <td>DC Dental</td>
            <td>
              <a>1008</a>
            </td>
            <td>06/15/2020</td>
          </tr>
        </tbody>
      </table>
    );
    const tableWithoutControlsOrBorders = (isContainer) => (
      <table
        className={`withoutControls withoutControls--noBorder ${isContainer ? 'container' : ''}`}
      >
        <thead>
          <tr>
            <th>Package</th>
            <th>Status</th>
            <th>ETA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a>
                <u>1Z460RY40332344139</u>
              </a>
            </td>
            <td>Transit</td>
            <td>06/15/2020</td>
          </tr>
          <tr>
            <td>
              <a>
                <u>1Z460RY40332344139</u>
              </a>
            </td>
            <td>Shipped</td>
            <td>06/15/2020</td>
          </tr>
          <tr>
            <td>
              <a>
                <u>1Z460RY40332344139</u>
              </a>
            </td>
            <td>Delivered</td>
            <td>06/15/2020</td>
          </tr>
        </tbody>
      </table>
    );
    const collapsibleTableWithControls = (isContainer) => (
      <table className={`withControls collapsible ${isContainer ? 'container' : ''}`}>
        <thead className="desktop">
          <tr>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount Paid</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody className="collapsible">
          <tr className="toggle">
            <td className="text--semiBold">02/27/2020</td>
            <td className="text--semiBold">Henry Schein</td>
            <td className="text--semiBold">$113.95</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
          <tr>
            <td className="text--primary">
              <a>Order 1001</a>
            </td>
            <td className="text--primary">
              <a>Invoice 10910</a>
            </td>
            <td className="text--semiBold">$20.95</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
          <tr>
            <td className="text--primary">
              <a>Order 1001</a>
            </td>
            <td className="text--primary">
              <a>Credit Memo 239</a>
            </td>
            <td className="text--semiBold">$13.00</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
          <tr>
            <td className="text--primary">
              <a>Order 1001</a>
            </td>
            <td className="text--primary">
              <a>Invoice 10913</a>
            </td>
            <td className="text--semiBold">$80.00</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
        </tbody>
        <tbody className="collapsible collapsible--collapsed">
          <tr className="toggle">
            <td className="text--semiBold">02/08/2020</td>
            <td className="text--semiBold">Torch Dental</td>
            <td className="text--semiBold">$420.11</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
          <tr>
            <td className="text--primary">
              <a>Order 1000</a>
            </td>
            <td className="text--primary">
              <a>Invoice 1127</a>
            </td>
            <td className="text--semiBold">$420.11</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
        </tbody>
        <tbody className="collapsible">
          <tr className="toggle">
            <td className="text--semiBold">02/04/2020</td>
            <td className="text--semiBold">DC Dental</td>
            <td className="text--semiBold">$76.41</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
          <tr>
            <td className="text--primary">
              <a>Order 1000</a>
            </td>
            <td className="text--primary">
              <a>Invoice 1127</a>
            </td>
            <td className="text--semiBold">$76.41</td>
            <td className="text--semiBold">Visa 9181</td>
          </tr>
        </tbody>
      </table>
    );

    const main = this.makeSection(
      'tables',
      'Tables',
      <React.Fragment>
        <div className={containerBlock('block')}>
          <h4>Headered Tables</h4>
          <p>
            These are typical tables with labeled columns. The headers may or may not be
            interactive. They may be within a container or exist as their own container.
          </p>
          <p>
            The typography section above is an example of a non-interactive headered table within a
            container.
          </p>
        </div>
        <div className={containerBlock('block')}>
          <h6>Table with interactive header, inside a container</h6>
          <p>
            Table header may also include interactive elements for sorting, filtering and selecting
          </p>
          {tableWithControls()}
        </div>
        <div className={containerBlock('block')}>
          <h6>Table, inside a container</h6>
          <p>For use with tables that show static information.</p>
          {tableWithoutControls()}
          <p>And without borders</p>
          {tableWithoutControlsOrBorders()}
        </div>

        <div className={containerBlock('block')}>
          <h4>Table Toggles</h4>
          <p>
            Some headered tables may have sets of radios (buttons on mobile) above for additional
            filtering.
          </p>
          <ul className={tableToggleBem()}>
            <li className={tableToggleBem('item')}>
              <div className={tableToggleBem('itemContent')}>
                <span className={tableToggleBem('label')}>
                  Unpaid
                  <span className={tableToggleBem('count')}>(20)</span>
                </span>
                <span className={tableToggleBem('details')}>$1,283.33</span>
              </div>
            </li>
            <li className={tableToggleBem('item')}>
              <div className={tableToggleBem('itemContent')}>
                <span className={tableToggleBem('label')}>
                  Unpaid
                  <span className={tableToggleBem('count')}>(20)</span>
                </span>
                <span className={tableToggleBem('details')}>$1,283.33</span>
              </div>
            </li>
            <li className={tableToggleBem('item', 'selected')}>
              <div className={tableToggleBem('itemContent')}>
                <span className={tableToggleBem('label')}>
                  Unpaid
                  <span className={tableToggleBem('count')}>(20)</span>
                </span>
                <span className={tableToggleBem('details')}>$1,283.33</span>
              </div>
            </li>
          </ul>
          <div className={containerBlock('block')}>
            <p>Headered tables may also exist outside of containers as below</p>
          </div>
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        {main}
        <h3 className="pageHeader">Table outside of container</h3>
        {tableWithControls(true)}
        {collapsibleTableWithControls(true)}

        <div className={layoutBem(null, ['colLeft', 'reverseOrder'])}>
          <div className={layoutBem('col')}>
            <div className="container">
              <h4 className="pageHeader">
                Order Summary
                <br />
                $980.00
              </h4>
              <div className="summaryTable">
                <table>
                  <tbody>
                    <tr className="summaryTable-rollup summaryTable-rollup--expanded">
                      <td>
                        DC Dental <span className="summaryTable-count">(2 Items)</span>
                      </td>
                      <td>$cost</td>
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
                      <td>$cost</td>
                    </tr>
                    <tr>
                      <td>Torch Service Charge</td>
                      <td>$cost</td>
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
              <p>
                These tables are always in a left or right column and are used for things like
                orders and cards
              </p>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h4>Sectional Table</h4>
          <table className="sectional">
            <thead>
              <tr>
                <td colSpan="3">1/1/1978</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:00 am</td>
                <td>Farmington long long city name, NY</td>
                <td>In Transit</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td colSpan="3">1/1/1979</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:00 am</td>
                <td>New York City, NY</td>
                <td>Out for Delivery Out for Delivery Out for Delivery</td>
              </tr>
              <tr>
                <td>12:00 am</td>
                <td>New York City, NY</td>
                <td>Order Processed: Out for delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  get modalsSection() {
    const modalBem = makeBem('modal');
    return (
      <React.Fragment>
        {this.makeSection(
          'modals',
          'Modals',
          <React.Fragment>
            <p>
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'basicModal')}
              >
                Click for a basic modal
              </button>
            </p>
            <p>
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'wideModal')}
              >
                Click for a wide modal
              </button>
            </p>
            <p>
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'roundModal')}
              >
                Click for a round modal
              </button>
            </p>
            <p>
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'smallModal')}
              >
                Click for a small modal
              </button>
            </p>
            <p>
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'largeModal')}
              >
                Click for a large modal
              </button>
            </p>
            <p>
              Click{' '}
              <button
                className="btn btn--primary btn--sized btn--small"
                onClick={this.toggleExpanded.bind(this, 'productModal')}
              >
                here
              </button>{' '}
              for a sample product modal. Note that this example uses the layout system below with
              statically sized side columns. It may be necessary to set up the column system for
              this and other modals in different ways.
            </p>
            <div className={modalBem('backdrop')}>
              <div
                id="basicModal"
                className={modalBem(null, { open: !this.isExpanded('basicModal') })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'basicModal')}
                ></div>
                <div className={modalBem('body')}>
                  <h5>Modal title</h5>
                  <p>Modal content</p>
                </div>
              </div>
              <div
                id="wideModal"
                className={modalBem(null, { open: !this.isExpanded('wideModal'), wide: true })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'wideModal')}
                ></div>
                <div className={modalBem('body')}>
                  <h5>Modal title</h5>
                  <p>Modal content</p>
                </div>
              </div>
              <div
                id="roundModal"
                className={modalBem(null, { open: !this.isExpanded('roundModal'), round: true })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'roundModal')}
                ></div>
                <div className={modalBem('body')}>
                  <h5>Modal title</h5>
                  <p>Modal content</p>
                </div>
              </div>
              <div
                id="smallModal"
                className={modalBem(null, { open: !this.isExpanded('smallModal'), small: true })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'smallModal')}
                ></div>
                <div className={modalBem('body')}>
                  <h5>Modal title</h5>
                  <p>Modal content</p>
                </div>
              </div>
              <div
                id="largeModal"
                className={modalBem(null, { open: !this.isExpanded('largeModal'), large: true })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'largeModal')}
                ></div>
                <div className={modalBem('body')}>
                  <h5>Modal title</h5>
                  <p>Modal content</p>
                </div>
              </div>
              <div
                id="productModal"
                className={modalBem(null, { open: !this.isExpanded('productModal'), wide: true })}
              >
                <div
                  className={modalBem('closer')}
                  onClick={this.toggleExpanded.bind(this, 'productModal')}
                ></div>
                <div className={'product ' + modalBem('body')}>
                  <div className="layout--colLeft ">
                    <div className="layout-col">
                      <div className="product-header">
                        <i className="icon icon-favorite icon--color-favorite"></i>
                      </div>
                      <div className="product-image">
                        <img
                          src="/assets/styleguide/product-landscape.jpg"
                          alt="KC300 Procedure Masks w/Visor 25/Bx"
                        />
                      </div>
                      <span className="details2 text--muted">View larger image</span>
                    </div>
                    <div className="layout-main">
                      <div className="layout layout--colRight layout--reverseOrder">
                        <div className="layout-main product-body">
                          <div className="product-title">KC300 Procedure Masks w/Visor 25/Bx</div>
                          <div className="product-manufacturer">
                            Halyard (KC Healthcare) - 28800
                          </div>
                          <div className="product-variant">
                            <div className="text--semiBold">Shade: A1</div>
                            <div className="variantSelector">
                              <div className="variantBtn">option</div>
                              <div className="variantBtn variantBtn--selected">A1</div>
                              <div className="variantBtn variantBtn--unavailable">
                                unavailable option
                              </div>
                              <div className="variantBtn">option</div>
                              <div className="variantBtn">option</div>
                              <div className="variantBtn">option</div>
                              <div className="variantBtn">option</div>
                            </div>
                          </div>
                          <div className="product-variant">
                            <div className="text--semiBold">Size: Large</div>
                            <div className="variantSelector">
                              <div className="variantBtn">Small</div>
                              <div className="variantBtn variantBtn--selected">Large</div>
                              <div className="variantBtn variantBtn--unavailable">X-Large</div>
                            </div>
                          </div>
                          <span className="text--semiBold">
                            Purchased 10, 19 days ago (DC Dental)
                          </span>
                          <div className="product-flags product-flags--vertical">
                            <span className="flag flag--preferred">Preferred</span>
                            <span className="flag flag--promo">Promo</span>
                          </div>
                          <div className="product-prices">
                            <div className="product-price product-price--torch">$24</div>
                            <div className="product-price product-price--retail">Retail $25</div>
                          </div>
                          <div className={productBem('availability')}>
                            Eligible for 1-Day Shipping
                          </div>
                        </div>
                        <div className="layout-col">
                          <div className="card product-controls">
                            <div className="product-prices">
                              <div className="product-price product-price--torch">$24.00</div>
                              <div className="product-price product-price--retail">
                                Retail $25.00
                              </div>
                            </div>
                            <div className="product-flags product-flags--horizontal">
                              <span className={'flag flag--preferred'}>Preferred</span>
                              <span className={'flag flag--promo'}>Promo</span>
                            </div>
                            <div className={'product-availability'}>
                              Eligible for 1-Day Shipping
                            </div>
                            <div className="product-quantity">Quantity:</div>
                            <div className={qBem()}>
                              <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                              <div className={qBem('count')}>1</div>
                              <div className={qBem('plus')}>+</div>
                              <div className={qBem('add')}>Add</div>
                            </div>
                            <button className="btn btn--primary spaceTop">Add To List</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h6 className="spaceBottom">Product Detail</h6>
                    <div>
                      <p>
                        KC300 Fluidshield masks now meet the ASTM F2100-11 Level 3 standard.
                        Designed to provide high fluid resistance. If the fluid risk involves
                        potential splash and splatter, use the procedure mask with a wraparound
                        visor version for added protection.{' '}
                      </p>
                      <ul>
                        <li>Refill Pack</li>
                        <li>25/Bx</li>
                        <li>Orange/Earloop</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        <div className="section-label">
          <h3>Inline modal</h3>
          <div className={modalBem(null, { inline: true })} style={{ zIndex: 1 }}>
            <div className={`modal-body modal--round container`}>
              <h5>Modal title</h5>
              <p>Modal content</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  iconLine(i) {
    if (Array.isArray(i)) {
      return (
        <React.Fragment key={i}>
          <h5>
            {i[0]}
            {i[2] && ' (deprecated)'}
          </h5>
          {[i[0], ...i[1].map((m) => `${i[0]}--${m}`)].map((icon) => this.iconLine(icon))}
        </React.Fragment>
      );
    }
    const idx = i.indexOf('--');
    if (idx && idx > 0) {
      i = `${i.substr(0, idx)} icon-${i}`;
    }
    const className = `icon icon-${i}`;
    return (
      <React.Fragment key={i}>
        <i className={className}></i> {className}
        <br />
        <br />
      </React.Fragment>
    );
  }

  get iconsSection() {
    return this.makeSection(
      'icons',
      'Icons',
      <React.Fragment>
        <p>
          Some icons use font awesome and other use SVG icons so there are slightly different
          options for modifying each one. Generally the options provided here are the only ones that
          should be used.
        </p>
        <h4>Font Awesome Icons</h4>
        {[
          'radio',
          'radio--large',
          'radio-checked',
          'radio-checked--large',
          'checkbox',
          'checkbox--xSmall',
          'checkbox--small',
          'checkbox--large',
          'checkbox-checked',
          'checkbox-checked--xSmall',
          'checkbox-checked--small',
          'checkbox-checked--large',
          'check',
          'check--inactive',
          'check--xSmall',
          'check--small',
          'check--large',
          'check-circle',
          'check-circle--inactive',
          'check-circle--xSmall',
          'check-circle--small',
          'check-circle--large',
          'search',
          'repeat',
          'success',
          'sort',
          'sort-up',
          'sort-down',
          'filter',
          'file',
          'inquiry',
          'zoom-in',
          'zoom-out',
          'calendar',
          'plus',
          'minus',
        ].map((i) => this.iconLine(i))}
        <h4>Image Icons</h4>
        {[
          ['chat', []],
          ['arrow', []],
          ['tooltip', ['primary', 'disabled']],
          ['warning', ['active', 'disabled']],
          ['alert', ['active', 'danger', 'disabled']],
          ['account', ['disabled']],
          ['compose', ['primary', 'disabled']],
          ['equipment', ['disabled']],
          ['rewards', ['disabled']],
          ['password-show', []],
          ['password-hide', []],
          ['list', ['white']],
          ['trash', ['disabled']],
          [
            'close',
            [
              'disabled',
              'small',
              'small icon-close--disabled',
              'xSmall',
              'xSmall icon-close--disabled',
            ],
          ],
          ['cart-plus', ['disabled']],
          ['favorite', ['favorited']],
          ['carousel-chevron-right', []],
          ['carousel-chevron-left', []],
          ['print', ['disabled']],
          ['shop', ['active', 'disabled']],
          ['cart', ['active', 'disabled']],
          ['messages', ['active', 'disabled']],
          ['orders', ['active', 'disabled']],
          ['payments', ['active', 'disabled']],
        ].map((i) => this.iconLine(i))}
        <div className="bg-light">
          {[
            [
              'chevron-right',
              [
                'white',
                'small',
                'small icon-chevron-right--white',
                'xSmall',
                'xSmall icon-chevron-right--white',
              ],
            ],
          ].map((i) => this.iconLine(i))}
          {[
            [
              'chevron-left',
              [
                'white',
                'small',
                'small icon-chevron-left--white',
                'xSmall',
                'xSmall icon-chevron-left--white',
              ],
            ],
          ].map((i) => this.iconLine(i))}
          {[
            [
              'chevron-up',
              [
                'white',
                'small',
                'small icon-chevron-up--white',
                'xSmall',
                'xSmall icon-chevron-up--white',
              ],
            ],
          ].map((i) => this.iconLine(i))}
          {[
            [
              'chevron-down',
              [
                'white',
                'small',
                'small icon-chevron-down--white',
                'xSmall',
                'xSmall icon-chevron-down--white',
              ],
            ],
          ].map((i) => this.iconLine(i))}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="app-root bg-light d-flex">
        <TopNav links={links} />
        <main className="app-body">
          <BottomNav links={links} />
          <List />
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
          <Spacing />
          <Align />
          <div style={{ height: '200px', display: 'flex' }}>&nbsp;</div>
        </main>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);
