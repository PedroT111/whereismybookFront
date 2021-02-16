import React,{useState} from 'react'

import proyectoContext from './proyectoContext'

const ProyectoState =   props =>{

    const [error, guardarError] = useState(false)
    const [personas, guardarPersonas] = useState([{
        nombre:'',
        apellido:'',
        alias:'',
        email:''
    }])

    
    const agregarUsuario = usuario => (
        guardarPersonas( [{ ...personas,
            usuario}])
    
    )
   
    
        
    
    


    return(
        <proyectoContext.Provider 
            value={{
                error,
                guardarError,
                agregarUsuario,
                personas
            }}
        >

            {props.children}

        </proyectoContext.Provider>
    )
}


export default ProyectoState ;