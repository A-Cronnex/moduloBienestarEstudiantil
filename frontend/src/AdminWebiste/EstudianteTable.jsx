import { useState, useEffect } from "react"
import "../AdminWebiste/EstudianteTable.css"
import Header from "./AdminWebsiteComponents/Header"
import InfoTable from "./AdminWebsiteComponents/InfoTable"
import headerEst from  "../utils/infoEstudiante.json"
import headerProy from "../utils/infoProyecto.json"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import axios from 'axios'

function EstudianteLink(){
    let [estExcel,setEstExcel] = useState([])
    let [opcion, setOpcion] = useState("");
    let [searchInfo, setSearchInfo] = useState("")
    const endpoint = `${import.meta.env.VITE_API_URL}estudiante/`
    let [dataEst,setDataEst] = useState([])
    let [searchData, setSearchData] = useState([])


    useEffect(() => {
        fetchData()
        let namesEst = dataEst 
        let namesEstKeys = namesEst.flatMap(estudiante => estudiante.nombreCompleto)
        console.log('Nombres: ' + namesEstKeys)
        console.log('Opcion: ' + opcion)

        if(searchInfo!=undefined){
            if(opcion == 'nombre'){
                const data = dataEst.filter((estudiante) => estudiante.nombreCompleto.includes(searchInfo))
                setSearchData(data)
            } else if (opcion == 'proyecto'){
                const data = dataEst.filter((estudiante) => estudiante.proyectoQueParticipa.includes(searchInfo))
                setSearchData(data)
            }
        }
        console.log(searchData)
    }, [searchInfo,opcion])


    const fetchData = async() => {
        console.log(endpoint)
        const response = await axios.get(endpoint)
        console.log(response)
        const {data} = response
        setDataEst(data)
        return data
    }

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
                    <input type="search" onChange={(event) => {setSearchInfo(event.target.value)}}></input>
                    <button className="excel">
                        <h1>Exportar Excel</h1>
                    </button>
                </div>
                <InfoTable headers={headerEst.row} clase="estudiante" data={ opcion == "Buscar estudiante por..." || opcion=="" ? dataEst : searchData}/>
            </div>
            <Footer></Footer>
        </div>
        
    )
}

function ProyectoLink(){

    let [opcionProyecto, setOpcionProyecto] = useState("");
    let [searchInfo, setSearchInfo] = useState("")
    const endpoint = `${import.meta.env.VITE_API_URL}proyecto/`
    let [dataProyecto,setDataProyecto] = useState([])
    let [searchData, setSearchData] = useState([])


    useEffect(() => {
        fetchData()

        if(searchInfo!=undefined){
            if(opcionProyecto == 'nombreProyecto'){
                const data = dataProyecto.filter((estudiante) => estudiante.nombreProyecto.includes(searchInfo))
                setSearchData(data)
            } else if (opcionProyecto == 'IDproyecto'){
                const data = dataEst.filter((estudiante) => estudiante.idProyecto.includes(searchInfo))
                setSearchData(data)
            }
        }
        console.log(searchData)
    }, [searchInfo,opcionProyecto])


    const fetchData = async() => {
        console.log(endpoint)
        const response = await axios.get(endpoint)
        console.log(response)
        const {data} = response
        setDataProyecto(data)
        return data
    }

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
                    <input type="search" onChange={(event) => setSearchInfo(event.target.value)}></input>
                    <Link to="/proyectos/crearProyecto">
                    <button className="crearProyecto">
                        <h1>Crear proyecto</h1>
                    </button>
                    </Link>
                </div>
                <InfoTable headers={headerProy.rows} clase="proyecto" data={opcionProyecto == "Buscar proyecto por..." || opcionProyecto == "" ? dataProyecto : searchData}/>
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default EstudianteLink
export {ProyectoLink}