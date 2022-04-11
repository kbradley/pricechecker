import React from 'react';
import styled from 'styled-components';

const StyledBox = styled('div')({
  // TODO: add theme colors & spacing
  backgroundColor: '#fff',
  border: '1px solid',
  padding: '32px',
});

function Box({children}) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}

export default Box;