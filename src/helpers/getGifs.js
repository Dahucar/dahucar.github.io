// esta logica sera llamada cada vez que se renderize el componente
export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=7SM7LI6h68pVODcz8pBQ5PvENBhhRHoX`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  const gifsImgs = data.map(( img ) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
  console.log( gifsImgs );

  //pasando el arreglo de images obtenido al estado
  return gifsImgs;
}