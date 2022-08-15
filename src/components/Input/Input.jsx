import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/ContextoFormulario";
import PropTypes from "prop-types"

const Input = ({ name, label, type = "text", reducerType =  "ACTUALIZAR_POKEMON", isfocus = false }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  //const {handleData} = useContext(Context)
  const {handleData} = useContext(Context)
  const ref = useRef(null)

  // También, utilizaremos un estado local para manejar el estado del input.
  const [dataInput, setDataInput] = useState("")  
  
  /**
   * Esta funcion toma los datos obtenidos del input y los guarda en el estado local del input
   * @param {Event} e    *  
   */
  const onChange = (e) => {
    setDataInput(e.target.value)
  };

  /**
   * Esta funcion guarda los datos del evento del input 
   * A partir del reducerType enviado como prop, 
   * la funcion interna handleData guarda los datos del input en el estado global 
   * @param {Event} e 
   */
  const onBlur = (e) => {
    e.preventDefault();
    handleData(      
      reducerType,
      {
        val : dataInput,
        key: name
      }                 
    )
  }

  useEffect(()=>{
    if(isfocus){
     return ref.current.focus()
    }    
  },[isfocus])


  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={dataInput}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

Input.propTypes = {
  name : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  reducerType: PropTypes.string,
  isfocus: PropTypes.bool
}

export default Input;
