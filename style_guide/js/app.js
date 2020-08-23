import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './example-components/Nav.jsx';

import makeBem from '../../src/makeBem';

const containerBlock = makeBem('container')

const links = [
  {
    name: 'Nav', //Also include mobile nav
    path: 'nav'    
  },
  {
    name: 'Colors',
    path: 'colors'    
  },
  {
    name: 'Typography',
    path: 'typography'    
  },  
  {
    name: 'Spacing',
    path: 'spacing'    
  },
  {
    name: 'Page Layout', // include margins, containers/lines/bars
    path: 'pagelayout'    
  },
  {
    name: 'Icons', 
    path: 'icons'    
  },  
  // TODO style "Components as right-aligned auth menu"
  {
    name: 'Components', 
    path: 'components'    
  },  
  // Buttons, Links, Badges, Icons, Forms, menus (filter, sort), 
  // Cards & card-grid, tables, notifications
  // modals, tooltips
]


class App extends React.Component {
  render() {
    return <div className="app-root bg-light d-flex">
      <Nav links={links}/>
      <main className="app-body">
        <section className={containerBlock(null, 'shadow')} id="nav">
          Info about Navs
        </section>
        <section className={containerBlock(null, 'round')} id="colors">
          Info about Colors
        </section>
        <section className={containerBlock(null, 'glow')} id="typography">
          Info about Typography
        </section>
        <section className={containerBlock(null, 'shadow')} id="spacing">
          Info about Spacing
        </section>
        <section className={containerBlock(null, 'shadow')} id="pagelayout">
          Info about Page Layout
        </section>
      </main>
    </div>
  }
}


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);
