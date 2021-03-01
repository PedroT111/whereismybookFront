import axios from 'axios';
import React,{useContext,Fragment,useState} from 'react'
import proyectoContext from '../../useContext/proyectoContext'
import Error from '../Error'
import Exitoso from '../Exitoso'


const NuevaDescripcion = () => {

     //useContext
     const proyectosContext = useContext(proyectoContext) ;
     const { guardarMostrarTodosLibros,guardarDescripcionLibro,guardarNuevaDescripcion,descripcionLibro,idLibroPut,guardarPedidoExitoso,pedidoExitoso,guardarErrorDescripcion,errorDescripcion} = proyectosContext
    

     //State Local
     


    const onClickNuevaDescripcion = e =>{
        e.preventDefault()
        if ( !descripcionLibro.trim() ){
            return guardarErrorDescripcion(true)
        }
        guardarErrorDescripcion(false)
        guardarNuevaDescripcion(false)
        
        //Funcion que EDITA la descripcion d el libro seleccionado
        const consultarAPI= async() =>{
            const url=`http://localhost:3000/libro/${idLibroPut}`
            await axios.put(url, {descripcion :descripcionLibro })
            .then( respuesta =>{

                
                guardarMostrarTodosLibros(true)
                /* guardarPedidoExitoso(true)  */
                console.log(pedidoExitoso)
                
            })
            .catch(error =>{
                console.log(error)
                guardarErrorDescripcion(true)
                
            })
        }
        consultarAPI()
        guardarDescripcionLibro('')
    }
    
    return ( 
        <Fragment>
                <label htmlFor="descripcion"><h5>Agregar Nueva Descripción</h5></label>
                    <input 
                        type="text"
                        placeholder='Nueva descripción'
                        id='descripcion'
                        onChange={e =>{guardarDescripcionLibro(e.target.value)}}
                    />
                    <button 
                        type='submit'
                        className='btn btn-bloc btn-success'
                        onClick={onClickNuevaDescripcion}>
                        Enviar nueva descripción
                    </button>
                    {errorDescripcion ? <Error mensaje={'No se envio la nueva descripción'}  />: null}
                     {pedidoExitoso ? <Exitoso mensaje={'Se cambia la categoria exitosamente'} /> : null }
        </Fragment> 
    );
}

export default NuevaDescripcion;