import React, { useContext } from "react";

import { Context } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  const {form} = useContext(Context)

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {form.userData.nombre}</p>
          <p>Apellido: {form.userData.apellido}</p>
          <p>Email: {form.userData.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {form.pokemonData.nombrePokemon}</p>
          <p>Tipo: {form.pokemonData.tipoPokemon}</p>
          <p>Elemento: {form.pokemonData.elementoPokemon}</p>
          <p>Altura: {form.pokemonData.alturaPokemon}</p>
          <p>Edad: {form.pokemonData.edadPokemon}</p>         
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
