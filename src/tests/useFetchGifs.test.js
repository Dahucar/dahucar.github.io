const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../hooks/useFetchGifs");

describe('Testing on useFetchGifs custom hook', () => {
  
  test('should be return the initial state', async () => {
    // const { data, loading } = useFetchGifs('Halo'); 

    // Created a virtual hook 
    const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('Halo') );
    const { data, loading } = result.current;
    
    await waitForNextUpdate();
    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );

  });

  test('should be return an array with images list', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Halo') );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    
    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );   
  });
  
});
