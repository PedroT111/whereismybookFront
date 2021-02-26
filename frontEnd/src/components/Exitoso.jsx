import React, { Fragment,useContext } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import proyectoContext from '../useContext/proyectoContext'


const Exitoso = ({mensaje}) => {

        //useContext
        const proyectosContext = useContext(proyectoContext) ;
        const { guardarPedidoExitoso, pedidoExitoso} = proyectosContext
    
        return ( 
            <Fragment>
                <Modal isOpen={pedidoExitoso}>
                    <ModalHeader >
                        <h1>Exito!</h1>
                    </ModalHeader>
                    <ModalBody>
                        <h2>{mensaje}</h2>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button className='btn btn-block btn-success' type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={e =>{guardarPedidoExitoso(false)}}>Cerrar</Button>
                    </ModalFooter>

                </Modal>
    </Fragment>
    );

}

export default Exitoso;