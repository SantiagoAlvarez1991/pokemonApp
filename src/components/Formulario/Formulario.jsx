import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { getTypes } from "./getTypes";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {

  const {data} = useQuery('getTypes', getTypes)
  console.log(data);

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" reducerType="ACTUALIZAR_ENTRENADOR" isfocus={true}/>
              <Input name="apellido" label="Apellido" reducerType="ACTUALIZAR_ENTRENADOR" />
              <Input name="email" label="Email" type="email" reducerType="ACTUALIZAR_ENTRENADOR" />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" />
              {/* <Input name="tipoPokemon" label="Tipo" isSingleInput={false} types={data?.results.name} typeKey={data?.results.id} typeName={data?.results.name}/> */}
              <Input name="tipoPokemon" label="Tipo" isSingleInput={false} types={data?.results}/>
              <Input name="elementoPokemon" label="Elemento"/>
              <Input name="alturaPokemon" label="Altura"/>
              <Input name="edadPokemon" label="Edad"/>
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
