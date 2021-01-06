import classnames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { makeBem } from '../util';
import { Box, Container, Section } from '../components';

const qBem = makeBem('quantitySelector');

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      path: '',
    };
  }
  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const items = _.times(6, (i) => {
      return {
        src:
          i % 2 == 0
            ? '/assets/styleguide/product-portrait.png'
            : '/assets/styleguide/product-landscape.jpg',
        title:
          i % 2 == 0
            ? 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3 / Bx'
            : 'Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx Protein Mouthwash Concentrate Fresh Mint 1 oz 3/Bx',
        manufacturer: 'Cetylite Industries, Inc. - 0307',
      };
    });
    const listClasses = classnames('list', {
      'list--expanded': this.state.expanded,
    });
    return (
      <Container name="list">
        <div className={listClasses}>
          <div className="list-button" onClick={this.toggleExpanded.bind(this)}>
            <i className="icon icon-list"></i>
            <span>View List</span>
            <div className={'badge'}>20</div>
          </div>
          <div className="list-header">
            <h4>List</h4>
            <div className={'badge badge--spaceLeft'}>20</div>
            <i className="flex-grow" />
            <button
              className="btn btn--small btn--outline btn--sized"
              onClick={this.toggleExpanded.bind(this)}
            >
              hide
            </button>
          </div>
          <div className="list-body">
            {items.map((item, i) => {
              return (
                <div className="list-item product" key={i}>
                  <div className="product-header">
                    <i className="icon icon-favorite" />
                    <div className="product-flags product-flags--horizontal">
                      <div className="flag flag--preferred">
                        Preferred
                        <div className="tooltip">
                          <div className="tooltip-body">
                            This item is offered by a supplier that offers fast shipping and fair
                            prices.
                          </div>
                        </div>
                      </div>
                      <div className="flag flag--purchasedBefore">
                        Purchased Before
                        <div className="tooltip">
                          <div className="tooltip-body">
                            <strong>Purchase 19 days ago</strong>
                            <br />
                            Vendor: <strong>DC Dental</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <i className="icon icon-cart-plus" />
                  </div>
                  <div className="product-image">
                    <img src={item.src} />
                  </div>
                  <div className={'product-body'}>
                    <div className={'product-title'}>{item.title}</div>
                    <div className={'product-manufacturer'}>{item.manufacturer}</div>
                  </div>
                  <div className={'product-footer'}>
                    <div className={qBem()}>
                      <div className={qBem('label')}>
                        <i className="icon icon-trash"></i>
                      </div>
                      <div className={qBem('minus', { disabled: true })}>&ndash;</div>
                      <div className={qBem('count')}>1</div>
                      <div className={qBem('plus')}>+</div>
                    </div>
                    <div className={'product-prices'}>
                      <div className={'product-price product-price--torch'}>$16 Torch</div>
                      <div className={'product-price product-price--retail'}>$22 Retail</div>
                    </div>
                    <div className={'product-availability'}>Eligible for 1-Day Shipping</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="list-footer">
            <div>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
