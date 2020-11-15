import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Testing on GifGridItem Component', () => {

  const url = 'https://test/url';
  const title = 'test title';
  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );    

  test('Should generate snapshot of GifGridItem Component', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Title and url properties should be assigned', () => {
    const image = wrapper.find( 'img' );
    expect( image.prop('src') ).toBe( url );
    expect( image.prop('alt') ).toBe( title );
  });

  test('The css class name should be assigned on the content div with the animate__fadeOut properti', () => {
    const classNameDiv = wrapper.find( 'div' ).prop('className'); 
    expect( classNameDiv.includes( 'animate__fadeOut' ) ).toBe( true );
  });
  
  
});
