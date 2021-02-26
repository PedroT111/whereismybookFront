import React, { useState,useContext, Fragment,useEffect } from "react";
import proyectoContext from '../useContext/proyectoContext' ;
import Error from './Error' ;
import {Link} from 'react-router-dom' ;
import MostrarCategoria from './MostrarCategoria' ;
import axios from 'axios'


const Genero = () => {
    const proyectosContext = useContext(proyectoContext) ;
<<<<<<< Updated upstream:frontEnd/src/components/Genero.jsx
    const {error,guardarError,guardarEnviarCategoria,enviarCategoria}=  proyectosContext 
=======
    const {error,guardarError,guardarEnviarCategoria,enviarCategoria,cargando,guardarCargando,guardarErrorCategoriaRepetida,errorCategoriaRepetida}=  proyectosContext 
>>>>>>> Stashed changes:frontEnd/src/components/categoria/Genero.jsx
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
        
<<<<<<< Updated upstream:frontEnd/src/components/Genero.jsx




    //Boton de mostrar categorias
    const mostrarCategoria =() =>{
        verCategorias(true)
    }

    //Boton de No mostrar categorias
    const noMostrarCategoria= () =>{
        verCategorias(false)
=======
        

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
>>>>>>> Stashed changes:frontEnd/src/components/categoria/Genero.jsx
    }

    return ( 
        <Fragment>
<<<<<<< Updated upstream:frontEnd/src/components/Genero.jsx
            <div className='lead text-center'>
                <div className='form-usuario'>
                    <div className='contenedor-form '>
                        <form onSubmit={onSubmit}>
=======
            <header className='mt-5'>
                <h1>Where is my book ?</h1>
            </header>
            
            <div class="form-usuario"> 
            <div className='contenedor-form'>
                        <form onSubmit={onSubmit} className='row g-3  '>
>>>>>>> Stashed changes:frontEnd/src/components/categoria/Genero.jsx
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
<<<<<<< Updated upstream:frontEnd/src/components/Genero.jsx
=======
                                className='form-control'
                                
>>>>>>> Stashed changes:frontEnd/src/components/categoria/Genero.jsx
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

<<<<<<< Updated upstream:frontEnd/src/components/Genero.jsx
                        <button 
                            onClick={noMostrarCategoria}
                            type='button'
                            className='btn btn-block btn-primary '
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
                        
                        {categorias ? <MostrarCategoria />  :null}
                    </div>
                </div>
               </div>
                
    </Fragment>

=======
                        {cargando ?  <Spinner />  : null}
                        {categorias ? <MostrarCategoria />  :null}  
>>>>>>> Stashed changes:frontEnd/src/components/categoria/Genero.jsx

                        </form> 
                    </div> 
                    </div>
    </Fragment> 
    );
    
}

export default Genero ;