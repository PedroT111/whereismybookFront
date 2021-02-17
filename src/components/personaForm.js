import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonaForm = (props) => {

    //State

  const [datos, setDatos] = useState([])

  const [enviarDatos, guardarEnviarDatos] = useState(false)

  // Guardar info del formulario

  const guardarInfo = (e) => {
      setDatos({
          ...datos,
          [e.target.name] : e.target.value
      })
      

  }

  

  //Enviar info
  const onSubmit = (e) => {
      e.preventDefault(); // Esto es para que no envíe el formulario por defecto (metodo get)

      guardarEnviarDatos(true)

      e.target.reset(); // Para limpiar los input despues de enviar el usuario nuevo
  }

  //Envia la información a la base de datos
  useEffect( () => {
    const consultarApi = async () =>{
        const url = 'http://localhost:3000/persona';
        await axios.post(url, datos
            
            
        )
        .then (respuesta =>{
            console.log(respuesta)
            
            
            
        })
        .catch(error => {
            console.log(error)
            
        })
        
    }
    consultarApi();
}, [enviarDatos])

    
    
return(
        <div className = "w-75">
            <h2>Crear un nuevo usuario</h2>
            <form
                onSubmit = {onSubmit}
                >
            <div class="form-group">        
                <label>Nombre</label>
                <input name = "nombre"
                class="form-control"
                onChange ={guardarInfo}
                
                 />
            </div>
                <br/>
            <div class="form-group">
                <label>Apellido</label>
                <input name = "apellido"
                class="form-control"
                onChange ={guardarInfo}
               
                 />
            </div>
                 <br/>
            <div class="form-group">
                <label>Alias</label>
                <input name = "alias"
                class="form-control"
                onChange ={guardarInfo}
                
                 />
                 <br/>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input name = "imail"
                class="form-control"
                onChange ={guardarInfo}
                
                  />
            </div>
                <br/>
                <button  className='btn btn-block btn-success '>Agregar nuevo usuario</button>
            </form>
        </div>
    
)    
}

export default PersonaForm;