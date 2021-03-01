import React,{useEffect,useContext,useState,Fragment} from 'react' ;
import proyectoContext from '../../useContext/proyectoContext' ;
import axios from 'axios' ;
import Error from '../Error'

const CargaComponente  = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {buscarCategorias,guardarCategoriaID,categoriaID,mostrarLibros,guardarMostrarLibros,guardarEnviarCategoria,errorDeleteCategoria,guardarErrorDeleteCategoria,guardarErrorCategoriaRepetida,errorCategoriaRepetida}=  proyectosContext 

    //State Local
    const [mostrarLibrosLista, guardarMostrarLibrosLista] = useState([{}]) ;

    //Funcion que permite eliminar la categoria
    const funcionEliminarCategoria = (categoriaID) =>{
        
        const eliminarCategoria = () => {
            const url =`http://localhost:3000/categoria/${categoriaID}` ;
            axios.delete(url)
        
        .then (respuesta => {
            guardarEnviarCategoria(true)
            guardarEnviarCategoria(false)
        })
        .catch(error => {
            
            guardarErrorDeleteCategoria(true)
            
        })
    }
    eliminarCategoria()
          
    } 

    //Función que muestra los libros de esa categoria
    const funcionMostrarLibro = (categoriaSolicitada) => {
        
        guardarCategoriaID(categoriaSolicitada)  
        MostrarLibrosCategoria()
        guardarMostrarLibros(false)
}

    //Funcion que trae todos los libros
    const MostrarLibrosCategoria = () =>{
                
        axios.get(`http://localhost:3000/libro`) 
        .then(respuesta => {
            
            guardarMostrarLibrosLista(respuesta.data.respuesta)
        })
        .catch(error => {
            console.log(error)
            
        })
    }
    

    const lista = mostrarLibrosLista.map(libros =>{
    return({nombre:libros.nombre, id:libros.id, categoriaID:libros.categoriaID})
    });
    
    const result =lista.filter(libros  => libros.categoriaID ===categoriaID)

    


    return (

    <Fragment>
        <table className='row g-3 table table-hover'>
            { mostrarLibros
            ?   
            <Fragment>
            <thead >
            <tr>
                <th className='mb-4 ' ><h3>Nombre De Las Categorias</h3></th>
            </tr>
        </thead>
        <tbody>
        {buscarCategorias.map(categorias => (
                
        <tr key={categorias.id}> 
            <td>{categorias.nombre}</td> 
            
            <td>
                <button
                    className='btn  btn-danger'
                    type='button'
                    onClick={ e =>funcionEliminarCategoria (categorias.id)}
                >Eliminar</button>
                {errorDeleteCategoria ? <Error mensaje={'Hay libros existentes con esa categoria'} />: null}
            </td>
            <td>
                <button
                    className='btn btn-block btn-info'
                    type='button'
                    onClick={ e => funcionMostrarLibro ( categorias.id)}
                >Mostrar libros de esa categoria</button>
                
            </td>
            </tr>
            ))}
            </tbody>
            </Fragment>
            :
            <Fragment>
                <table className='table table-dark table-striped mt-3'>
                    <thead>
                        <tr>Libros de la categoria Seleccionada </tr>
                    </thead>
                <tbody>
                <div className="column">
                    
                            {result[0] ? result.map( libros =>{
                                    return (
                                        <tr>
                                            <td>{libros.nombre}</td>
                                        </tr>
                                    )
                                })  

                                : 
                                    <tr>
                                        <td>No hay libros con esa categoria</td>
                                    </tr>
                            }
                    
                </div>
                </tbody>
                </table>
        
                <button 
                    type='button'
                    className='btn btn-block btn-info mt-4'
                    onClick={() => (guardarMostrarLibros(true))}
                >Volver </button>
            </Fragment>}   
            
        </table>
    </Fragment> )
}
export default CargaComponente ;