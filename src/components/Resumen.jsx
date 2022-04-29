import React from 'react'
import styled from '@emotion/styled';
import {letraMayuscula} from '../Helpers/Helper'
import PropsTypes from 'prop-types'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos

    if(marca ==='' || year ==='' || plan=== '') return null

    

    return (
      <ContenedorResumen>
        <h2>Resumen de Cotizacion</h2>

        <ul>
          <li>Marca: {letraMayuscula(marca)} </li>
          <li>Plan: {letraMayuscula(plan)} </li>
          <li>Año del Auto: {year} </li>
        </ul>
      </ContenedorResumen>
    );
}

Resumen.prototype = {
  datos: PropsTypes.object.isRequired
};
 
export default Resumen;