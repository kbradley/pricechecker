import React from 'react';
import styled from 'styled-components';

import Box from '../../molecules/Box';
import Button from '../../molecules/Button';
import IconButton from '../../molecules/IconButton';
import { Headline, Body, Info } from '../../atoms/Text';

// TODO: 
// * Implement custom styling options for Box instead
// * Implement better spacing system
const Wrapper = styled('div')({
  '.headline': {
    marginTop: (props) => props.theme.spacing.size2,
  },

  '.button-wrapper': {
    marginTop: (props) => props.theme.spacing.size3,
    display: 'flex',
    gap: (props) => props.theme.spacing.size2,

    '> *': {
      flexBasis: '0',
      flexGrow: '1',
      flexShrink: '1',
    }
  },
});

function PriceChecker() {
  return (
    <IconButton>
      <Wrapper>
        <Box>
          <p>
            <Body>
              Ethereum Price 
              {' '}
              <small>
                <Info>(ETH)</Info>
              </small>
            </Body>
          </p>
          <p className="headline">
            <Headline>
              $3,443.05
            </Headline>
          </p>
          <p className="button-wrapper">
            <Button>
              See ETH
            </Button>
            {' '}
            <Button variant="secondary">
              See more
            </Button>
          </p>
        </Box>
      </Wrapper>
    </IconButton>
  );
}

export default PriceChecker;