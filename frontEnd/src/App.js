  
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Libro from './components/libro/Libro' ; 
import Genero from './components/categoria/Genero' ;
 /* import Inicio from './components/Inicio' ; */
/* import Persona from './components/Persona' ;  */
import ProyectoState from './useContext/proyectState'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ProyectoState>
          <Router>
            <Switch>
                {/* <Route exact path='/' component={Inicio} />  */}
              {/* <Route exact path ='/Persona' component={Persona} />  */}
              <Route exact path='/categoria' component={Genero} />
               <Route exact path='/libro' component={Libro} />     
            </Switch>
          </Router>
        </ProyectoState>
    </div>
    </div>
    );
    
}

export default App;
