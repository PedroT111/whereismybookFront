import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import "../src/app.css"

//Components
import Persona from "./components/persona";
import Genero from "./components/genero";
import Libro from "./components/libro";



function App() {
  return(
  <React.Fragment>
    <Persona></Persona>
  </React.Fragment>
  )

  
}

export default App;
