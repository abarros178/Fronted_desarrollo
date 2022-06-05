import { useEffect, useState } from 'react'
import { getAll } from '../helpers/getAll';



const useGetallDigi = () => {

    const [estado, setEstado] = useState({
        digi: [],
        cargando: true,
    });

    

    useEffect(() => {
        getAll()
            .then((imgs) => {
                setEstado({
                    digi: imgs,
                    cargando: false,
                });
            })

    }, [])
    return estado;

}

export default useGetallDigi