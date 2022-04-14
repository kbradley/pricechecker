import React from 'react';
import styled from 'styled-components';
import { Info } from '../../atoms/Text';

// This component is only for links styled like buttons currently, not actual html buttons
const StyledButton = styled('a')({
  border: '2px solid',
  borderColor: (props) => props.theme.colors.primary,
  cursor: 'pointer',
  fontWeight: (props) => props.theme.text.weight.bold,
  textDecoration: 'none',
  lineHeight: '1',
  display: 'inline-block',
  paddingTop: (props) => props.theme.spacing.size2,
  paddingBottom: (props) => props.theme.spacing.size2,
  paddingLeft: (props) => props.theme.spacing.size3,
  paddingRight: (props) => props.theme.spacing.size3,
  // TODO: Figure out how to get multiple variables in one style definition working
  // padding: ((props) => {props.theme.spacing.size2}) ((props) => {props.theme.spacing.size3}),

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