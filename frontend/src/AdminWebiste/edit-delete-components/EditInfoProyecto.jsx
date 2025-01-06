import React, { useEffect, useState } from "react"
import Header from "../AdminWebsiteComponents/Header"
import Footer from "../../Footer"
import { Link, useParams, useNavigate } from "react-router-dom"
import "../edit-delete-components/formObject.css"
import axios from "axios"


function EditInfoProyecto(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [proyectData, setProyectData] = useState({})
    const urlProyecto = `${import.meta.env.VITE_API_URL}proyecto/${id}/`

    useEffect(() => {
        fetchProyectData()
    },[])

    const fetchProyectData = async()=> {
        try {
        let response = await axios.get(urlProyecto, {withCredentials: true})
        const {data} = response
        setProyectData(data) 
        }catch(error){
            console.log("Error al traer los datos")
        } 
    }

    const handleChange = (event) => {
        setProyectData({
            ...proyectData,
            [event.target.name]: event.target.value
        })
    }

    const handleEdit = async () => {
        try{
            let response = axios.put(urlProyecto, proyectData, {withCredentials: true})
                alert("Proyecto actualizado")
                navigate("/proyectos")
        } catch(error){
            alert("Un error ha ocurrido")
        }
        
    }

    return(
        <div className="wrapperAdmin">
            <Header />
            <div className="wrapper">
                <div class='form-container'>
                  <h1 class='title'>Editar proyecto</h1>
                  <form action="" className='form-info' method="PUT" onSubmit={handleEdit}>
                    <label htmlFor="idProyecto">ID Proyecto</label>
                    <input type="text" name="idProyecto" id="idProyecto" value={proyectData.idProyecto} onChange={handleChange}/>
                    <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
                    <input type="text" name="nombreProyecto" id="nombreProyecto" value={proyectData.nombreProyecto} onChange={handleChange}/>
                    <label htmlFor="fechaCreacion">Fecha Inicio</label>
                    <input type="date" name="fechaCreacion" id="fechaCreacion" value={proyectData.fechaCreacion} onChange={handleChange}/>
                    <label htmlFor="fechaFin">Fecha Fin</label>
                    <input type="date" name="fechaFin" id="fechaFin" value={proyectData.fechaFin} onChange={handleChange}/>

                    <div>
                        <button type="submit">Editar Proyecto</button>
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

export default EditInfoProyecto