import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';

describe('Box', () => {
  it('renders text passed in as children', () => {
    const wrapper = shallow(<Box>Child text</Box>);
    expect(wrapper.text()).toEqual('Child text');
  });

  it('renders nodes passed in as children', () => {
    const wrapper = shallow(<Box><p>Child Node</p></Box>);
    expect(wrapper.contains(<p>Child Node</p>)).toEqual(true);
  });
});