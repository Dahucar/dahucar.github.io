import React from 'react'
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Testing on AddCategory Component', () => {
  // with jest.fn function, we will know if have change in the state
  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });
  
  test('the AddCategory component should be show with not problem', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should be changue the input value', () => {
    //Search the input on the html content
    const input = wrapper.find('input');
    const inputValue = 'I´m a message for testing input change event';
    
    //simulate a input change event 
    input.simulate('change', {target: { value: inputValue }});
    expect( wrapper.find('span').text().trim() ).toBe( inputValue );
  });
  
  test('Information should not be displayed in the console', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('Should be call setCategories function and after clear the input value', () => {
    // Activities:
    //  -> simulate the input change event
    const inputForm = wrapper.find('input');
    inputForm.simulate('change', {target: { value: 'I´m a test value' }});
    //  -> simulate the submit event
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    //  -> call the setCategories function
    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
    //  -> the input value should be empty
    expect( inputForm.prop('value') ).toBe( '' );
  });
  
});
