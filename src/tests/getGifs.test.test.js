const { getGifs } = require("../helpers/getGifs");

describe('Testing on helper getGifs', () => {
  
  test('The response should be content a ten items', async () => {
    const gifsList = await getGifs('Black Pink');
    expect( gifsList.length ).toBe( 10 ); 
  });  

  test('The response should be zero elements items if category is empty', async () => {
    const gifsList = await getGifs('');
    expect( gifsList.length ).toBe( 0 ); 
  });

});
