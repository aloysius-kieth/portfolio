import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { init } from 'ityped';
import trinaxLogo from '../../img/trinax-logo.gif';

class AboutPage extends Component {
  componentDidMount() {
    const typingAnim2 = document.querySelector('#typingAnim2');
    init(typingAnim2, {
      showCursor: false,
      backDelay: 3000,
      strings: ['Unity Developer', 'Game Developer', 'Front-End Enthusiast'],
    });
  }

  render() {
    const {
      theme: { bgPrimary, colorPrimary, textPrimary, textHighlight },
    } = this.context;

    return (
      <div className='about-page' style={{ backgroundColor: bgPrimary }}>
        <div className='content-wrapper'>
          <h1 style={{ color: colorPrimary }}>About 👨‍💻</h1>
          <div className='about-wrapper'>
            <div className='about-content' style={{ color: textPrimary }}>
              <p>
                Hi there! I am a{' '}
                <span
                  id='typingAnim2'
                  style={{ backgroundColor: textHighlight }}
                ></span>
                <span className='ityped-cursor'>|</span>
              </p>
              <p>
                I love to meddle with new front-end technologies. My primary
                skills involves C# using Unity3D to create games and interactive
                applications. Currently, I am learning ReactJS and other
                front-end technologies. I am also interested in mobile
                application development as well! dev as well!
              </p>
              <p>
                I picked up Web Game Development along the way (using Phaser
                HTML5 game framework)
              </p>
              <p>
                With 3 years(and counting...) experience in the software/IT
                industry, I'm looking forward to further advance my career :)
              </p>
              <div className='skills-section'>
                <h3>
                  Common Tech that I use
                  <i className='fas fa-level-down-alt'></i>
                </h3>
                <div className='skills-list'>
                  <ol>
                    <li>
                      Unity3D
                      <i className='fab fa-unity'></i>
                    </li>
                    <li>
                      ReactJS<i className='fab fa-react'></i>
                    </li>
                    <li>
                      JavaScript<i className='fab fa-js-square'></i>
                    </li>
                    <li>
                      HTML5<i className='fab fa-html5'></i>
                    </li>
                    <li>
                      CSS<i className='fab fa-css3-alt'></i>
                    </li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Phaser HTML5</li>
                  </ol>
                </div>
              </div>
              {/*TODO: Refractor this into its own component*/}
              <div className='experience-section'>
                <h3>
                  Companies I have worked for
                  <i className='fas fa-level-down-alt'></i>
                </h3>
                <img src={trinaxLogo} alt='' className='company-logo' />
                <p>2018 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AboutPage.contextTypes = {
  theme: PropTypes.any,
};

export default AboutPage;
