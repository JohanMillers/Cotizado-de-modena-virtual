import React, { Fragment, useState} from 'react';

const useMoneda = (label,stateInicial,opciones) => {

    //State de nuestro custom hook
    const [state,setState] = useState('')
    
    const Seleccionar = () => (

        <Fragment>
            <label>{label}</label>
            <select>
                <option value= "">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    );

    //Retorna state, interfaz y funcion que modifica el state

    return [state,Seleccionar,setState];
    
}
 
export default useMoneda;