import React, { useState, useEffect, useForm } from "react";
import axios from "axios";


const EditarUsuario = (props) => {

    //Guardar informacion editada
    const leerDatos = (e) => {
        props.setUsuarioEditado({
            ...props.usuarioEditado,  
            [e.target.name] : e.target.value

        })
        
    }    
    
    const onSubmit = (e) => {
        e.preventDefault();

        props.guardarEnviarCambios(true);  
        
        props.setEditar(false)//Para volver al formulario principal
        
    }
    
    const volver = () => {
        props.setEditar(false)
    }

     
  
    

    return(
        <div className="formulario2">
            <h2>Editar usuario</h2>
            <form onSubmit= {onSubmit}
            
                >
                <div class="form-group">
                <label>Nombre</label>
                <input name = "nombre"
                value={props.form}
                class="form-control"
                placeholder= {props.datosUsuario.nombre}
                required
                onChange={leerDatos}
               
                
                 />
                </div>
                <br/>
                <div class="form-group">
                <label>Apellido</label>
                <input name = "apellido"
                class="form-control"
                placeholder={props.datosUsuario.apellido}
                onChange={leerDatos}
                required
                
               
                 />
                 </div>
                 <br/>
                 <div class="form-group">
                <label>Alias</label>
                <input name = "alias"
                class="form-control"
                placeholder={props.datosUsuario.alias}
                onChange={leerDatos}
                required
                
                
                 />
                </div>
                 <br/>
                 <div class="form-group">
                <label>Email</label>
                <input name = "imail"
                class="form-control"
                placeholder={props.datosUsuario.imail}
                onChange={leerDatos}
                required
                
                
                  />
                </div>
                
                <div className="bot">
                <button className='btn btn-primary'>Guardar cambios</button>
                <button  
                        className='btn btn-primary'
                        onClick = {() => volver()}>Cancelar</button>
                </div>
            </form>
        </div>
    )

}

export default EditarUsuario;