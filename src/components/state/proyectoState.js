import React,{useState,useEffect} from 'react';
import axios from "axios";
import proyectoContext from "./proyectoContext"



const ProyectoState = (props) => {
    //Para guardar el id del usuario
    const [usuarioID, setUsuarioID] = useState(0)


    return(
        <proyectoContext.Provider
        value= {{
                usuarioID,
                setUsuarioID
            }}>
                
        {props.children}

        </proyectoContext.Provider>
        
    )

}

export default ProyectoState;