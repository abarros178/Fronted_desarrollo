import { useState, useEffect } from 'react'
import getFirebase from '../helpers/getFirebase'

const useGetDataBase = (controlDB,setControlDB) => {
    
    const [datosDB, setDatosDB] = useState({
        arrayData: [],
        cargando: true,     
    })
    useEffect(() => {
        getFirebase()
            .then((arrayData) => {
                setDatosDB({
                    arrayData,
                    cargando: false    
                })
            }).catch((err) => {
                console.log(err)
            });

            setControlDB(false)
    }, [controlDB])


    return datosDB;
}

export default useGetDataBase