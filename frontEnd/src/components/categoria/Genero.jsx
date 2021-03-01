import React, { useState,useContext, Fragment,useEffect } from "react";
import proyectoContext from '../../useContext/proyectoContext';
import Error from '../Error' ;
import MostrarCategoria from './MostrarCategoria' ;
import axios from 'axios'
import Spinner from './Spinner'



const Genero = () => {
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,guardarEnviarCategoria,enviarCategoria,cargando,guardarCargando,guardarErrorCategoriaRepetida,errorCategoriaRepetida}=  proyectosContext 
    //State Local
    const [categorias, verCategorias] = useState(false) ;
    const [categoria, guardarCategoria] = useState('') ;
    const [opcion, guardarOpcion] = useState(true)
    
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
        postLibro()
        guardarEnviarCategoria(true)
        }
        

        //Envia la información a la base de datos
        const postLibro =() =>{
            const consultarApi =async () =>{
                const url = 'http://localhost:3001/categoria';
                await axios.post(url,{
                    nombre:categoria
                })
                .then (respuesta =>{
                    console.log(respuesta)
                    guardarEnviarCategoria(false)
                    
                    
                })
                .catch(error => {
                    console.log(error)
                    guardarEnviarCategoria(false)
                    guardarErrorCategoriaRepetida(true)
                    
                })
            }
            consultarApi() 
        }
        
        

    const onClickGuardarOpcion =() =>{
        if(opcion){
            guardarCargando(true)
        setTimeout(() => {
            verCategorias(true)
            guardarCargando(false)
            guardarOpcion(false)
        }, 3000);
        }else{
        guardarOpcion(true)
        verCategorias(false)}
    }

    return ( 
        <Fragment>
            <header className='mt-5'>
                <h1>Where is my book ?</h1>
            </header>
            
            <div class="form-usuario"> 
            <div className='contenedor-form'>
                        <form onSubmit={onSubmit} className='row g-3  '>
                        {error ? <Error mensaje='No se envio el nombre de la nueva categoria.'/>   :null}
                        {errorCategoriaRepetida ?<Error mensaje={'El nombre de la categoria ingresada ya existe'}/>  :null}
                            <label htmlFor="categoria" className='form-label'> Ingresar nombre de la nueva Categoria</label>
                            <input 
                                type="text"
                                placeholder='Ingresar Categoria'
                                id='categoria'   
                                name='nombreCategoria' 
                                value={categoria}
                                onChange={onChange}
                                className='form-control'
                                
                            />
                            
                        <button 
                            type='submit'
                            className='btn   btn-info'    
                        >
                            Enviar Información
                        </button>

                        
                        {opcion 
                        ? 
                            <button 
                                onClick={onClickGuardarOpcion}
                                type='button'
                                className='btn  btn-success '
                            >
                                Buscar todas las categorias.
                            </button>
                        :
                            <button 
                                onClick={onClickGuardarOpcion}
                                type='button'
                                className='btn  btn-danger '
                            >
                                Dejar de mostrar las categorias.
                            </button>
                        }

                        {cargando ?  <Spinner />  : null}
                        {categorias ? <MostrarCategoria />  :null}  

                        </form> 
                        
                </div> 
            </div>
        </Fragment>      
    );
    
}

export default Genero ;