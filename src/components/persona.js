import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonaForm from "./personaForm"
import EditarUsuario from "./editarUsuario";


const Persona = (props) => {
    //State
  const [usuarios, setUsuarios] = useState([{}]) ;
  

  //Petición Usuarios a la API
    useEffect(() => {
        obtenerUsuarios()

    }, [])

    const obtenerUsuarios = async () => {
        const data = await axios.get("http://localhost:3000/persona")
        const user = data.data.respuesta;


        setUsuarios(user);

        
}

// Eliminar usuario
  const eliminarUsuario = (id) => {
    const consultarApi = async () =>{
      const url = 'http://localhost:3000/persona/' + id;
      await axios.delete(url)
      .then (respuesta =>{
          console.log(respuesta)
          
          
          
      })
      .catch(error => {
          console.log(error)
          
      })
      
  }
  consultarApi()
  
}
//Editar usuario
const [editar, setEditar] = useState(false)
const [usuarioEditado, setUsuarioEditado] = useState()


const editarUsuario = (usuario) => {
  setEditar(true);
  
}

const guardarCambios = (id) => {
  const consultarApi = async () =>{
    const url = 'http://localhost:3000/persona/' + id;
    await axios.put(url,
      )
    .then (respuesta =>{
        console.log(respuesta)
        
        
        
    })
    .catch(error => {
        console.log(error)
        
    })
    
}
consultarApi()
setEditar(false) //Para volver al formulario principal

}



  
  return(
    <React.Fragment>
    <div>
      <h1>Where is my Book ?</h1>
    <div className ="row align-items-start ">
    <div className = "col">
      {
        editar ? (
          <div>
            <EditarUsuario/>
          </div>
        ) : (
          <div>
     
            <PersonaForm/>
            
          </div>
        )
      }

    </div>

    <div className = "col w-50">
      
        <h2>Usuarios</h2>
        <table>
           
            <tr className="text-white">
                <th scope="col">Nombre</th>
                <th scope="col" >Apellido</th>
                <th  scope="col">Alias</th>
                <th scope="col" >Email</th>
            </tr>
             
            {
                usuarios.map(usuario => (
                    <tr className="bg-light" key = {usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.alias}</td>
                        <td>{usuario.imail}</td>
                        <td className="botones">
                                    <button className="btn btn-success"
                                            onClick ={() => {editarUsuario(usuario.id)}}  >Editar</button>
                                    <button  className="btn btn-danger"
                                            onClick ={() => {eliminarUsuario(usuario.id)}}>Eliminar</button>
                                </td>
                    </tr>

                ))
                }

        </table>
        </div>
    </div>    
    </div>

    </React.Fragment>
        
    
  )
    
}

export default Persona;