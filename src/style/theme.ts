export default {
  colors: {
    brand: '#0366d6',
    white: '#fff',
    black: '#000',
    gray: '#999',
  },
  breakpoints: {
    sm: '400px',
    md: '800px',
    lg: '1200px',
  },
  spacing: [...new Array(32)].map((_, index) => `${index * 0.25}rem`),
};
