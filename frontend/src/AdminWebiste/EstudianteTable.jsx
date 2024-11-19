import { useState, useEffect } from "react"
import "../AdminWebiste/EstudianteTable.css"
import Header from "./AdminWebsiteComponents/Header"
import InfoTable from "./AdminWebsiteComponents/InfoTable"
import headerEst from  "../utils/infoEstudiante.json"
import headerProy from "../utils/infoProyecto.json"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import axios from 'axios'
import * as XLSX from 'xlsx'

function EstudianteLink(){
    let [estExcel,setEstExcel] = useState([])
    let [opcion, setOpcion] = useState("");
    let [searchInfo, setSearchInfo] = useState("")
    const endpoint = `${import.meta.env.VITE_API_URL}estudiante/`
    let [dataEst,setDataEst] = useState([])
    let [searchData, setSearchData] = useState([])
    let [loading, setLoading] = useState(true)

    const functionCallInside = (jsonElement) => {
        setEstExcel([
            ...estExcel,
            jsonElement
        ])
    }

    const removeAtIndex = (itemtoRemove) => {
        setEstExcel(estExcel.filter((item) => item !== itemtoRemove ))
    }


    useEffect(() => {
        fetchData()

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
        console.log( "JSON de excel: " + estExcel)
    }, [searchInfo,opcion,estExcel])


    const fetchData = async() => {
        console.log(endpoint)
        try{
            const response = await axios.get(endpoint, {withCredentials: true})
            const {data} = response
            setDataEst(data)
            setLoading(false)
        } catch(error){
            console.log(error)
        }
        
    }

    const handleExport = () => {
        if (estExcel.length === 0) {
            alert('No hay datos para exportar');
            return;
        }
    
        try {

            console.log('estExcel antes de exportar:', estExcel);
            const parsedData = estExcel.map(item => JSON.parse(item))
            console.log(parsedData)
            // Create formatted data with Spanish headers
            const formattedData = parsedData.map(est => ({
                'Nombre Completo': est.nombreCompleto,
                'Edad': est.edad,
                'Cédula': est.cedula,
                'Teléfono Principal': est.telefonoUno,
                'Teléfono Secundario': est.telefonoDos,
                'Correo Institucional': est.correoInstitucional,
                'Año Cursado': est.yearCursado,
                'Proyecto': est.proyectoQueParticipa,
                'Facultad': est.nombreFacultad,
                'Tipo de Sangre': est.tipoSangre,
                'Carrera': est.nombreCarrera,
                'Recibo de Pago': est.booleanoReciboPago ? 'Sí' : 'No'
            }));

            
            const worksheet = XLSX.utils.json_to_sheet(formattedData);
            

            const columnWidths = [
                { wch: 30 }, // Nombre Completo
                { wch: 8 },  // Edad
                { wch: 15 }, // Cédula
                { wch: 20 }, // Teléfono Principal
                { wch: 20 }, // Teléfono Secundario
                { wch: 35 }, // Correo Institucional
                { wch: 15 }, // Año Cursado
                { wch: 20 }, // Proyecto
                { wch: 50 }, // Facultad
                { wch: 15 }, // Tipo de Sangre
                { wch: 40 }, // Carrera
                { wch: 15 }  // Recibo de Pago
            ];
    
            worksheet['!cols'] = columnWidths;
    
            // Create workbook and append worksheet
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');
            
            // Generate Excel file
            XLSX.writeFile(workbook, 'lista_estudiantes.xlsx');
        } catch (error) {
            console.error('Error al exportar:', error);
            alert('Error al crear el archivo Excel: ' + error.message);
        }
      }

    if(loading){
        return(<>Cargando...</>)
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
                    <button className="excel" onClick={handleExport}>
                        <h1>Exportar Excel</h1>
                    </button>
                </div>
                <InfoTable functionAppendArray = {functionCallInside} functionRemoveFromArray={removeAtIndex} headers={headerEst.row} clase="estudiante" data={ opcion == "Buscar estudiante por..." || opcion=="" ? dataEst : searchData} />
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
                const data = dataProyecto.filter((estudiante) => estudiante.idProyecto.toString().includes(searchInfo))
                setSearchData(data)
            }
        }
        console.log(dataProyecto)
    }, [searchInfo,opcionProyecto])


    const fetchData = async() => {
        console.log(endpoint)
        const response = await axios.get(endpoint, {withCredentials: true})
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