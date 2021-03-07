import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toTop } from '../../utils/scroll';

import './style.scss';

class ScrollTop extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      showScrollTop: false,
    };
  }

  handleScroll() {
    const boundingRect = document.documentElement.getBoundingClientRect();
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100) {
        this.setState({ showScrollTop: true });
      } else {
        this.setState({ showScrollTop: false });
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {
      theme: { colorPrimary },
    } = this.context;

    const hide = this.state.showScrollTop ? '' : 'hide';

    return (
      <div
        className='scroll-top'
        onClick={(e) => {
          toTop();
        }}
      >
        <div className={`arrow ${hide}`} style={{ color: colorPrimary }}>
          <button className='fas fa-angle-double-up' href='#' />
        </div>
      </div>
    );
  }
}

ScrollTop.contextTypes = {
  theme: PropTypes.any,
};

export default ScrollTop;
