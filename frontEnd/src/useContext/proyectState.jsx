import React,{useState,useEffect} from 'react';
import axios from "axios";

import proyectoContext from './proyectoContext'

const ProyectoState =   props =>{

    const [error, guardarError] = useState(false) ;
    const [mensajeError, guardarMensajeError] = useState('') ;
    const [errorLibro, guardarErrorLibro] = useState(false) ;
    const [pedidoExitoso, guardarPedidoExitoso] = useState(false) ;
    const [errorDescripcion, guardarErrorDescripcion] = useState(false) ;
    const [errorDeleteCategoria, guardarErrorDeleteCategoria] = useState(false)
    const [errorCategoriaRepetida, guardarErrorCategoriaRepetida] = useState(false)
    const [errorDeleteLibro, guardarErrorDeleteLibro] = useState(false)
    
    
    //Categoria
    const [buscarCategorias, stateBuscarCategorias] = useState([{}]);
    //State Local para activar el useEfect que envia por post a la BD
    const [enviarCategoria, guardarEnviarCategoria] = useState(false)
    //
    const [mostrarLibros, guardarMostrarLibros] = useState(true)   

    //Guardar el id de la categoria que se quiere eliminar o ver sus libros
    const [categoriaID, guardarCategoriaID] = useState() 
    
    
    

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
    }, [enviarCategoria]);
    
        
    //Spinner
    const[cargando , guardarCargando] = useState (false) ;
    
    //STATE DEL SECTOR LIBRO
    const [mostrarTodosLibros, guardarMostrarTodosLibros] = useState(false)
    const [nuevaDescripcion, guardarNuevaDescripcion] = useState(false) ;
    const [descripcionLibro, guardarDescripcionLibro] = useState('')
    const [idLibroPut, guardarIdLibroPut] = useState(0) ;


    return(
        <proyectoContext.Provider 
            value={{
                error,
                buscarCategorias,
                enviarCategoria ,
                mostrarLibros,
                categoriaID,
                cargando,
                mostrarTodosLibros,
                nuevaDescripcion,
                descripcionLibro,
                idLibroPut,
                errorDescripcion,
                mensajeError,
                pedidoExitoso,
                pedidoExitoso,
                errorLibro,
                errorCategoriaRepetida,
                errorDeleteCategoria,
                errorDeleteLibro,
                guardarError,
                guardarEnviarCategoria,
                guardarMostrarLibros,
                guardarCategoriaID,
                guardarErrorDescripcion,
                guardarErrorLibro,
                guardarCargando,
                guardarPedidoExitoso,
                guardarMostrarTodosLibros,
                guardarMensajeError,
                guardarNuevaDescripcion,
                guardarDescripcionLibro,
                guardarIdLibroPut,
                 guardarErrorDeleteCategoria,
                guardarErrorCategoriaRepetida,
                guardarErrorDeleteLibro
                }}
        >

            {props.children}

        </proyectoContext.Provider>
    )
}


export default ProyectoState ;