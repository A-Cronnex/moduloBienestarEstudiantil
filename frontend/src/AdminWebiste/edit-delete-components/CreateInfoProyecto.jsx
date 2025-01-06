import React, { useState } from "react";
import "../edit-delete-components/formObject.css"
import Header from "../AdminWebsiteComponents/Header";
import Footer from "../../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateInfoProyecto(){
    const navigate = useNavigate()
    const [proyectData, setProyectData] = useState({})
    const urlProyecto = `${import.meta.env.VITE_API_URL}proyecto/`


    const handleChange = (event) => {
        setProyectData({
            ...proyectData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        try{
            let response = axios.post(urlProyecto, proyectData, {withCredentials: true})
                alert("Proyecto Creado")
                navigate("/proyectos")
        } catch(error){
            alert("Un error ha ocurrido")
        }
        
    }

    return(
        <div className="wrapperAdmin">
            <Header />
            <div className="wrapper">
                <div className='form-container'>
                  <h1 className='title'>Crear proyecto</h1>
                  <form action="" className='form-info' method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
                    <input type="text" name="nombreProyecto" id="nombreProyecto" value={proyectData.nombreProyecto} onChange={handleChange}/>
                    <label htmlFor="fechaCreacion">Fecha Inicio</label>
                    <input type="date" name="fechaCreacion" id="fechaCreacion" value={proyectData.fechaCreacion} onChange={handleChange}/>
                    <label htmlFor="fechaFin">Fecha Fin</label>
                    <input type="date" name="fechaFin" id="fechaFin" value={proyectData.fechaFin} onChange={handleChange}/>

                    <div>
                        <button type="submit">Crear Proyecto</button>
                        <Link to="/proyectos">
                        <button className="back">Regresar</button>
                        </Link>
                    </div>
                    </form>
                </div>
                
            </div>
            <Footer></Footer> 
        </div>
    )
}

export default CreateInfoProyecto