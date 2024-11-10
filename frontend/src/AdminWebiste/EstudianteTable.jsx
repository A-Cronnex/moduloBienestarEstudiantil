import { useState } from "react"
import "../AdminWebiste/EstudianteTable.css"
import Header from "./AdminWebsiteComponents/Header"
import InfoTable from "./AdminWebsiteComponents/InfoTable"
import row from  "../utils/infoEstudiante.json"
import rows from "../utils/infoProyecto.json"
import Footer from "../Footer"
import { Link } from "react-router-dom"
function EstudianteLink(){
    let [opcion, setOpcion] = useState("");
    return (

        <div className="wrapperAdmin">
            <Header />

            <div className="wrapperSearch">
                <div className="wrapperFromExcel">
                    <select onChange={(event) => setOpcion(event.target.value)}>
                        <option>Buscar estudiante por...</option>
                        <option  value="nombre">Nombre</option>
                        <option  value="proyecto">Proyecto</option>
                    </select>
                    <h1>Buscar estudiante...</h1>
                    <input type="search"></input>
                    <button className="excel">
                        <h1>Exportar Excel</h1>
                    </button>
                </div>
                <InfoTable data={row.row} clase="estudiante"/>
            </div>
            <Footer></Footer>
        </div>
        
    )
}

function ProyectoLink(){
    let [opcionProyecto, setOpcionProyecto] = useState("")
    return (

        <div className="wrapperAdmin">
            <Header />

            <div className="wrapperSearch">
                <div className="wrapperFromExcel">
                    <select onChange={(event) => setOpcionProyecto(event.target.value)}>
                        <option>Buscar proyecto por...</option>
                        <option  value="nombreProyecto">Nombre</option>
                        <option  value="IDproyecto">ID del proyecto</option>
                    </select>
                    <h1>Buscar proyecto...</h1>
                    <input type="search"></input>
                    <Link to="/proyectos/crearProyecto">
                    <button className="crearProyecto">
                        <h1>Crear proyecto</h1>
                    </button>
                    </Link>
                </div>
                <InfoTable data={rows.rows} clase="proyecto"/>
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default EstudianteLink
export {ProyectoLink}