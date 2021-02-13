import React, { useState,useContext,Fragment } from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import Error from './Error' ;
import {Link} from 'react-router-dom'


const Persona = () => {

    
    const proyectosContext = useContext(proyectoContext) ;
    const {error, guardarError,agregarUsuario,usuarios}=  proyectosContext 

    const [usuario, guardarUsuario] = useState({
        nombre:'',
        apellido:'',
        alias:'',
        email:''
        
    })
    
    

    const {nombre, apellido, alias, email} = usuario ;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    

    const onSubmit = e =>{
        e.preventDefault()

        //Validar
        
        if(nombre.trim()== ''|| apellido.trim()== '' || alias.trim()== '' || email.trim() == ''){
            return guardarError(true)
            
        } 

        guardarError(false)

        //Guardo el usuario en el State
        agregarUsuario(usuario)
        
        

      /*   //Reinicio el formulario
        guardarUsuario({nombre:'',
        apellido:'',
        alias:'',
        email:''     */
        console.log(usuarios)
    
    
    }
    return ( 
        <Fragment>
            
            <form onSubmit={onSubmit}>
                <div className='form-usuario'>
                    <div className='contenedor-form '>
                        <div className='campo-form'>
                            {error ? <Error mensaje='Es necesario completar todos los campos'/> :null }
                            <label htmlFor="nombre"> Ingresar nombre del nuevo usuario</label>
                            <input 
                                type="text"
                                placeholder='Ingresar Nombre'
                                id='nombre'    
                                value={nombre}
                                name='nombre'
                                onChange={onChange}
                            />
                            
                        </div>

                        <div className='campo-form'> 
                            <label htmlFor="apellido"> Ingresar Apellido del nuevo usuario</label>
                            <input 
                                type="text"
                                placeholder='Ingresar Apellido'
                                id='apellido'   
                                name='apellido' 
                                value={apellido}
                                onChange={onChange}
                            />
                            
                        </div>

                        <div className='campo-form'>
                            <label htmlFor="alias"> Ingresar alias del nuevo usuario</label>
                            <input 
                                type="text"
                                placeholder='Ingresar Alias'
                                id='alias'
                                name='alias'
                                value={alias}  
                                onChange={onChange}  
                            />
                            
                        </div>

                        <div className='campo-form'>
                            <label htmlFor="email"> Ingresar email del nuevo usuario</label>
                            <input 
                                type='email'
                                placeholder='Ingresar Email'
                                id='email' 
                                name='email'
                                value={email} 
                                onChange={onChange}  
                            />
                            
                        <button type='submit'>
                            Enviar Información
                        </button>
                        </div>
                    </div>
                </div>
            </form>

            <Link to={'/genero'} className='link-genero'>Cargar un Nuevo Genero </Link>
            <Link to={'/libros'} className='link-libros'>Cargar un Nuevo Libro</Link>
            
        </Fragment>
    );
}

export default Persona;