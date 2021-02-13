import React,{useContext,Fragment} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;

const MostrarCategoria = () => {


    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,buscarCategorias}=  proyectosContext 

    return ( 
        <Fragment>
        <h1>asd</h1>
        <tr>
            {buscarCategorias.map(categorias => (
                <tr> <td>{categorias.nombre}</td> </tr>
            ))} 
        <td>
            <button>Editar</button>
            <button>Eliminar</button>
        </td>
        </tr>
    </Fragment>
    );
}

export default MostrarCategoria;
