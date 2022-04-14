import React from 'react';
import styled from 'styled-components';
import Provider from '../../../theme/Provider.jsx';

import Box from '../../molecules/Box';
import Button from '../../molecules/Button';
import IconButton from '../../molecules/IconButton';
import { Headline, Body, Info } from '../../atoms/Text';

// TODO: 
// * Implement custom styling options for Box instead
// * Implement better spacing system
const Wrapper = styled('div')({
  maxWidth: '264px',

  '.toggle-button': {
    position: 'absolute',
    top: (props) => props.theme.spacing.size2,
    right: (props) => props.theme.spacing.size2,
  },

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

const Mode = {
  Light: 'light',
  Dark: 'dark',
};

function PriceChecker() {
  const [mode, setMode] = React.useState('light');
  const handleModeChange = (e) => setMode(
    e.target.checked ? Mode.Dark : Mode.Light
  );

  return (
    <Provider mode={mode}>
      <Wrapper>
        <Box>
          <IconButton 
            className="toggle-button"
            checked={mode === Mode.Dark} 
            onChange={handleModeChange}
          />

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
    </Provider>
  );
}

export default PriceChecker;