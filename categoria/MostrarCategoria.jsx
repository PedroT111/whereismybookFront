import React,{useContext,Fragment, useState, useEffect} from 'react' ;
import proyectoContext from '../../useContext/proyectoContext' ;
import axios from 'axios' ;
import CargaComponente from './CargaComponente'
import MostrarLibrosCategorias from './MostrarLibrosCategoria';
import Spinner from './Spinner'


const MostrarCategoria = () => {

    //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const {error,guardarError,mostrarLibros,guardarCargando}=  proyectosContext 

    

    let componente ;
    if(mostrarLibros === false){
        componente = <CargaComponente />
    }else(
        componente=<MostrarLibrosCategorias />
    )



        return ( 
            <Fragment>
            <div className='table table-hover '></div>
            <tr>
                
                
                        {componente}   
                
            </tr>   
        </Fragment>
        );
    }

export default MostrarCategoria;
