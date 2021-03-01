import React, {useEffect, useState} from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import axios from "axios";
import "../src/app.css";
import ProyectoState from "./useContext/proyectState"

//Components
import Persona from "./components/persona";
import Genero from "./components/categoria/Genero";
import Libro from "./components/libro/Libro";
import Inicio from "./components/inicio"





function App() {
  return(
  <ProyectoState>
  <Router>
     <div className="linksconteiner">
    <div><Link className="btn btn-dark" to="/">Inicio</Link></div>
    <div><Link className="btn btn-dark" to="/persona">Usuarios</Link></div>
    <div><Link className="btn btn-dark" to="/libro">Libros</Link></div>
    <div><Link className="btn btn-dark" to="/categoria">Categorías</Link></div>
    </div>
  
    <Switch>
      <Route exact path="/persona" component={Persona}/>
      <Route exact path="/" component={Inicio}/>
      <Route exact path="/categoria" component={Genero}/>
      <Route exact path="/libro" component={Libro}/>
        
      

    </Switch>
    </Router>
    </ProyectoState>
    
   

  )

  
}

export default App;
