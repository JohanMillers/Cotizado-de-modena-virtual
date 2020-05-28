import React, { Fragment, useState} from 'react';

const useMoneda = () => {

    //State de nuestro custom hook
    const [state,setState] = useState('')
    
    const Seleccionar = () => (

        <Fragment>
            <label>Moneda</label>
            <select>
                <option value= "MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    //Retorna state, interfaz y funcion que modifica el state

    return [state,Seleccionar,setState];
    
}
 
export default useMoneda;