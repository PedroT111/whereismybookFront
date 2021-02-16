import React,{useContext,useEffect,useState,Fragment} from 'react';
import proyectoContext from '../../useContext/proyectoContext' ;
import axios from 'axios' ;
import Error from '../Error'



const MostrarLibrosCategorias = () => {

     //useContext
     const proyectosContext = useContext(proyectoContext) ;
     const { error,guardarError,mostrarLibros,categoriaID,guardarMostrarLibros,CategoriaID}=  proyectosContext 

    //State Local, en el URL APARECE LOS DE CATEGORIA PERO EN EL STATE DONDE SE TIENE QUE GUARDAR NO
    const [mostrarLibrosLista, guardarMostrarLibrosLista] = useState([{}]) ;
    const [stateAxio, guardarStateAxios] = useState(0)

    useEffect(() => {
        const MostrarLibrosCategoria = () =>{
            
            axios.get(`http://localhost:3001/libro/${categoriaID}`) 
            .then(respuesta => {
                
                guardarMostrarLibrosLista(respuesta.data.respuesta)
                guardarStateAxios(respuesta.status)
                
                
                
                

            })
            .catch(error => {
                console.log(error)
                
            })
        }
        MostrarLibrosCategoria()
    }, [mostrarLibros])


    console.log(stateAxio)
    
    return ( 
       <Fragment>
           {stateAxio==200 ?
            <table className='table table-hover'>
                <thead>
                    <tr>Libros de la categoria Seleccionada </tr>
                </thead>

            <div className="column">
                {mostrarLibrosLista.map(lista=> (
                    <tr key={lista.id} className='table-active'>
                        <td scope="row">{lista.nombre}</td>
                    </tr>
                ))}
                </div>
            </table>   
            :
                <h3 className='mt-4'>No existe ningun libro con esa categoria</h3>
             }
        

            <button 
                type='button'
                className='btn btn-block btn-info mt-4'
                onClick={() => (guardarMostrarLibros(false))}
            >Volver </button>
        </Fragment>
        );
    }
 
export default MostrarLibrosCategorias;