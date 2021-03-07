import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Contact extends Component {
  render() {
    const {
      theme: { bgPrimary, colorPrimary, textPrimary, textHighlight },
    } = this.context;
    return (
      <div className='contact-page' style={{ backgroundColor: bgPrimary }}>
        <div className='content-wrapper'>
          <h1 style={{ color: colorPrimary }}>Contact Me!</h1>
          <div className='contact-wrapper'>
            <div className='contact-content' style={{ color: textPrimary }}>
              <span style={{ color: textHighlight }}>
                {'{{Under Construction}}'}
              </span>

              <div className='construction-icon'>🚧🚧🚧🚧🚧🚧🚧🚧🚧</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.contextTypes = {
  theme: PropTypes.any,
};

export default Contact;
