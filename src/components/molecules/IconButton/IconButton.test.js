import React from 'react';
import { shallow } from 'enzyme';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders nodes passed in as children', () => {
    const wrapper = shallow(<IconButton><p>Child Node</p></IconButton>);
    expect(wrapper.contains(<p>Child Node</p>)).toEqual(true);
  });

  it('has light mode enabled by default', () => {
    const wrapper = shallow(<IconButton />);
    expect(wrapper.find('span[ariaLabel="Current mode = light"]')).toHaveLength(1);
  });

  it('changes to dark mode when clicked', () => {
    const wrapper = shallow(<IconButton />);
    wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: true}})
    expect(wrapper.find('span[ariaLabel="Current mode = dark"]')).toHaveLength(1);
  });
});