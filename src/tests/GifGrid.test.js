import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
// 1. The jest.mock function allows me to pretend I have real information from my custom hook
jest.mock('../hooks/useFetchGifs');

describe('Testing on GifGrid component', () => {
  
  const category = 'ASUS';
  test('Should generate snapshot of GifGrid component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: false
    });
    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('Should be displayed the gif items when the images is loading', () => {
    // 2. Here, i created the data for using in my custom hook
    const gifs = [{
      id: 'ABC01',
      title: 'Test img 01',
      url: 'https://test/url/ABC01'
    },
    {
      id: 'ABC02',
      title: 'Test img 02',
      url: 'https://test/url/ABC02'
    }];

    // 3. With the mockReturnValue i can update the informacion
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });
  
});
