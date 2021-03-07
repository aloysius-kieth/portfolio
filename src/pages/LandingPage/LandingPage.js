import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SocialIcons from '../../components/SocialIcons';
import { init } from 'ityped';
import NavBar from '../../components/NavBar';

// const ThemeContext = createContext({
//   theme: { bgPrimary, colorPrimary },
// });

// class LandingPageContext extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { theme } = this.context;
//     return <div>hello world {theme}</div>;
//   }
// }

// LandingPageContext.propTypes = {
//   name: PropTypes.any,
// };

// const LandingPage = () => (
//   <ThemeContext.Provider value={{ theme: 'green' }}>
//     <LandingPageContext></LandingPageContext>
//   </ThemeContext.Provider>
// );

class LandingPage extends Component {
  componentDidMount() {
    const typingAnim = document.querySelector('#typingAnim');
    init(typingAnim, {
      showCursor: false,
      backDelay: 3000,
      strings: ["Hi! I'm Aloysius", 'Welcome!'],
    });
  }

  componentWillUnmount() {}

  render() {
    const {
      theme: { bgPrimary, colorPrimary },
    } = this.context;

    return (
      <div style={{ backgroundColor: bgPrimary }} className='landing-page'>
        <NavBar />
        <div className='intro-wrapper' style={{ color: colorPrimary }}>
          <div className='title'>
            <span id='typingAnim'></span>
            <span className='ityped-cursor'>|</span>
            <div className='tag-line'>Unity Dev | Game Dev | Front-End Dev</div>
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.contextTypes = {
  theme: PropTypes.any,
};

export default LandingPage;
