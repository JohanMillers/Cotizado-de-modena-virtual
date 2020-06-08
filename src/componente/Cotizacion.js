import React from 'react';
import styled from '@emotion/styled';

const ResultadoDIV = styled.div`
   color: #ffff;
   font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
   font-size: 18px;
   span {
       font-weight: bold;
   }
`;

const Precio = styled.p `
   font-size: 30px;
   span {
    font-weight: bold;

   }
`;

const Cotizacion = ({ resultado }) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)
    return ( 
      <ResultadoDIV>
          <Precio>El Precio es: <span>{resultado.PRICE}</span> </Precio>
          <Parrafo>El Precio mas alto del dia: <span>{resultado.HIGHDAY}</span> </Parrafo>
          <Parrafo>El Precio mas bajo del dia: <span>{resultado.LOWDAY}</span> </Parrafo>
          <Parrafo>Variacion ultima 24 Horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Parrafo>
          <Parrafo>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></Parrafo>
      </ResultadoDIV>
     );
}
 
export default Cotizacion;