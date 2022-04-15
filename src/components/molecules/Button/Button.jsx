import React from 'react';
import styled from 'styled-components';
import { Info } from '../../atoms/Text';

// This component is only for links styled like buttons currently, not actual html buttons
const StyledButton = styled('a')({
  border: '2px solid',
  borderColor: (props) => props.theme.colors.primary,
  cursor: 'pointer',
  fontWeight: (props) => props.theme.text.weight.bold,
  textAlign: 'center',
  textDecoration: 'none',
  lineHeight: '1.4',
  display: 'inline-block',
  padding: (props) => props.theme.spacing.size2,
  minWidth: '96px',

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
      <Info>
        {children}
      </Info>
    </StyledButton>
  );
}

export default Button;