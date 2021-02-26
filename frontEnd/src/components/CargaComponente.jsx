import React,{useEffect,useContext,useState,Fragment} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;
<<<<<<< Updated upstream:frontEnd/src/components/CargaComponente.jsx


=======
import Error from '../Error'
>>>>>>> Stashed changes:frontEnd/src/components/categoria/CargaComponente.jsx

const CargaComponente  = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {buscarCategorias,guardarCategoriaID,categoriaID,mostrarLibros,guardarMostrarLibros,guardarEnviarCategoria,errorDeleteCategoria,guardarErrorDeleteCategoria,guardarErrorCategoriaRepetida,errorCategoriaRepetida}=  proyectosContext 

    //State Local
    const [mostrarLibrosLista, guardarMostrarLibrosLista] = useState([{}]) ;

    //Funcion que permite eliminar la categoria
    const funcionEliminarCategoria = (categoriaID) =>{
        
        const eliminarCategoria = () => {
            const url =`http://localhost:3001/categoria/${categoriaID}` ;
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
                
        axios.get(`http://localhost:3001/libro`) 
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

<<<<<<< Updated upstream:frontEnd/src/components/CargaComponente.jsx
    const funcionEliminarCategoria = (categoriaID) =>{
        
        guardarCategoriaID(categoriaID)
        guardarEliminarCategoria(true)  
    } 

    const funcionMostrarLibro = (categoriaID) => {
        guardarMostrarLibros(true)
        guardarCategoriaID(categoriaID)
    }

=======
    

>>>>>>> Stashed changes:frontEnd/src/components/categoria/CargaComponente.jsx

    return (

    <Fragment>
<<<<<<< Updated upstream:frontEnd/src/components/CargaComponente.jsx
        
=======
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
>>>>>>> Stashed changes:frontEnd/src/components/categoria/CargaComponente.jsx
        {buscarCategorias.map(categorias => (
                
        <tr key={categorias.id}> 
            <td>{categorias.nombre}</td> 
            
            <td>
                <button
<<<<<<< Updated upstream:frontEnd/src/components/CargaComponente.jsx
                    className='btn btn-block btn-primary'
                    type='submit'
=======
                    className='btn  btn-danger'
                    type='button'
>>>>>>> Stashed changes:frontEnd/src/components/categoria/CargaComponente.jsx
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
                    <tr>
                            {result[0] ? result.map( libros =>{
                                    return (
                                        
                                        <td>{libros.nombre}</td>
                                    )
                                })   
                                :<td>No hay libros con esa categoria</td>
                                
                            }
                    </tr>
                </div>
                </tbody>
                </table>
        
                <button 
                    type='button'
                    className='btn btn-block btn-info mt-4'
                    onClick={() => (guardarMostrarLibros(true))}
                >Volver </button>
            </Fragment>}   
            
<<<<<<< Updated upstream:frontEnd/src/components/CargaComponente.jsx
        </tr>)
            )

        }
=======
        </table>
>>>>>>> Stashed changes:frontEnd/src/components/categoria/CargaComponente.jsx
    </Fragment> )
}
export default CargaComponente ;