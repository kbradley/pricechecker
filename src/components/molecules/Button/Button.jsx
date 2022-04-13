import React from 'react';
import styled from 'styled-components';

// This component is only for links styled like buttons currently, not actual html buttons
const StyledButton = styled('a')({
  border: '2px solid',
  borderColor: (props) => props.theme.colors.primary,
  textDecoration: 'none',
  lineHeight: '1',
  display: 'inline-block',
  padding: '8px 16px', // TODO: Use Rem?

  '&.primary': {
    backgroundColor: (props) => props.theme.colors.primary,
    color: (props) => props.theme.colors.onPrimary,

    '&:hover': {
      backgroundColor: (props) => props.theme.colors.primaryHover,
      borderColor: (props) => props.theme.colors.primaryHover,
    },

    '&:active': {
      backgroundColor: (props) => props.theme.colors.primaryActive,
      borderColor: (props) => props.theme.colors.primaryActive,
    },
  },

  '&.secondary': {
    backgroundColor: (props) => props.theme.colors.background,
    color: (props) => props.theme.colors.primary,

    '&:hover': {
      backgroundColor: (props) => props.theme.colors.backgroundHover,
      borderColor: (props) => props.theme.colors.primaryHover,
    },

    '&:active': {
      backgroundColor: (props) => props.theme.colors.backgroundActive,
      borderColor: (props) => props.theme.colors.primaryActive,
    },
  },
});

function Button({
  children,
  href,
  variant = 'primary'
}) {
  return (
    <StyledButton 
      className={variant} 
      href={href}
    >
      {children}
    </StyledButton>
  );
}

export default Button;