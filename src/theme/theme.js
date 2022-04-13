/* 
  TODO:
  (Discuss with the team)
  * "primary" is the same for light and dark themes. Separate out?
  * Figure out the best way to define border colors
  * Figure out better way to define "Interactive" colors such as for buttons & links
  * Find out how to handle Interactive states in dark mode (colors to use)
*/

// Descriptive Color Names:
const colorNames = {
  redPink: {
    base: '#FF5455',
    darker: '#F74C4D',
    darkest: '#EF4445',
  },
  blackGreen: {
    base: '#1A2E35',
    lighter: '#22363D',
  },
  white: {
    base: '#FFFFFF',
    darker: '#F7F7F7',
    darkest: '#EFEFEF',
  },
}

// Base Spacing Size:
const baseSize = '4';

// Semantic Color Names:
export const colors = {
  light: {
    primary: colorNames.redPink.base,
    primaryHover: colorNames.redPink.darker,
    primaryActive: colorNames.redPink.darkest,
    onPrimary: colorNames.white.base,
    body: colorNames.blackGreen.base,
    headers: colorNames.blackGreen.lighter,
    background: colorNames.white.base,
    backgroundHover: colorNames.white.darker,
    backgroundActive: colorNames.white.darkest,
    boxBorder: colorNames.white.darkest,
  },
  dark: {
    primary: colorNames.redPink.base,
    primaryHover: colorNames.redPink.darker,
    primaryActive: colorNames.redPink.darkest,
    onPrimary: colorNames.white.base,
    body: colorNames.white.base,
    headers: colorNames.white.base,
    background: colorNames.blackGreen.base,
    backgroundHover: colorNames.blackGreen.lighter,
    backgroundActive: colorNames.blackGreen.lighter, // currently the same as hover
    boxBorder: colorNames.blackGreen.base,
  },
};

export const text = {
  headline: {
    fontSize: '2rem',
  },
  body: {
    fontSize: '1.25rem',
  },
  info: {
    fontSize: '0.875rem',
  },
  weight: {
    'regular': '400',
    'bold': '700',
  }
};

// TODO: Consider using rem for sizing vs. px
export const spacing = {
  // 8 sizes, 4px – 256px
  size1: `${baseSize}px`,
  size2: `${baseSize * 2}px`,
  size3: `${baseSize * 4}px`,
  size4: `${baseSize * 8}px`, // 32px
  size5: `${baseSize * 16}px`,
  size6: `${baseSize * 32}px`,
  size7: `${baseSize * 64}px`,
  size8: `${baseSize * 128}px`,
};