import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const EMAIL_ADDR = 'aloysius.kieth@gmail.com';

const SocialIcons = (props, context) => {
  const {
    theme: { colorPrimary },
  } = context;

  return (
    <div className='social-icons'>
      <a
        target='_blank'
        href='https://github.com/aloysius-kieth'
        style={{ color: colorPrimary }}
      >
        <i className='fab fa-github-alt'></i>
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/aloysius-tay'
        style={{ color: colorPrimary }}
      >
        <i className='fab fa-linkedin'></i>
      </a>
      <a href={`mailto:${EMAIL_ADDR}`} style={{ color: colorPrimary }}>
        <i className='fas fa-envelope'></i>
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any,
};

export default SocialIcons;
