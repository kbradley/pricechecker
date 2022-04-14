import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { MoonIcon, SunIcon } from '../../atoms/Icons';

const StyledLabel = styled('label')({
  display: 'inline-block',
  position: 'relative',

  '> input': {
    opacity: '.0',
    position: 'absolute',
    inset: '0',
  },
});

function IconButton({
  checked,
  onChange,
}) {
  const [mode, setMode] = React.useState('light');
  const handleModeChange = (e) => setMode(
    e.target.checked ? Mode.Dark : Mode.Light
  );

  return (
    <StyledLabel ariaLabel="Toggle theme">
      {
        checked 
        ? <span ariaLabel="Current mode = light"><SunIcon /></span> 
        : <span ariaLabel="Current mode = dark"><MoonIcon  /></span>
      }
      <input 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
      />
    </StyledLabel>
  );
}

export default IconButton;