import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text", reducerType =  "ACTUALIZAR_POKEMON", isfocus = false }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  //const {handleData} = useContext(Context)
  const {handleData} = useContext(Context)
  const ref = useRef(null)

  // También, utilizaremos un estado local para manejar el estado del input.

  const [dataInput, setDataInput] = useState("")  
  
  const onChange = (e) => {
    setDataInput(e.target.value)
  };

 
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

export default Input;
