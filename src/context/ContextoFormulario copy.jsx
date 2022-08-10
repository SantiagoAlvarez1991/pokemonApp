// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useState, useReducer } from "react"

export const Context = createContext()


const ContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const reducer = (state, action)=>{
        switch(action.type){
            case "ACTUALIZAR_ENTRENADOR" :
                return{
                    ...state,
                }

        }
    }

    const initialState = {
        userData: {
            nombre : "",
            apellido : "",
            email: ""
        },
        pokemonData: {

        }
    }

    // const [data, setData] = useState({
    //     nombre : "",
    //     apellido : "",
    //     email : "",
    //     nombrePokemon: ""
    // })



    // const handleData = (value)=>{
    //     const {key, val} = value
    //     setData({
    //         ...data,
    //         [key] : val,            
    //     })
    // }

    return(
        <Context.Provider value={{data, handleData}}>
            {children},
        
            
        </Context.Provider>
    )
}

export default ContextProvider