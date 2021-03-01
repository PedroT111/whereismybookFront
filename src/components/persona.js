import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonaForm from "./personaForm"
import EditarUsuario from "./editarUsuario";
import LibrosPersona from "./librosPersona"
import ErrorPersona from "./errorPersona"
import Spinner from "./spinner"

const Persona = (props) => {

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
  const [error, setError] = useState(false)
  
  const eliminarUsuario = (id) => {
    const consultarApi = async () =>{
      const url = 'http://localhost:3000/persona/' + id;
      await axios.delete(url)
      .then (respuesta =>{
          
          console.log(respuesta)
          obtenerUsuarios(); //Para actualizar sin recargar la pagina
      })
      .catch(error => {
          console.log(error)
          setError(true);
      })
      
  }
  consultarApi()
  
}

    //Editar usuario
    const [editar, setEditar] = useState(false)
    const [personaID, setPersonaID] = useState("");
    const [usuarioEditado, setUsuarioEditado] = useState([])
    const [datosUsuario, setDatosUsuario] = useState([])
    const [enviarCambios, guardarEnviarCambios] = useState(false)

    const editarUsuario = (id, nombre, apellido, alias, imail) => {
      setEditar(true);  
      setPersonaID(id)

      setDatosUsuario(
        
          {nombre : nombre,
          apellido: apellido,
          alias: alias,
          imail: imail}
        
      )
    }  
    
    console.log(datosUsuario)
    console.log(datosUsuario.apellido)
    
      //Enviar datos    
      useEffect( ()=> {
        const consultarApi = async () =>{
          const url = 'http://localhost:3000/persona/' + personaID ;
          await axios.put(url, usuarioEditado
            )
          .then (respuesta =>{
              console.log(respuesta)
              guardarEnviarCambios(false)
          })
          .catch(error => {
              console.log(error)
              
          })
          
      }
      consultarApi()
      
      }, [enviarCambios])

      // Peticionar un get de los usuarios luego de editar
      
      useEffect(() => {
        obtenerUsuarios()
      
      }, [enviarCambios])

    //Agregar Usuario
    const [datos, setDatos] = useState([]);
    const [enviarDatos, guardarEnviarDatos] = useState(false)

  useEffect( () => {
    const consultarApi = async () =>{
        const url = 'http://localhost:3000/persona';
        await axios.post(url, 
          
          datos
          
          )
        .then (respuesta =>{
            console.log(respuesta)
            guardarEnviarDatos(false)
            
            
        })
        .catch(error => {
            console.log(error)
            
        })
        
    }
    consultarApi();
    
  }, [enviarDatos])

//Peticionar a la API los usuarios despues de agregar uno nuevo
  useEffect(() => {
    obtenerUsuarios()

  }, [enviarDatos])


  //Mostar libros de la persona
    
  const [libros, setLibros] = useState(false);
  const [usuarioID, setUsuarioID] = useState(0);
  const [listaLibros, setListaLibros] = useState([{}]);
  const [usuarioNombre , setUsuarioNombre] = useState("Vacio")

  const mostrarLibros = (id, nombre, apellido) =>{
    setLibros(true);
    setUsuarioID(id);
    setUsuarioNombre(nombre + " " + apellido)
  }

  useEffect(() => {
    const consultarApi = async () =>{
        const url = "http://localhost:3000/libro/";
        await axios.get(url)
        .then (respuesta =>{
            
            setListaLibros(respuesta.data.respuesta)

            console.log(listaLibros)  
            
        })
        .catch(error => {
            console.log(error)
            
        })
        
    }
    consultarApi();
    
  }, [libros])
    
  return(
    <React.Fragment>
    <div>
    <div className ="titulo">
    <h1>Usuarios</h1>
    </div>
    <div className ="conteiner">
  
    <div className = "cformulario"> 
       
      {
        libros ? (<LibrosPersona
                  usuarios = {usuarios}
                  listaLibros={listaLibros}
                  setListaLibros={setListaLibros}
                  usuarioID={usuarioID}
                  setLibros={setLibros}
                  usuarioNombre={usuarioNombre}/>) : (
        editar ? (
          <div>
            <EditarUsuario
            usuarioEditado= {usuarioEditado}
            enviarCambios={enviarCambios}
            setUsuarioEditado={setUsuarioEditado}
            setEditar={setEditar}
            guardarEnviarCambios={guardarEnviarCambios}
            datosUsuario={datosUsuario}
            
          />
          </div>
        ) : (
          <div>
     
            <PersonaForm
            datos = {datos}
            setDatos= {setDatos}
            guardarEnviarDatos ={guardarEnviarDatos}/>
            
          </div>
        ) )
      }
    

    </div> 

    <div className = "cusuarios">
      
       
        <table className="table table-dark table-striped">
          <thead>
           
            <tr >
                <th>Id</th>
                <th>Nombre</th>
                <th >Apellido</th>
                <th >Alias</th>
                <th >Email</th>
                <th></th>
            </tr>
            </thead>
            <tbody className="table-striped">
             {
                usuarios.map(usuario => (
                    <tr key = {usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>   
                        <td>{usuario.apellido}</td>
                        <td>{usuario.alias}</td>
                        <td>{usuario.imail}</td>
                        <td className="botones">
                                  <button className="btn btn-success"
                                            onClick ={() => {editarUsuario(
                                              usuario.id, usuario.nombre,
                                              usuario.apellido, usuario.alias, usuario.imail)}}>Editar</button>
                                   
                                  <button  className="btn btn-danger"
                                            onClick ={() => {eliminarUsuario(usuario.id)}}>Eliminar</button>
                                
                                  <button  className= "btn btn-light"
                                            onClick= {e =>mostrarLibros
                                            (usuario.id, usuario.nombre, usuario.apellido)}>Libros</button>
                                </td>
                    </tr>

                ))
                }
                </tbody>

        </table> 
        </div>
       
        
    </div>   
    {
          error ? (
            <ErrorPersona
            setError = {setError}/>

          ) : (null)
        } 
    </div>

    </React.Fragment>
        
    
  )
    
}

export default Persona;