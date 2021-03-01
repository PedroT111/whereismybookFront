import React,{Fragment} from 'react' ;

import CargaComponente from './CargaComponente'



const MostrarCategoria = () => {


    let componente = <CargaComponente />
    
        return ( 
            <Fragment>
            <div className='table table-dark table-striped mt-3 '></div>
            <tr>
                
                
                        {componente}   
                
            </tr>   
        </Fragment>
        );
    }

export default MostrarCategoria;
