// Mi custom hook es esta funcion que será exportada
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// esta puede usar otros hooks sin problemas 
export const useFetchGifs = ( category ) => {

  const [customHookState, setCustomHookState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs( category ).then( img => {
      setCustomHookState({
        data: img,
        loading: false
      });
    });
  }, [ category ]);

  return customHookState; // es la informacion que se le pasa al 'useState'

}
