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
// TODO: Figure out how to handle border colors with designer
export const colors = {
  light: {
    primary: colorNames.redPink.base,
    body: colorNames.blackGreen.base,
    headers: colorNames.blackGreen.lighter,
    background: colorNames.white.base,
    boxBorder: colorNames.white.darkest,
  },
  dark: {
    primary: colorNames.redPink.base,
    body: colorNames.white.base,
    headers: colorNames.white.base,
    background: colorNames.blackGreen.base,
    boxBorder: colorNames.blackGreen.base,
  },
};

export const text = {
  headline: {
    fontSize: '2rem',
    regular: '400', // fontWeight
    bold: '700', // fontWeight
  },
  body: {
    fontSize: '1.25rem',
    regular: '400', // fontWeight
    bold: '700', // fontWeight
  },
  info: {
    fontSize: '0.875rem',
    regular: '400', // fontWeight
    bold: '700', // fontWeight
  },
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