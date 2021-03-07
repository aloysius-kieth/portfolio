import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './Portfolio-items';

import './style.scss';

class PortfolioPage extends Component {
  render() {
    const {
      theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary },
    } = this.context;
    return (
      <div className='portfolio-page' style={{ backgroundColor: bgPrimary }}>
        <div className='content-wrapper'>
          <h1 style={{ color: colorPrimary }}>Works 🛠️</h1>
          <div className='portfolio-wrapper'>
            <style jsx='true'>
              {`
                .portfolio-item {
                  background-color: ${colorPrimary};
                  color: ${textAlternate};
                }
                .portfolio-item a {
                  color: ${textAlternate};
                }
                .portfolio-item .links a:hover {
                  border-bottom: 2px solid ${colorAlternate};
                }
              `}
            </style>
            {portfolioItems.map((item, id) => (
              <PortfolioItem render={item.render} key={id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PortfolioPage.contextTypes = {
  theme: PropTypes.any,
};

export default PortfolioPage;
