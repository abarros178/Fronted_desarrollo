import { useState, useEffect } from 'react'
import useGetDataBase from '../hooks/useGetFirebase'
import AgregarBusqueda from './AgregarBusqueda'
import ContenedorBD from './ContenedorBD'
import DigiContenedor from './DigiContenedor.jsx'

const DigiApp = ({ busqueda = [] }) => {
  const [controlDB, setControlDB] = useState(false)
  

  const [valoresBusqueda, setValoresBusqueda] = useState(busqueda)
  const { arrayData } = useGetDataBase(controlDB, setControlDB)
  useEffect(() => {
    console.log(valoresBusqueda);

  }, [valoresBusqueda])

  return (
    <>
      <div className='container animate__animated animate__backInDown'>
        <h2>Aplicacion de Digimones</h2>
        <AgregarBusqueda setValoresBusqueda={setValoresBusqueda} />
        <hr />
        <ol>
          {
            valoresBusqueda.map((valorBusqueda) => (
              <DigiContenedor
                key={valorBusqueda}
                valorBusqueda={valorBusqueda}
                arrayData={arrayData}
                setControlDB={setControlDB}
              />
            ))
          }

          <div >
            {
              arrayData?.map(item => (
                <ContenedorBD key={item.valorBusqueda}{...item} setControlDB={setControlDB} />
              ))
            }
          </div>
        </ol>
      </div>
    </>
  )
}

export default DigiApp