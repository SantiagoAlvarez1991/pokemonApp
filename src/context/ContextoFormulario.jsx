// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer } from "react"

export const Context = createContext()


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

export default ContextProvider