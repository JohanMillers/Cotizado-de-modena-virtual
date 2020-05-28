import React from 'react';
import styled from '@emotion/styled';

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

const Form = () => {

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
  const [ Criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda','');


    return ( 
        <form>
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