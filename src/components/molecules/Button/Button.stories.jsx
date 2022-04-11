import React from 'react';
import Button from './Button';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=71%3A364';

export default {
  title: 'Molecules/Button',
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};