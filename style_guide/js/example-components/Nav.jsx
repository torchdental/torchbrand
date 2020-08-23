import React from 'react';

import makeBem from '../../../src/makeBem';

const cn = makeBem('navbar')

export default class Nav extends React.Component {
  
  get links() {
    return this.props.links.map((link) => {
      return <li className={cn('item')} key={link.path}>
          <a href={`#${link.path}`} className={cn('link')} >{link.name}</a>
        </li>
    });
  }
  
  render() {
    return <nav className={cn()}>
      <div className={cn('brand')}>
        <img className={cn('torchLogo')} src='/assets/images/torch_logo.svg' />
      </div>
      <ul className={cn('nav')}>
        {this.links}
      </ul>
    </nav>
  }
}

