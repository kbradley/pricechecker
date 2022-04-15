import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Provider from '../../../theme/Provider.jsx';

import { MoonIcon, SunIcon } from '../../atoms/Icons';

const StyledDiv = styled('div')({
  maxWidth: '264px',
  position: 'relative',

  label: {
    backgroundColor: (props) => props.theme.colors.background,
    display: 'inline-block',
    position: 'absolute',
    top: (props) => props.theme.spacing.size2,
    right: (props) => props.theme.spacing.size2,
    zIndex: '2',

    '> input[type="checkbox"]': {
      cursor: 'pointer',
      opacity: '.0',
      position: 'absolute',
      inset: '0',
      height: '100%',
      width: '100%',
    },
  },
});

function IconButton({
  children,
}) {
  const MODE = {
    LIGHT: 'light',
    DARK: 'dark',
  };
  const [mode, setMode] = React.useState('light');
  const handleModeChange = (e) => setMode(
    e.target.checked ? MODE.DARK : MODE.LIGHT
  );

  return (
    <Provider mode={mode}>
      <StyledDiv className="wrapper">
        <label ariaLabel="Toggle theme">
          {
            mode === MODE.DARK
            ? <span ariaLabel="Current mode = dark"><SunIcon /></span> 
            : <span ariaLabel="Current mode = light"><MoonIcon /></span>
          }
          <input 
            type="checkbox" 
            checked={mode === MODE.DARK} 
            onChange={handleModeChange}
          />
        </label>
        {children}
      </StyledDiv>
    </Provider>
  );
}

export default IconButton;