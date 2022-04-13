import React from 'react';
import Button from './Button';
import Provider from '../../../theme/Provider.jsx';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=71%3A364';

export default {
  title: 'Molecules/Button',
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello',
  variant: 'primary',
  href: 'https://metamask.io/',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hello',
  variant: 'secondary',
  href: 'https://metamask.io/',
};