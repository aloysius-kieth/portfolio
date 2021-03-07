import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// var faTags = [];

// function anchor() {
//   var rnd = Math.floor(Math.random() * 10000);
//   while (rnd > faTags.length) rnd = Math.floor(Math.random() * 10000);
//   $('.iconClass').append(
//     '<i class="fa ' +
//       faTags[rnd - 1].innerHTML.replace('.', '') +
//       '" aria-hidden="true"></i>'
//   );
// }

// function generate() {
//   $.each(faTags, function (index, value) {
//     $('<div class="iconClass"/>', {
//       text: value,
//     })
//       .append(
//         '<i class="fa ' +
//           faTags[200].innerHTML.replace('.', '') +
//           '" aria-hidden="true"></i>'
//       )
//       .appendTo('.background');
//   });
//}

class Background extends Component {
  // componentDidMount() {
  //   $.ajax({
  //     url: 'https://fontawesome.bootstrapcheatsheets.com/',
  //     success: function (data) {
  //       faTags = $(data).find('.fa-class');
  //       console.log(faTags);
  //       $('.anchors').html(faTags);
  //       anchor();
  //       generate();
  //     },
  //   });
  // }
  render() {
    const {
      theme: { colorPrimary },
    } = this.context;
    return (
      <div className='background' style={{ color: colorPrimary }}>
        <div id='stars1'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
        {/* <style jsx='true'>
          {`
            .iconClass {
              svg {
                transform: translateX(500px);
              }
            }
          `}
        </style>
        <div className='iconClass'></div> */}
      </div>
    );
  }
}

Background.contextTypes = {
  theme: PropTypes.any,
};

export default Background;
