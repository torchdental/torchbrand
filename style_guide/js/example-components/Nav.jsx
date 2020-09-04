import React from 'react';

import makeBem from '../../../src/makeBem';

const cn = makeBem('navbar')
const menuCn = makeBem('menu')

export default class Nav extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }
  
  get links() {
    return this.props.links.map((link) => {
      if (link.items) {
        return <li className={cn('item')} key={link.path}>
          <div className={`${menuCn(null, 'hoverable')}`}>
            <a href={`#${link.path}`} className={`${cn('link')} ${menuCn('label')}`} onClick={()=>{console.log('hi'); this.setState({expanded: !expanded})}}>
              {link.name}
            </a>
            <div className={menuCn('body')}>
                {link.items.map((item)=>{
                  return <a className={menuCn('item')} href={`#${item.path}`}>
                    {item.name}
                  </a>
                })}
            </div>
          </div>
        </li>
      } else {
        return <li className={cn('item')} key={link.path}>
          <a href={`#${link.path}`} className={cn('link')} >{link.name}</a>
        </li>
      }
      
    });
  }
  
  

  get components() {
    const items = [
      ["Containers"],
      ["Layout"],
      ["Spacing"],
    ]
    return items.map((item) => {
      const itemId = item[1] || item[0].toLowerCase();
      return <a key={itemId} href={`#${itemId}`} className={menuCn('item')}>
        {item[0]}
      </a>    
    })
              
  }
  
  render() {
    
    const { expanded } = this.state;
    
    return <nav className={cn()}>
      <div className={cn('brand')}>
        <img className={cn('torchLogo')} src='/assets/images/torch_logo.svg' />
      </div>
      <ul className={cn('nav')}>
        {this.links}
      </ul>
      <div className={cn('menu')}>
        <div className={menuCn(null, {expanded, withIcons: true, right: true})}>
          <div className={menuCn('label')} onClick={()=>this.setState({expanded: !expanded})}>
            More (spacing)
          </div>
          <div className={menuCn('body')}>
            <div className={menuCn('section')}>
              <div className={menuCn('item', 'header')}>
                <i className={'icon icon-account'}></i>            
                <strong>Account Settings</strong>
                <br/>
                <a className='text--primary'>75% complete</a>
              </div>
              <div className={menuCn('item')}>
                <p>Practice information</p>
                <div className={menuCn("itemDetails")}>
                  <p className='text--muted details1' >Login and password</p>
                  <p className='text--muted details1'>Contacts and addresses</p>
                </div>
              </div>
              <div className={menuCn('item')}>
                Payment methods
              </div>              
              <div className={menuCn('item')}>
                Supplier Accounts
              </div>              
              <div className={menuCn('item')}>
                License
              </div>              
            </div>
            <div className={menuCn('section')}>
              <div className={menuCn('item')}>
                <i className={'icon icon-messages icon-messages--selected'}></i>            
                Messages <span className={'badge'}>2</span>            
              </div>              
            </div>
            <div className={menuCn('section')}>
              <div className={menuCn('item')}>
                <i className={'icon icon-rewards'}></i>
                Rewards
              </div>
            </div>
            <div className={menuCn('section')}>
              <div className={menuCn('item')}>
                <i className={'icon icon-equipment'}></i>
                Equipment Services
                <div className={menuCn("itemDetails")}>
                  <span className='text--muted'>Create request</span>
                </div>
              </div>
            </div>
            <div className={menuCn('section')}>
              {this.components}
            </div>
          </div>
        </div>
      </div>
    </nav>
  }
}

