import _ from 'lodash';
import React from 'react';
import { makeBem } from '../util';

const cn = makeBem('navbar');
const menuCn = makeBem('menu');
export class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      path: '',
    };
  }

  updatePath() {
    this.setState({ path: window.location.hash.substring(1) });
  }

  componentDidMount() {
    this.updatePath();
    window.addEventListener('hashchange', () => this.updatePath());
  }

  renderTopLinks() {
    const hasActive = (link) => {
      return !!_.find(link.items, { path: this.state.path });
    };
    const renderLink = (link) => {
      const linkClasses = `${cn('link', { active: hasActive(link) })} ${menuCn('label')}`;
      if (link.path) {
        return (
          <a href={`#${link.path}`} className={linkClasses}>
            {link.name}
          </a>
        );
      } else {
        return <span className={linkClasses}>{link.name}</span>;
      }
    };
    return this.props.links.map((link, i) => {
      if (link.items) {
        return (
          <li className={cn('item')} key={i}>
            <div className={`${menuCn(null, 'hoverable')}`}>
              {renderLink(link)}
              <div className={menuCn('body')}>
                {link.items.map((item) => {
                  return (
                    <a key={item.path} className={menuCn('item')} href={`#${item.path}`}>
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </li>
        );
      }
    });
  }

  renderNavMenu() {
    const { expanded } = this.state;
    return (
      <div className={menuCn(null, { expanded, withIcons: true, right: true })}>
        <div className={menuCn('label')} onClick={() => this.setState({ expanded: !expanded })}>
          Menu
        </div>
        <div className={menuCn('body')}>
          <div className={menuCn('section')}>
            <div className={menuCn('item', 'header')}>
              <i className={'icon icon-account'}></i>
              Account Settings
            </div>
            <div className={menuCn('item')}>
              <p>Practice information</p>
              <div className={menuCn('itemDetails')}>
                <p className="text--muted details1">Login and password</p>
                <p className="text--muted details1">Contacts and addresses</p>
              </div>
            </div>
            <div className={menuCn('item')}>Payment methods</div>
            <div className={menuCn('item')}>Supplier Accounts</div>
            <div className={menuCn('item')}>License</div>
          </div>
          <div className={menuCn('section')}>
            <div className={menuCn('item')}>
              <i className={'icon icon-messages icon-messages--selected'}></i>
              <span>
                Messages <span className={'badge'}>2</span>
              </span>
            </div>
          </div>
          <div className={menuCn('section')}>
            <div className={menuCn('item')}>
              <i className={'icon icon-rewards'}></i>
              Rewards
              <div className={menuCn('itemDetails')}>
                <span className="text--muted">Check balance</span>
              </div>
            </div>
          </div>
          <div className={menuCn('section')}>
            <div className={menuCn('item')}>
              <i className={'icon icon-equipment'}></i>
              Equipment Services
              <div className={menuCn('itemDetails')}>
                <span className="text--muted">Create request</span>
              </div>
            </div>
          </div>
          <div className={menuCn('section')}>
            <div className={menuCn('item')}>
              <i className={'icon icon-payments'}></i>
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav className={cn()}>
        <div className={cn('brand')}>
          <a href="/">
            <img className={cn('torchLogo')} src="/assets/images/torch_logo.png" />
          </a>
        </div>
        <ul className={cn('nav')}>{this.renderTopLinks()}</ul>
        <div className={cn('menu')}>
          <div className={cn('label')}>
            <span>You are viewing&nbsp;</span>
            <strong>Torch Brand Guide</strong>
          </div>
          {this.renderNavMenu()}
        </div>
      </nav>
    );
  }
}
