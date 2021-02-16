import React,{useContext,useEffect,useState,Fragment} from 'react';
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;
import Error from './Error'



const MostrarLibrosCategorias = () => {

     //useContext
     const proyectosContext = useContext(proyectoContext) ;
     const { error,guardarError,mostrarLibros,categoriaID,guardarCategoriaID,guardarMostrarLibros}=  proyectosContext 

    //State Local, en el URL APARECE LOS DE CATEGORIA PERO EN EL STATE DONDE SE TIENE QUE GUARDAR NO
    const [mostrarLibrosLista, guardarMostrarLibrosLista] = useState([{}])

    useEffect(() => {
        const MostrarLibrosCategoria = () =>{
            
            axios.get(`http://localhost:3001/libro/${categoriaID}`) 
            .then(respuesta => {
                
                guardarMostrarLibrosLista(respuesta.data.respuesta)
                
                
                console.log(mostrarLibrosLista)
                
                

                
                
            })
            .catch(error => {
                console.log(error)
                
            })
        }
        MostrarLibrosCategoria()
    }, [mostrarLibros])

    
    return ( 
       <Fragment>
           
            {mostrarLibrosLista.map(lista=> (
                <tr key={lista.id}>
                    <td>{lista.nombre}</td>
                </tr>
            ))}
        </Fragment>
        );
    }
 
export default MostrarLibrosCategorias;