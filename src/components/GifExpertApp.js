import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GitExpertApp = () => {
  // el listado de categorias se enviara por refencia a los compoenentes que se deseen
  const [categories, setCategories] = useState([ 'Halo' ]);
  return (
    <>
      <h2>Gif Expert App</h2>
      {/* aqui se estan enviado por referencia las categorias y le metodo para guardar una nueva */}
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map( category => <GifGrid key={ category } category={ category } />)
        }
      </ol>
    </>
  )
}

export default GitExpertApp;