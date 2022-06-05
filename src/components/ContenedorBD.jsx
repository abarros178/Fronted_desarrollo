import React, { useState } from 'react'
import { borrarDB } from '../helpers/borrarDB';
import DigiItem from './DigiItem.jsx';
import Modal from './Modal.jsx';

const ContenedorBD = ({ imgs, id, setControlDB, valorBusqueda }) => {
  const [modeedition, setmodeedition] = useState(false)


  const eliminar = () => {
    borrarDB(id)
    setControlDB(true)
    console.log(id);
  }




  return (
    <div className='d-inline-flex p-2 bd-highlight'>
      {

        imgs.map(item => (
          <div className="card-group" style={{ "width": "15rem" }} key={item.name}>
            <DigiItem {...item} eliminar={eliminar} valorBusqueda={valorBusqueda} setmodeedition={setmodeedition} />
          </div>

        ))

      }
      {
        modeedition ? (<Modal id={id} img={imgs} valorBusqueda={valorBusqueda} setmodeedition 
          ={setmodeedition} setControlDB={setControlDB}/>) : <>


        </>
      }
    </div>
  )
}

export default ContenedorBD