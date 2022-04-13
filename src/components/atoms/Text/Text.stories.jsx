import React from 'react';
import { Headline, Body, Info } from './Text';
import Provider from '../../../theme/Provider.jsx';

const designUrl = 'https://www.figma.com/file/zThLY7fbn2WvKEMlKGDYmy/MetaMask-Design-System-Engineer-Challenge?node-id=69%3A81';

const TextExamples = () => {
  return (
    <>
      <h2><Headline>Headline</Headline></h2>
      <p><Body>Body</Body></p>
      <p><Info>Info</Info></p>
    </>
  );
};

export default {
  title: 'Atoms/Text',
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

const Template = (args) => <TextExamples />;
export const Basic = Template.bind({})