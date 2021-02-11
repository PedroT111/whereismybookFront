import React, { useState } from "react";
import axios from "axios";

const PersonaForm = (props) => {
    //State
    
return(
        <div className = "conteiner">
            <h2>Crear un nuevo usuario</h2>
            <form
                >
                <label>Nombre</label>
                <input name = "nombre" />
                <br/>
                <label>Apellido</label>
                <input name = "apellido"  />
                 <br/>
                <label>Alias</label>
                <input name = "alias"  />
                 <br/>
                <label>Email</label>
                <input name = "imail"  />
                <br/>
                <input type = "submit"/>
            </form>
        </div>
    
)    
}

export default PersonaForm;