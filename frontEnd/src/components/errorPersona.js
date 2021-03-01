import React from "react";



const ErrorPersona = (props) => {



    return(
        <div class="alert alert-danger alert-dismissable">
              <p> <strong>Error!</strong> No se puede eliminar el usuario porque 
              tiene libros prestados</p>
              <button className="btn btn-danger"
               onClick = {() => props.setError(false)}>Aceptar</button>
            </div>

    )
}

export default ErrorPersona;