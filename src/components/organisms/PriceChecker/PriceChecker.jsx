import React from 'react';
import styled from 'styled-components';
import Provider from '../../../theme/Provider.jsx';

import Box from '../../molecules/Box';
import Button from '../../molecules/Button';
import IconButton from '../../molecules/IconButton';
import { Headline, Body, Info } from '../../atoms/Text';

const StyledBox = styled(Box)({
  maxWidth: '300px',
  outline: '5px solid lime',
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
      <StyledBox>
        <IconButton 
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
        <p>
          <Headline>
            $3,443.05
          </Headline>
        </p>
        <p>
          <Button>
            See ETH
          </Button>
          {' '}
          <Button variant="secondary">
            See more
          </Button>
        </p>
      </StyledBox>
    </Provider>
  );
}

export default PriceChecker;