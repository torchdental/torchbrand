import _ from 'lodash';
import React from 'react';
import { makeBem } from '../util';

const cn = makeBem('navbarBottom');
const ns = makeBem('navbarSecondary');
export class BottomNav extends React.Component {
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

  isActive(link) {
    return link.path === this.state.path;
  }

  hasActiveItem(link) {
    return !!_.find(link.items, { path: this.state.path });
  }

  renderLinks() {
    return this.props.links.map((link, i) => {
      if (link.items) {
        const liClasses = cn('item', { selected: this.isActive(link) || this.hasActiveItem(link) });
        const linkClasses = `${cn('label', { active: this.hasActiveItem(link) })}`;
        return (
          <a key={link.path} href={`#${link.path}`} className={linkClasses}>
            <li key={link.name} className={liClasses}>
              <div className={cn('icons')}>
                <i className="icon icon-messages"></i>
              </div>
              <div className={cn('label')}>{link.name}</div>
            </li>
          </a>
        );
      }
    });
  }

  renderItems() {
    return this.props.links.map((link, i) => {
      if (this.isActive(link) || (this.hasActiveItem(link) && link.items)) {
        return link.items.map((item) => {
          const linkClasses = ns('link', { active: this.isActive(item) });
          return (
            <li key={item.name} className={ns('item')}>
              <a href={`#${item.path}`} className={linkClasses}>
                {item.name}
              </a>
            </li>
          );
        });
      }
    });
  }

  renderSecondary() {
    return (
      <nav className={ns()}>
        <ul className={ns('nav')}>{this.renderItems()}</ul>
        <div className={ns('rightCol')}>
          <p>
            Payment Setting: <span className="text--bright">Pay ASAP</span>&nbsp;
            <i className="icon icon-tooltip">
              <span className="tooltip tooltip--right">Tooltip content</span>
            </i>
          </p>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSecondary()}
        <nav className={cn()}>
          <ul className={cn('nav')}>{this.renderLinks()}</ul>
        </nav>
      </React.Fragment>
    );
  }
}
