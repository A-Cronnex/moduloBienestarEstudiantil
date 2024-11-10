import React from "react";
import "../edit-delete-components/formObject.css"
import Header from "../AdminWebsiteComponents/Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
function CreateInfoProyecto({data}){
    return(
        <div className="wrapperAdmin">
        <Header />
        <div className="wrapper">
            <div class='form-container'>
              <h1 class='title'>Crear Proyecto</h1>
              <form action="" className='form-info' method="POST">
                <label htmlFor="idProyecto">ID Proyecto</label>
                <input type="text" name="idProyecto" id="idProyecto" value=""/>
                <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
                <input type="text" name="nombreProyecto" id="nombreProyecto" value=""/>
                <label htmlFor="fechaCreacion">Fecha Inicio</label>
                <input type="date" name="fechaCreacion" id="fechaCreacion" value=""/>
                <label htmlFor="fechaFin">Fecha Fin</label>
                <input type="date" name="fechaFin" id="fechaFin" value=""/>

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