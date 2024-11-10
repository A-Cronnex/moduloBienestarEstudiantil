import React from "react"
import Header from "../AdminWebsiteComponents/Header"
import Footer from "../../Footer"
import "../edit-delete-components/formObject.css"
import { Link } from "react-router-dom"
import "../edit-delete-components/formObject.css"

function DeleteInfoProyecto({data}){
    return(
        <div className="wrapperAdmin">
            <Header />
            <div className="wrapper">
                <div class='form-container'>
                  <h1 class='title'>Borrar proyecto</h1>
                  <form action="" class='form-info' method="GET">
                    <label htmlFor="idProyecto">ID Proyecto</label>
                    <input type="text" name="idProyecto" id="idProyecto" value=""/>
                    <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
                    <input type="text" name="nombreProyecto" id="nombreProyecto" value=""/>
                    <label htmlFor="fechaCreacion">Fecha Inicio</label>
                    <input type="date" name="fechaCreacion" id="fechaCreacion" value=""/>
                    <label htmlFor="fechaFin">ID Proyecto</label>
                    <input type="date" name="fechaFin" id="fechaFin" value=""/>

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

export default DeleteInfoProyecto