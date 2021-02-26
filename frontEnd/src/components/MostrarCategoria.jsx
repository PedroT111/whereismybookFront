<<<<<<< Updated upstream:frontEnd/src/components/MostrarCategoria.jsx
import React,{useContext,Fragment, useState, useEffect} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;
import CargaComponente from './CargaComponente'
import MostrarLibrosCategorias from './MostrarLibrosCategoria';

const MostrarCategoria = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,mostrarLibros}=  proyectosContext 
=======
import React,{Fragment} from 'react' ;

import CargaComponente from './CargaComponente'



const MostrarCategoria = () => {

>>>>>>> Stashed changes:frontEnd/src/components/categoria/MostrarCategoria.jsx

    let componente = <CargaComponente />
    
<<<<<<< Updated upstream:frontEnd/src/components/MostrarCategoria.jsx

    let componente ;
    if(mostrarLibros === false){
        componente = <CargaComponente />
    }else{
        componente=<MostrarLibrosCategorias />
    }


        return ( 
            <Fragment>
            <div className='categorias'></div>
=======
        return ( 
            <Fragment>
            <div className='table table-dark table-striped mt-3 '></div>
>>>>>>> Stashed changes:frontEnd/src/components/categoria/MostrarCategoria.jsx
            <tr>
                
                
                        {componente}   
                
            </tr>   
        </Fragment>
        );
    }

export default MostrarCategoria;
