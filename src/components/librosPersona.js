import React, { useEffect, useState } from "react";
import axios from "axios";
import proyectoContext from "./state/proyectoContext"
import Persona from "./persona";



const LibrosPersona = (props) => {
    
    const lista = props.listaLibros.map( libros => {
        return (
            {nombre: libros.nombre, id: libros.id, persona: libros.personaID }
        )
    });

   const result = lista.filter(libros => props.usuarioID === libros.persona); //Filtra los libros de la persona
   
    const volverFormulario = () => { //Vuelve al formulario principal
        props.setLibros(false)
    }

    //Mensaje de que la persona no tiene libros

    //No funciona
    /*
    const [vacioLibro, setVacioLibro] = useState(false)
    const mensaje = () => {
        if(result){
            setVacioLibro(true)
        }
        else{
            setVacioLibro(false)
        }
        mensaje();
    }*/

   
    
    

    
    return(
        <React.Fragment>
        <div className ="librosConteiner">
            <h2>Libros Prestados</h2>
            <h3>Usuario : {props.usuarioNombre}</h3>
        
            <table className ="table mt-4 table-light  table-bordered">
               <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                </tr>
                </thead>
               <tbody className="tbody-light">
            {
                result.map(libros => {
                    return(
                        <tr>
                        
                        <td>{libros.id}</td>
                        <td>{libros.nombre}</td>
                        

                        </tr>
                    )                  
                })
            }
                </tbody> 
            </table> 
            <button className='btn btn-primary'
             onClick = {() => {volverFormulario(props.setLibro)}}>Volver</button>
        
        </div>
        </React.Fragment>
    )
    

}

export default LibrosPersona;