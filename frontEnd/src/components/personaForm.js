import React, { useState, useEffect } from "react";
import axios from "axios";
import "../app.css"

const PersonaForm = (props) => {

  const guardarInfo = (e) => {
      props.setDatos({
          ...props.datos,
          [e.target.name] : e.target.value
      })
      

  } 

  //Enviar info
  const onSubmit = (e) => {
      e.preventDefault(); // Esto es para que no envíe el formulario por defecto (metodo get)

      props.guardarEnviarDatos(true)

      e.target.reset(); // Para limpiar los input despues de enviar el usuario nuevo
  }

    
    return(
        <div className="formulario">
            <h2>Crear un nuevo usuario</h2>
            <form
                onSubmit = {onSubmit}
                >
            <div class="form-group">        
                <label></label>
                <input name = "nombre"
                placeholder="Nombre"
                class="form-control"
                required
                
                onChange ={guardarInfo}
                
                 />
            </div>
                <br/>
            <div class="form-group">
                <label></label>
                <input name = "apellido"
                placeholder="Apellido"
                class="form-control"
                required

                onChange ={guardarInfo}
               
                 />
            </div>
                 <br/>
            <div class="form-group">
                <label></label>
                <input name = "alias"
                class="form-control"
                placeholder="Alias"
                required
                maxLength = "8"
                onChange ={guardarInfo}
                
                 />
                 <br/>
            </div>
            <div class="form-group">
                <label></label>
                <input name = "imail"
                placeholder="Email"
                class="form-control"
                required
                onChange ={guardarInfo}
                
                  />
            </div>
                <br/>
                <button  className=' btn btn-primary '>Agregar nuevo usuario</button>
            </form>
        </div>
    
)    
}

export default PersonaForm;