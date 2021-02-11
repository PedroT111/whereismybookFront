import React, { useEffect, useState } from "react";
import axios from "axios";


const Persona = (props) => {

    const [usuarios, stateUsuarios] = useState([]);

    useEffect(() => {
        const consultarApi = () => {
            axios.get("http://localhost:3000/persona")
            .then(respuesta => {
                
                stateUsuarios(respuesta.data)
            })
            .catch(error => {
                console.log(error)
            })

        }
        consultarApi();

    }, []);
    
    
    
    return(
          <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Alias</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                       
                            <tr>
                                {usuarios.map((usuario) => (
                                    <td>{usuario.nombre}</td>,
                                    <td>{usuario.apellido}</td>,
                                    <td>{usuario.alias}</td>,
                                    <td>{usuario.imail}</td>

                                ))}
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                
                   
            </tbody>
        </table>  
        
    )

}

export default Persona;