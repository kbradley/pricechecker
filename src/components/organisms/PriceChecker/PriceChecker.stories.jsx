import React from 'react';
import PriceChecker from './PriceChecker';
import Provider from '../../../theme/Provider.jsx';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=16%3A47';

export default {
  title: 'Organisms/PriceChecker',
  component: PriceChecker,
  decorators: [
    (Story) => (<Provider><Story /></Provider>)
  ],
  parameters: {
    controls: {hideNoControlsWarning: true},
    design: [
      {
        type: 'figma',
        url: designUrl,
        allowFullScreen: true,
      },
      {
        type: 'link',
        url: designUrl,
      },
    ],
  },
};

const Template = (args) => <PriceChecker {...args} />;

export const Default = Template.bind({});
Default.args = {};