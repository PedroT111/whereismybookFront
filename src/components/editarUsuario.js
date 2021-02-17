import React, { useState, useEffect } from "react";
import axios from "axios";


const EditarUsuario = () => {

  /*  const leerCambios = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
        
  
    }   */ 
  
    

    return(
        <div className = "conteiner">
            <h2>Editar usuario</h2>
            <form className="w-75"
            
                >
                <div class="form-group">
                <label>Nombre</label>
                <input name = "nombre"
                class="form-control"
               
                
                 />
                </div>
                <br/>
                <div class="form-group">
                <label>Apellido</label>
                <input name = "apellido"
                class="form-control"
                
               
                 />
                 </div>
                 <br/>
                 <div class="form-group">
                <label>Alias</label>
                <input name = "alias"
                class="form-control"
                
                
                 />
                </div>
                 <br/>
                 <div class="form-group">
                <label>Email</label>
                <input name = "imail"
                class="form-control"
                
                
                  />
                </div>
                <br/>
                <button className='btn btn-block btn-info'>Guardar cambios</button>
            </form>
        </div>
    )

}

export default EditarUsuario;