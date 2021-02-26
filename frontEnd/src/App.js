import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
<<<<<<< Updated upstream
import Libro from './components/Libro' ;
import Genero from './components/Genero' ;
import Inicio from './components/Inicio' ;
import Persona from './components/Persona' ;
=======
import Libro from './components/libro/Libro' ; 
import Genero from './components/categoria/Genero' ;
 /* import Inicio from './components/Inicio' ; */
import Persona from './components/Persona' ; 
>>>>>>> Stashed changes
import ProyectoState from './useContext/proyectState'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ProyectoState>
          <Router>
            <Switch>
<<<<<<< Updated upstream
              <Route exact path='/' component={Inicio} />
              <Route exact path ='/persona' component={Persona} />
              <Route exact path='/categoria' component={Genero} />
              <Route exact path='/libros' component={Libro} />      
=======
                {/* <Route exact path='/' component={Inicio} />  */}
              <Route exact path ='/Persona' component={Persona} /> 
              <Route exact path='/categoria' component={Genero} />
               <Route exact path='/libro' component={Libro} />     
>>>>>>> Stashed changes
            </Switch>
          </Router>
        </ProyectoState>
    </div>
    </div>
    );
    
}

export default App;
