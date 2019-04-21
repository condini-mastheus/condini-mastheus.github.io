import Color from 'color';

export default {
  white: '#fff',
  lighter: '#eee',
  light: '#ddd',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',
  transparent: 'transparent',
  darkTransparent: opacity => `rgba(0, 0, 0, ${opacity})`,
  whiteTransparent: opacity => `rgba(255, 255, 255, ${opacity})`,

  primary: '#936491',
  primaryDark: variant => Color('#936491').darken(variant),
  primaryLight: variant => Color('#936491').lighten(variant),

  secundary: '#e70b5e',
  secundaryDark: variant => Color('#e70b5e').darken(variant),
  secundaryLight: variant => Color('#e70b5e').lighten(variant),

  success: '#9dca83',
  danger: '#e37a7a',
};
