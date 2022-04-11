import React from 'react';
import styled from 'styled-components';

const StyledBox = styled('div')({
  backgroundColor: (props) => props.theme.colors.background,
  border: '1px solid',
  borderColor: (props) => props.theme.colors.boxBorder,
  color: (props) => props.theme.colors.body,
  padding: (props) => props.theme.spacing.size4,
  position: 'relative',
});

function Box({children}) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}

export default Box;