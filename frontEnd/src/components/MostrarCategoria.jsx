import React,{useContext,Fragment, useState, useEffect} from 'react' ;
import proyectoContext from '../useContext/proyectoContext' ;
import axios from 'axios' ;
import CargaComponente from './CargaComponente'
import MostrarLibrosCategorias from './MostrarLibrosCategoria';

const MostrarCategoria = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,mostrarLibros}=  proyectosContext 

    

    let componente ;
    if(mostrarLibros === false){
        componente = <CargaComponente />
    }else{
        componente=<MostrarLibrosCategorias />
    }


        return ( 
            <Fragment>
            <div className='categorias'></div>
            <tr>
                
                
                        {componente}   
                
            </tr>   
        </Fragment>
        );
    }

export default MostrarCategoria;
