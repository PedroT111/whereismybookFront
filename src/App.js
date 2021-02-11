import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

//Components
import Persona from "./components/persona";
import Genero from "./components/genero";
import Libro from "./components/libro";
import PersonaForm from "./components/personaForm"


function App() {
  
 
 
  return(
   <React.Fragment>
     <div>
       <Persona/>
     </div>
     <div>
       <PersonaForm/>
     </div>
   </React.Fragment>
   
    
  )
}

export default App;
