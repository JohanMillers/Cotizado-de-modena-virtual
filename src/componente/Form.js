import React from 'react';
import styled from '@emotion/styled';

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
    return ( 
        <form>
            <Boton 
              type= "submit"
              value= "calcular"
            />


        </form>
     );
}
 
export default Form;