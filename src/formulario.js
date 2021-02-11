import React, {useState} from "react";
import {calcularTotal} from "../funciones"

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = props

    const leerCantidad = (e) => {
        guardarCantidad(parseInt(e.target.value))
    }

    const leerPlazo = (e) => {
        guardarPlazo(parseInt(e.target.value))
    }

     //Definir el State
     const [error, guardarError] = useState(false); //El error empieza en false

    const calcularPrestamo = (e) => {
        e.preventDefault();

        //Validar el formulario

        if(cantidad === 0 || plazo === "") {
            guardarError(true); //Si hay un error, pasa a true
            return
        }

        guardarError(false) // Si se corrije el error, vuelve a false

        //Habilitar el spinner

        guardarCargando(true);


        //Realizar cotización

        setTimeout(() => {

            const total = calcularTotal (cantidad, plazo);
            console.log(total)
    
    
            //Luego de calcular
    
            guardarTotal(total);

            //Deshabilitar el spinner

            guardarCargando(false)
            
        }, 3000);

       
    }

    
    return(
    <div>
        <form className="form" onSubmit = {calcularPrestamo}>
            <div className= "conteiner">
            <label className= "label">Cantidad de Dinero</label> <br></br>
            <input
            className="input" 
            type= "Number" 
            placeholder= "Ejemplo 3000"
            onChange= {leerCantidad}>

            </input>
            <br></br>
            <label className= "label">Plazo para pagar</label> <br></br>
            <select className= "plazo"
            onChange = {leerPlazo}>
                <option value= "">Seleccionar</option>
                <option value = "3">3 Meses </option>
                <option value = "6">6 Meses</option>
                <option value= "12">12 Meses</option>
                <option value= "24">24 Meses</option>
                </select>

                <br></br>

            <input
            className="boton"
            type= "submit"
            value="Calcular">

            </input>
            <input
            className="rest"            
            type ="reset">
            </input>
            



            </div>
            {(error) ? <p className = "error">Todos los campos son obligatorios</p> : null}
        </form>

        
    </div>




        

    );
}

export default Formulario;