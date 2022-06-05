import React, { useState } from "react";
import useGetallDigi from "../hooks/useGetallDigi";

const AgregarBusqueda = ({ setValoresBusqueda }) => {
  const [valorBusqueda, setValorBusqueda] = useState(0);
  const { digi } = useGetallDigi();

  const handleChange = (e) => {
    setValorBusqueda(e.target.value);
  };

  const envioBusqueda = async (e) => {
    e.preventDefault();

    if (!valorBusqueda.trim().length > 0) {
      alert("Debe rellenar el campo");
      return;
    }
    setValoresBusqueda((valor) => [valorBusqueda, ...valor]);
    setValorBusqueda("");
  };

  return (
    <>
      <form onSubmit={envioBusqueda} className='animate__animated animate__backInDown'>
        {/* 
        <input type="text"
          value={valorBusqueda}
          onChange={handleChange} />
        { <button type='submit'>Buscar</button> }
      
    <p>{valorBusqueda}</p> */}
      <select
        onChange={handleChange}
        value={valorBusqueda}
        className="form-select form-select-sm mb-2 mt-3"
      >
        <option key="0" value="0" disabled>
          Seleccione 
        </option>
        {digi.map((digi) => (
          <option key={digi.name} value={digi.name}>
            {digi.name}
          </option>
        ))}
      </select>
      <button className="btn btn-primary btn-block" type='submit'>Buscar</button>
      </form>

      {/* {cargando && <p>Cargando</p>}
      <div className="card-grid animate__animated animate__bounceInUp">
        {digi.map((digi) => (
          <ul>
            <li>{digi.name}</li>
          </ul>
        ))}
      </div> */}
    </>
  );
};

export default AgregarBusqueda;
