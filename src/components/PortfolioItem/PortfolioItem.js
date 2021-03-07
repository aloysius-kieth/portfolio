import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class PortfolioItem extends Component {
  render() {
    const {
      theme: { colorPrimary, textAlternate },
    } = this.context;

    if (this.props.render) return this.props.render;
    else
      return (
        <div>
          <div
            className='portfolio-item'
            style={{ backgroundColor: colorPrimary, color: textAlternate }}
          >
            <div className='title'>Title</div>
            <div className='description'>Description</div>
            <div className='icon'>
              <div className='fab fa-react'></div>
            </div>
            <div className='links'>
              <a target='_blank' href='https://github.com/aloysius-kieth'>
                Source
              </a>
            </div>
          </div>
        </div>
      );
  }
}

PortfolioItem.contextTypes = {
  theme: PropTypes.any,
};

export default PortfolioItem;
