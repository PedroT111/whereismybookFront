import React,{useState,useEffect} from 'react';
import axios from "axios";

import proyectoContext from './proyectoContext'

const ProyectoState =   props =>{

    const [error, guardarError] = useState(false)
    const [usuarios, guardarUsuario] =useState(
        [{}]
    )

    ///Persona
    const agregarUsuario = usuario => (
        guardarUsuario( [...usuarios,  usuario])
    )
    
    //Categoria
    const [buscarCategorias, stateBuscarCategorias] = useState([{}]);
    const [categorias, verCategorias] = useState(false)

    //Conexion con la base de datos para consultar por las categorias
    useEffect(() => {
        const consultarApi = () => {
            axios.get("http://localhost:3001/categoria")
            .then(respuesta => {
                
                stateBuscarCategorias(respuesta.data.respuesta)
            })
            .catch(error => {
                console.log(error)
            })
        }
        consultarApi(); 
    }, []);
    
        
    
    


    return(
        <proyectoContext.Provider 
            value={{
                error,
                guardarError,
                agregarUsuario,
                usuarios,
                buscarCategorias,
                stateBuscarCategorias,
                verCategorias,
                categorias
            }}
        >

            {props.children}

        </proyectoContext.Provider>
    )
}


export default ProyectoState ;