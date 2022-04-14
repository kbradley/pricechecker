import React from 'react';
import renderer from 'react-test-renderer';
import Pricechecker from './Pricechecker';

describe('Pricechecker', () => {
  it('renders the component correctly', () => {
    const tree = renderer.create(<Pricechecker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
