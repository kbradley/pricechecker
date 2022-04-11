import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {colors, text, spacing} from './theme';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box;}

  body {
    font-family: "Roboto", sans-serif;
  },
`;

function Provider({ children, mode = 'light' }){
  return (
    <>
      <ThemeProvider theme={{ colors: colors[mode], text, spacing }}>
        {children}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default Provider;