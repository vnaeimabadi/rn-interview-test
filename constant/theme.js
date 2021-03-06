import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: '#fff',
  black: '#000',
  transparentBlack: '#0006',
  gray: '#AFBDCC',
  lightYellow: '#fff',
  blue: '#4096FE',
  darkBlue: '#3663A8',
  transparentGray:'#AFBDCC',
  green:"green",
  red:"red",
  textColor:"#1B2F5D",
  textColorSUb:"#1B2F5D",
  borderColor:"#203159",
  circleActive:"#c7c9d3",
  circleDeActive:"#fafafa",
  rectangle:"#F1F1F1",
  rectangleDark:"#C4C4C4"
};

export const SIZES = {
  //global size
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  //font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  //app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'DMSans-Medium', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h4: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h5, lineHeight: 16},
  body1: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body5, lineHeight: 16},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
