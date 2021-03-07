import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { toElement } from '../../utils/scroll';

class NavBar extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false,
    };
  }

  scrollToPage(page) {
    const nextPage = document.querySelector(page);
    toElement(nextPage);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState(
        {
          isSticky: true,
        },
        () => {
          // console.log(`isSticky : ${this.state.isSticky}`);
        }
      );
    } else {
      this.setState(
        {
          isSticky: false,
        },
        () => {
          // console.log(`isSticky : ${this.state.isSticky}`);
        }
      );
    }
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navColor },
      switchTheme,
    } = this.context;

    // console.log(this.context);
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navColor, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };

    return (
      <nav
        className={stickyClass}
        ref={(element) => {
          this.nav = element;
        }}
        style={stickyStyles}
      >
        <div
          className='theme-switcher'
          onClick={(e) => {
            switchTheme();
          }}
        >
          <button className='fas fa-palette'></button>
        </div>
        <div className='navBar'>
          <div
            className='navBar_item'
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            <span style={{ borderBottomColor: colorPrimary }}>About</span>
          </div>
          <div
            className='navBar_item'
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            <span style={{ borderBottomColor: colorPrimary }}>Works</span>
          </div>
          {/* <div
            className='navBar_item'
            onClick={(e) => this.scrollToPage('.contact-page')}
          >
            Contact
          </div> */}
        </div>
      </nav>
    );
  }
}

NavBar.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func,
};

export default NavBar;
