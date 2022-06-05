import { UpdateDB } from '../helpers/UpdateDB';
import React, { useState } from 'react'


const Modal = ({ valorBusqueda, id, imgs, setmodeedition ,setControlDB}) => {
    const [valorBusquedainput, setValorBusquedainput] = useState('');

    
    const cerrar=()=>{
        setmodeedition(false)
    }

    const handleChange = (e) => {
        setValorBusquedainput(e.target.value);
    };

    const envioBusqueda = async (e) => {
        e.preventDefault();

        if (!valorBusquedainput.trim().length > 0) {
            alert("Debe rellenar el campo");
            return;
        }
        
        setValorBusquedainput((valor) => [valorBusqueda, ...valor]);
        console.log(valorBusqueda);
        UpdateDB(id,{valorBusqueda:valorBusquedainput}).then(()=>console.log('i am here'))
        setValorBusquedainput("");
        setControlDB(true)
        cerrar()
    };


    return (
        <div>{
            <div id='modal'
            className="modal" tabIndex="-1" style={{ "display": "block"}}>

                <div className="modal-dialog">
                    <div className="modal-content rounded-0" >
                        <div className="modal-header">
                            <h5 className="modal-title">Editar estudiante</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cerrar}></button>
                        </div>
                        <div className="modal-body">
                            <p>Aqui puedes editar cualquier estudiante</p>
                        </div>
                            <form onSubmit={envioBusqueda}>

                               <input onChange={handleChange} type="text" defaultValue={valorBusqueda}/>
                               
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cerrar}>Close</button>
                                    <button type="submit" className="btn btn-primary" >Save changes</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>



        }
        </div>
    )
}

export default
    Modal