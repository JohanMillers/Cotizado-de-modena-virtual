import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Error from './Error';

import useMoneda from '../Hooks/useMoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';

const Boton = styled.input `
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2f3;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;


  &:hover {
      background-color: #326AC0;
      cursor: pointer;
  }

`;

  const Form = ({ setCriptomoneda, setMoneda }) => {
  //state del listados de criptomonedas

  const [ listacripto, setListacripto ] = useState([]);
  //state de validacion
  const [ error, setError ] = useState(false);

  const Monedas = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Pesos Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Estelina' },
    { codigo: 'DOP', nombre: 'Peso Dominicano' }
  ]

  //Utilizando useMoneda
  const [ moneda, SeleccionaMoneda] = useMoneda('Elige tu Moneda', '',Monedas);

  // Utiliando useCriptomoneda
  const [ Criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda','',listacripto);

//Ejecutado llamando a la api
useEffect(() => {
  const consultarAPI = async () => {
    const Url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    const resultado = await axios.get(Url);

    setListacripto(resultado.data.Data);
  }
  consultarAPI();


},[]);

// cuando el usuario hacer submit
const cotizarMoneda = e => {
  e.preventDefault();

  //validar si ambos campo estan llenos

  if(moneda === '' || Criptomoneda === '') {
    setError(true);
    return;
  }

  //pasar los datos al componente principal
  setError(false);
  setMoneda(moneda);
  setCriptomoneda(Criptomoneda);



}

    return ( 
        <form
             onSubmit={cotizarMoneda}
        >
          {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

            <SeleccionaMoneda/> 

            <SelectCripto />

            <Boton 
              type= "submit"
              value= "calcular"
            />


        </form>
     );
}
 
export default Form;