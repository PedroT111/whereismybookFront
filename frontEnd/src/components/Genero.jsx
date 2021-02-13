import React, { useState,useContext, Fragment,useEffect } from "react";
import proyectoContext from '../useContext/proyectoContext' ;
import Error from './Error' ;
import {Link} from 'react-router-dom' ;
import MostrarCategoria from './MostrarCategoria' ;
import axios from 'axios'


const Genero = (props) => {
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,guardarEnviarCategoria,enviarCategoria}=  proyectosContext 
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
        verCategorias(true)
    }

    //Boton de No mostrar categorias
    const noMostrarCategoria= () =>{
        verCategorias(false)
    }

    return ( 
        <Fragment>
            
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
                            />
                        </div>

                        <button type='submit'>
                            Enviar Información
                        </button>

                        </form>

                        <button 
                            onClick={noMostrarCategoria}
                            type='button'
                        >
                            Dejas de mostrar las categorias.
                        </button>

                        <button 
                            onClick={mostrarCategoria}
                            type='submit'
                        >
                            Buscar todas las categorias.
                        </button>
                        {categorias ? <MostrarCategoria />  :null}
                    </div>
                </div>
            
            
    </Fragment>



        
    );
    
}

export default Genero ;