import React from 'react'

const DigiItem = ({ valorBusqueda,name, img, level ,eliminar,id,setmodeedition}) => {
  const cerrar=()=>{
    setmodeedition(true)
}
  return (

    <div >
      <div className='card animate__animated animate__fadeInDown'>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{valorBusqueda}</h5>
          <p>El level es: {level}</p>
          <button onClick={() => eliminar()} className='btn btn-danger m-1'>Eliminar</button>
          <button onClick={() => cerrar()} className='btn btn-warning m-1'>Editar</button>
        </div>
      </div>
    </div>






  )
}

export default DigiItem    
