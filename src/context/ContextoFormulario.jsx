// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react"
import PropTypes from "prop-types"

export const Context = createContext()

/**
 * Provider que retorna el estado global y la funcion de actualizacion 
 * para ser usado dentro de sus componentes hijos
 * @param {JSX.Element} children 
 * @returns {JSX.Element}
 */
const ContextProvider = ({children})=>{

    const initialState = {
        userData: {
            nombre: "",
            apellido: "",
            email: ""
        },
        pokemonData: {
            nombrePokemon: "",
            tipoPokemon: "",
            elementoPokemon: "",
            alturaPokemon: "",
            edadPokemon: ""
        }    
    }

    /**
     * funcion reductora para actualizar el estado del formulario
     * @param {initialState} state 
     * @param {{
     *      type: string
     *      payload:{
     *          [string] : string
     *      }
     * }} action 
     * @returns state
     */
    
    const reducer = (state, action)=>{  
        switch(action.type){
            case "ACTUALIZAR_ENTRENADOR" :
                return{
                    ...state,
                    userData:{
                        ...state.userData,
                        ...action.payload
                    }
                }
            case "ACTUALIZAR_POKEMON" :
                return{
                    ...state,
                    pokemonData:{
                        ...state.pokemonData,
                        ...action.payload
                    }                   
                }

            default :  
                return initialState
        }
    }

    const [form, dispatch] = useReducer(reducer, initialState)   

    
    /**
     * Esta funcion recibe como primer parametro el action.type del reducer, 
     * como segundo parametro la clave y valor de los datos de input del formulario 
     * para guardarlos en el contexto global
     * @param {string} type 
     * @param {{
     *      [string] : string
     * }} valueInput 
     */
    const handleData = (type,valueInput)=>{
        const {key, val} = valueInput || {}
        dispatch({
            type,
            payload: {
                [key] : val,
            }                       
        })
    }

    return(
        <Context.Provider value={{form, handleData}}>
            {children},
        
            
        </Context.Provider>
    )
}

Context.propTypes={
    children: PropTypes.element.isRequired
}

export default ContextProvider