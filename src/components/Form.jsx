import React from 'react'
import styled from '@emotion/styled';
import {useState} from 'react';
import { getDifferentYears, calcularMarca, getPlan } from "../Helpers/Helper";
import PropsTypes from 'prop-types'


// styled component

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;

`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const SelectTab = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  /* transition: background-color .3s easy; */
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;


const ErrorForm = styled.div`
  background-color: #f96f6f;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = ({ setResumen, setCargando }) => {



  // usestate
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  // Extaer datos del state
  const { marca, year, plan } = datos;

  // funcion para escuchar lo que el usuario escribe
  const obtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Base de tazacion de seguro = 2000
    let resultado = 2000;

    // obtener la diferencia de años
    const diferencia = getDifferentYears(year);

    // Restar el 3% por cada año

    resultado -= (diferencia * 3 * resultado) / 100;

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    resultado = calcularMarca(marca) * resultado;

    // Seguro Basico aumenta 20%
    // Seguro Full  Aumenta 50%
    const incrementoPlan = getPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    

    // total
    setCargando(true);

    setTimeout(() => {
      setCargando(false)
      setResumen({
        Cotizacion: resultado,
        datos
      })
    }, 3000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <ErrorForm>Todos los campos son obligatorio</ErrorForm> : null}
      <Campo>
        <Label>Marca</Label>
        <SelectTab value={marca} name="marca" onChange={obtenerInformacion}>
          <option value=""> ---Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </SelectTab>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <SelectTab value={year} name="year" onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2024</option>
          <option value="2021">2023</option>
          <option value="2021">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </SelectTab>
      </Campo>
      <Campo>
        <Label htmlFor="plan">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={obtenerInformacion}
        />
        Full
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Form.prototype = {
  setResumen: PropsTypes.func.isRequired,
  setCargando:PropsTypes.func.isRequired
};
 
export default Form;