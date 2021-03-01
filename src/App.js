import React, {useEffect, useState} from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {link} from "react-router-dom";
import axios from "axios";
import "../src/app.css";

//Components
import Persona from "./components/persona";
import Genero from "./components/genero";
import Libro from "./components/libro";
import Inicio from "./components/inicio"





function App() {
  return(
  <Router>
     <div className="linksconteiner">
    <div><Link className="btn btn-dark" to="/">Inicio</Link></div>
    <div><Link className="btn btn-dark" to="/persona">Usuarios</Link></div>
    <div><Link className="btn btn-dark">Libros</Link></div>
    <div><Link className="btn btn-dark">Categorías</Link></div>
    </div>
  
    <Switch>
      <Route path="/persona">
        <Persona/>
      </Route>
      <route path="/">
        <Inicio/>
      </route>
    </Switch>
    </Router>
    
    
   

  )

  
}

export default App;
