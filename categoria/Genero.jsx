import React, { useState,useContext, Fragment,useEffect } from "react";
import proyectoContext from '../../useContext/proyectoContext';
import Error from '../Error' ;
import {Link} from 'react-router-dom' ;
import MostrarCategoria from './MostrarCategoria' ;
import axios from 'axios'
import Spinner from './Spinner'


const Genero = (props) => {
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,guardarEnviarCategoria,enviarCategoria,cargando,guardarCargando}=  proyectosContext 
    //State Local
    const [categorias, verCategorias] = useState(false) ;
    const [categoria, guardarCategoria] = useState('') ;
    
    //Cuando el usuario ingresa el nombre de la categoria
    const onChange = e =>{
        guardarCategoria(e.target.value)
    }

    

    //Cuando el usuario hace SUBMIT
    const onSubmit = e =>{
        e.preventDefault()
        //Validación
        if(categoria.trim()===''){
            return guardarError(true)    
        }
        guardarError(false)

        guardarEnviarCategoria(true)
        
        
        }
        

        //Envia la información a la base de datos
        useEffect( () => {
            const consultarApi = () =>{
                const url = 'http://localhost:3001/categoria';
                axios.post(url,{
                    nombre:categoria
                    
                })
                .then (respuesta =>{
                    console.log(respuesta)
                    guardarEnviarCategoria(false)
                    
                    
                })
                .catch(error => {
                    console.log(error)
                    
                })
                
            }
            consultarApi() 
        }, [enviarCategoria])
        




    //Boton de mostrar categorias
    const mostrarCategoria =() =>{
        
        guardarCargando(true)
        setTimeout(() => {
            verCategorias(true)
            guardarCargando(false)
        }, 3000);
    }

    //Boton de No mostrar categorias
    const noMostrarCategoria= () =>{
        verCategorias(false)
        
    }

    return ( 
        <Fragment>
            <h1>Where is my book ?</h1>
            <div className='lead text-center'>
                <div className='form-usuario'>
                    <div className='contenedor-form '>
                        <form onSubmit={onSubmit}>
                        {error ? <Error mensaje='No se envio el nombre de la nueva categoria.'/>   :null}
                        <div className='campo-form'> 
                            <label htmlFor="categoria"> Ingresar nombre de la nueva Categoria</label>
                            <input 
                                type="text"
                                placeholder='Ingresar Categoria'
                                id='categoria'   
                                name='nombreCategoria' 
                                value={categoria}
                                onChange={onChange}
                                className='form-control'
                            />
                        </div>

                        <button 
                            type='submit'
                            className='btn btn-block btn-info'    
                        >
                            Enviar Información
                        </button>

                        </form>

                        <button 
                            onClick={noMostrarCategoria}
                            type='button'
                            className='btn btn-block btn-danger '
                        >
                            Dejar de mostrar las categorias.
                        </button>

                        <button 
                            onClick={mostrarCategoria}
                            type='button'
                            className='btn btn-block btn-success '
                        >
                            Buscar todas las categorias.
                        </button>
                        {cargando ?  <Spinner />  : null}
                        {categorias ? <MostrarCategoria />  :null}
                    </div>
                </div>
               </div>
                
    </Fragment>



        
    );
    
}

export default Genero ;