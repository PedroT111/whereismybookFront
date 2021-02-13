import React,{useContext,Fragment, useState} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;

const MostrarCategoria = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,buscarCategorias,categoria}=  proyectosContext 

    //State local
    const [cambiarCategoria, guardarCambiarCategoria] = useState(false) ;
    const [nuevoNombreCategoria, guardarNuevoNombreCategoria] = useState({nombre:''})

    const {nombre} =nuevoNombreCategoria;


    const editarCategoria = () =>{
        guardarCambiarCategoria(true)
        
    }


    const eliminarCategoria= () =>{

    }

    const cambiarNombreCategoria = e =>{
        guardarNuevoNombreCategoria(e.target.value)
    }

    


    return ( 
        <Fragment>
        <h1>asd</h1>
        <tr>
            {buscarCategorias.map(categorias => (
                <tr> 
                    <td>{categorias.nombre}</td> 
                    <td>{categorias.id}</td> 
                    <td>
                        <input
                            type='submit'
                            value='Editar nombre'
                            onClick={editarCategoria}
                            id={categorias.id}
                            
                        />
                        <button
                            type='submit'
                            onClick={eliminarCategoria}
                        >Eliminar</button>
                    </td>
                    
                    
            </tr>

                
            ))} 
        
                
        </tr>
    </Fragment>
    );
}

export default MostrarCategoria;
