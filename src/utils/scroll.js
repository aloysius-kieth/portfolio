// Check if scroll-behavior is supported by browser
const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scroll-behavior' in document.documentElement.style
  : false;

// Scroll to top of page
export const toTop = () => {
  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, 0);
  }
};

// Scroll to coordinate
export const to = (ycoordinate) => {
  if (isSmoothScrollSupported) {
    window.scroll({
      top: ycoordinate,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, ycoordinate);
  }
};

// Scroll to element
export const toElement = (element) => {
  if (element) {
    if (isSmoothScrollSupported) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      element.scrollIntoView();
    }
  }
};

export default {
  toTop,
  to,
  toElement,
};
