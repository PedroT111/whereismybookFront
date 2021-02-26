import React,{Fragment,useContext} from 'react'
import proyectoContext from '../useContext/proyectoContext'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'


const Error = ({mensaje}) => {

 //useContext
    const proyectosContext = useContext(proyectoContext) ;
    const { guardarError, error, guardarErrorLibro,errorLibro, errorDescripcion,guardarErrorDescripcion,errorDeleteCategoria,guardarErrorDeleteCategoria,guardarErrorCategoriaRepetida,errorCategoriaRepetida,errorDeleteLibro,guardarErrorDeleteLibro} = proyectosContext

    const modificarError = () =>{
        guardarError(false) ;
        guardarErrorLibro(false) ;
        guardarErrorDescripcion(false) ;
        guardarErrorDeleteCategoria(false) ;
        guardarErrorCategoriaRepetida(false);
        guardarErrorDeleteLibro(false)
    }

    return ( 
        <Fragment>
            <Modal isOpen={error || errorLibro || errorDescripcion || errorDeleteCategoria || errorCategoriaRepetida ||errorDeleteLibro}>

                <ModalHeader >
                    <h1>Error!</h1>
                </ModalHeader>
                <ModalBody>
                    <h2>{mensaje}</h2>
                    <h3>Intente nuevamente</h3>
                </ModalBody>
                <ModalFooter>
                <Button className='btn btn-block btn-danger' type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={modificarError}>Cerrar</Button>
                </ModalFooter>

            </Modal>
        </Fragment>
    );
}

export default Error;