import React from 'react';
import Header from './components/Header'
import styled from '@emotion/styled';
import {useState} from 'react';
import Form from './components/Form'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'






// Style sheets
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {

  // estado 
  const [resumen, setResumen] = useState({
    Cotizacion: 0,
    datos: {
      marca: '',
      year:'',
      plan: ''
    }
  });

  const [cargando, setCargando] = useState(false)

  // extraer los datos
  
  const {Cotizacion, datos}= resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Form 
          setResumen={setResumen} 
          setCargando = {setCargando}
        />
        {
          cargando ? <Spinner /> : null
        }
        

        <Resumen 
        datos={datos} 
        />

        {!cargando 
          ?  
          <Resultado 
            Cotizacion ={Cotizacion}
          />
          : null
        } 
      </ContenedorFormulario>
    </Contenedor>
  );
}




export default App;
