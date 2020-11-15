import React, { useState } from 'react';
import PropTypes from 'prop-types'

// el metodo enviado desde otro componente se recive en los props
const AddCategory = ({ setCategories }) => {
  const [ inputValue, setInputValue ] = useState('');
  const handleChangeInputValue = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSubmitForm = ( e ) => {
    console.log('handleSubmitForm', inputValue);
    e.preventDefault();
    // a qui se llama al metodo que se recive desde los props en el por referencia se tendra el listado de categorias.

    if (inputValue.trim().length >= 2) {
      setCategories( categ =>  [ inputValue, ...categ ] );
      setInputValue( '' );
    }

  } 

  return (
    <form onSubmit={ handleSubmitForm }>
      <input 
        type="text"
        value={ inputValue }
        placeholder="Ingrese un nombre"
        onChange={ handleChangeInputValue }
      />
      <span>{ inputValue }</span>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;