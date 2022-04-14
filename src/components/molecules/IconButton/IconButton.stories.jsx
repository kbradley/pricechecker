import React from 'react';
import IconButton from './IconButton';
import Provider from '../../../theme/Provider.jsx';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=71%3A364';

export default {
  title: 'Molecules/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (<Provider><Story /></Provider>)
  ],
  parameters: {
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

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};