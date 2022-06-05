import React from 'react'

import useGetGifs from '../hooks/useGetGifs';


const DigiContenedor = ({ valorBusqueda,arrayData,setControlDB }) => {
  useGetGifs(valorBusqueda,arrayData,setControlDB)

  return (
    <>
     {/*  <h3>Busqueda {valorBusqueda}</h3>
      {cargando && <p>Cargando</p>}
      <div id="contenedor" className=' animate__animated animate__bounceInUp'>

        {

          digi?.map((digi) => (
            <div id='contenedor2' className="card-group" style={{ "width": "15rem" }}>
            <DigiItem
              key={digi.name}
              {...digi} />
            </div>      
          ))
        }


      </div> */}
    </>
  )
}

export default DigiContenedor;