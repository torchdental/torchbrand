import React from 'react';

import makeBem from '../../../src/makeBem';

const cn = makeBem('navbar')
const menuCn = makeBem('menu')

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
      <div className={cn('menu', {expanded: true})}>
        <div className={menuCn()}>
          <div className={menuCn('label')}>
            Components
          </div>
          <div className={menuCn('body')}>
            <div className={menuCn('section')}>
              <div className={menuCn('item', 'header')}>
                <i className={'custom-icon custom-icon--acount'}></i>            
                <strong>Account Settings</strong>
                <p className='text--primary'>75% complete</p>
              </div>
              <div className={menuCn('item', 'group')}>
                <a href="#">Practice information</a>
                <a className='text--muted' href="#">Login and password</a>
                <a className='text--muted' href="#">Contacts and addresses</a>
              </div>
              <div className={menuCn('item')}>
                <a href="#">Payment methods</a>
              </div>              
              <div className={menuCn('item')}>
                <a href="#">Supplier Accounts</a>
              </div>              
              <div className={menuCn('item')}>
                <a href="#">License</a>
              </div>              
            </div>
            <div className={menuCn('section')}>
              <div className={menuCn('item')}>
                <i className={'custom-icon custom-icon--messages'}></i>            
                <a href="#">Messages</a>
                <span className={'badge'}>2</span>            
              </div>              
            </div>
          </div>
        </div>
      </div>
    </nav>
  }
}

