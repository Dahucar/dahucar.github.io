import React from 'react';
import { shallow } from 'enzyme';
import GitExpertApp from '../components/GifExpertApp';

describe('Testing on GitExpertApp Component', () => {
  
  test('Should generate snapshot of GitExpertApp component', () => {
    const wrapper = shallow( <GitExpertApp /> );  
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('Should be displeyed a list categories', () => {
    const categories = ['Halo', 'GOD', 'Nedd For Speed'];
    const wrapper = shallow( <GitExpertApp defaultCategories={ categories } /> );  
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
  });
});
