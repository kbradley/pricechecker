import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders text passed in as children', () => {
    const wrapper = shallow(<Button>Child text</Button>);
    expect(wrapper.text()).toEqual('Child text');
  });

  it('renders passed in href value', () => {
    const wrapper = shallow(<Button href="https://metamask.io/" />);
    expect(wrapper.prop('href')).toEqual('https://metamask.io/');
  });
});