import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Footer extends Component {
  render() {
    const {
      theme: { colorPrimary, textPrimary, textHighlight },
    } = this.context;
    return (
      <footer>
        <div className='content-wrapper' style={{ color: textPrimary }}>
          © Copyright 2021
          <a
            href='https://www.linkedin.com/in/aloysius-tay'
            target='_blank'
            style={{ color: colorPrimary }}
          >
            {' '}
            |{' '}
            <span style={{ backgroundColor: textHighlight }}>
              Aloysius Kieth
            </span>
          </a>
        </div>
      </footer>
    );
  }
}

Footer.contextTypes = {
  theme: PropTypes.any,
};

export default Footer;
