import React,{useEffect,useContext,useState,Fragment} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;



const CargaComponente  = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,buscarCategorias,guardarMostrarLibros,guardarCategoriaID,categoriaID}=  proyectosContext 




    //State local
    const [eliminarCategoria, guardarEliminarCategoria] = useState(false) ;
    

    useEffect(() => {
        const eliminarCategoria = () => {
            const url =`http://localhost:3001/categoria/${categoriaID}` ;
            axios.delete(url)
        
        .then (respuesta => {
            
            guardarEliminarCategoria(false)
           
            
        })
        .catch(error => {
            console.log(error)
            
        })
    }
    eliminarCategoria()
    }, [eliminarCategoria]) 


    const funcionEliminarCategoria = (categoriaID) =>{
        
        guardarCategoriaID(categoriaID)
        guardarEliminarCategoria(true)  
    } 

    const funcionMostrarLibro = (categoriaID) => {
        guardarMostrarLibros(true)
        guardarCategoriaID(categoriaID)
    }


    return (

    <Fragment>
        
        {buscarCategorias.map(categorias => (
                
        <tr key={categorias.id}> 
            <td>{categorias.nombre}</td> 
            
            <td>
                <button
                    className='btn btn-block btn-primary'
                    type='submit'
                    onClick={ e =>funcionEliminarCategoria (categorias.id)}
                >Eliminar</button>
            </td>
            <td>
                <button
                    className='btn btn-block btn-info'
                    type='submit'
                    onClick={ e =>funcionMostrarLibro ( categorias.id)}
                >Mostrar libros de esa categoria</button>
            </td> 
            
        </tr>)
            )

        }
    </Fragment> )
}

export default CargaComponente ;