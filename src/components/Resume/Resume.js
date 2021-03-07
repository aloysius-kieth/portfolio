import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Resume extends Component {
  render() {
    const {
      theme: { textAlternate, colorPrimary },
    } = this.context;
    return (
      <div>
        <div className='ribbon-wrapper'>
          <div className='ribbon' style={{ backgroundColor: colorPrimary }}>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1HoAikionFaTnsdDn-Doc4x3sSq4qTPBV/view?usp=sharing'
              style={{ color: textAlternate }}
            >
              {' '}
              RESUME
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Resume.contextTypes = {
  theme: PropTypes.any,
};

export default Resume;
