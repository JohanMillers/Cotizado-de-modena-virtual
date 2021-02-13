import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './componente/Form';
import Cotizacion from './componente/Cotizacion';
import axios from 'axios';



import imagen from './cryptomonedas.png';
import Spinner from './componente/Spinner';

const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2 rem; 
  }
  
`;

const Imagen = styled.img `
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1 `
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }

`;


function App() {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);


    useEffect(() => {

        const contizarCriptomoneda = async() => {
            //evitamos la ejecucuion la primera vez

            if (moneda === '') return;

            //Cotizar la api
            const Url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

            const resultado = await axios.get(Url);
            //mostrar el spinner
            setCargando(true);
            //ocultar el spinner
            setTimeout(() => {
                //cambia el estado de cargando
                setCargando(false)
                    //guardar cotizacion
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            }, 2000);

        }
        contizarCriptomoneda();

    }, [moneda, criptomoneda]);
    // Mostrar spinner o resultado
    const componente = (cargando) ? < Spinner / > : < Cotizacion resultado = { resultado }
    />



    return ( <
        Contenedor >
        <
        div >
        <
        Imagen src = { imagen }
        alt = "imagen cripto" /
        >
        <
        /div> <
        div >
        <
        Heading > Cotiza Criptomonedas al Instante < /Heading>

        <
        Form setMoneda = { setMoneda }
        setCriptomoneda = { setCriptomoneda }
        /> { componente } < /
        div > <
        /Contenedor>
    );
}

export default App;