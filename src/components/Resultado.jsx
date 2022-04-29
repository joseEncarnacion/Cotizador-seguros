import React from 'react'
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Propstypes from 'prop-types'

const Mensaje = styled.p`
   background-color : rgb(127, 224, 237);
   margin-top: 2rem;
   padding: 1rem;
   text-align: center;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const CotizacionResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6Da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Resultado = ({ Cotizacion }) => {

    

  return Cotizacion === 0 ? (
    <Mensaje>Elige Marca, Año y tipo de seguro</Mensaje>
  ) : (
    <CotizacionResult>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={Cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>
            El total es: $ <span>{Cotizacion}</span>
          </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </CotizacionResult>
  );
};


Resultado.Propstypes = {
  Cotizacion: Propstypes.number.isRequired
};
 
export default Resultado;