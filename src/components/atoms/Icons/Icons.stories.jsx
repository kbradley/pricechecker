import React from 'react';
import { MoonIcon, SunIcon } from '../../atoms/Icons';
import Provider from '../../../theme/Provider.jsx';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=69%3A81';

const IconExamples = () => {
  return (
    <>
      <MoonIcon />
      <SunIcon />
    </>
  );
};

export default {
  title: 'Atoms/Icons',
  component: Text,
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

const Template = (args) => <IconExamples />;
export const Basic = Template.bind({})