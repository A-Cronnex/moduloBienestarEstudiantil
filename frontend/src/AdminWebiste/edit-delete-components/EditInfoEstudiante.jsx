import React, { useEffect, useState } from "react"
import Header from "../AdminWebsiteComponents/Header"
import Footer from "../../Footer"
import { Link, useParams, useNavigate } from "react-router-dom"
import "../edit-delete-components/formObject.css"
import axios from "axios"
import carreras from "../../utils/carreras.json"
import facultades from "../../utils/faculties.json"
import tipoSangre from "../../utils/sangre.json"

function EditInfoEstudiante(){
    const {id} = useParams();
    const [data, setData] = useState({
        nombreCompleto: "",
        edad: "",
        cedula: "",
        telefonoUno: "",
        telefonoDos: "",
        correoInstitucional: "",
        yearCursado: "",
        proyectoQueParticipa: "",
        nombreFacultad: "",
        tipoSangre: "",
        nombreCarrera: ""
    })
    const [proyectData ,setProyectData] = useState([])
    const nombreFacultades = facultades.facultades
    const url = `${import.meta.env.VITE_API_URL}estudiante/${id}/`
    const urlProyecto = `${import.meta.env.VITE_API_URL}proyecto`
    const sangreTipo = tipoSangre.tipoSangre
    const carrera = carreras.carreras
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            fetchData()
            fetchDataP()
        }
        console.log(data)
        console.log(data.nombreCarrera)
        console.log(data.nombreFacultad)
        console.log(carrera)
    },[id])

    const fetchData = async() => {

        try {
        const response = await axios.get(url, {withCredentials: true})
        const {data} = response
        setData(data)
        setLoading(false)
        } catch(error) {
            setLoading(false)
        }
    }

    const fetchDataP = async() => {
        const responseP = await axios.get(urlProyecto, {withCredentials: true})
        const {data} = responseP
        setProyectData(data)

    }



    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdate = async () => {

        try{
            const response = axios.put(url,data, {withCredentials: true})
            alert("Estudiante actualizado con exito")
            navigate("/")

        } catch(error){
            alert(error)
        }
    }

    if(loading){
        return <div>Loading</div>
    }

    return(
        <div className="wrapperAdmin">
            <Header />
            <div className="wrapper">
                <div className='form-container'>
                  <h1 className='title'>Editar estudiante </h1>
                  <form action="" className='form-info' method="PUT" onSubmit={handleUpdate}>
                    
                    <label htmlFor="nombre">Nombre completo: </label>
                    <input type="text" name='nombreCompleto' id='nombre' className='inputForForms' value={data.nombreCompleto} onChange={handleChange}/>
                    
      
                    
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" name='edad' id='edad' value={data.edad} onChange={handleChange} className='inputForForms'/>
                    
      
                      
                      <label htmlFor="cedula">Cedula: </label>
                      <input type="text" name='cedula' value={data.cedula} onChange={handleChange} id='cedula' className='inputForForms'/>
                    
      
                      
                      <label htmlFor="Telefono1">Telefono 1: </label>
                      <input type="text" name='telefonoUno' value={data.telefonoUno} onChange={handleChange} id='Telefono1' className='inputForForms'/>
                      
      
      
                      
                      <label htmlFor="Telefono2">Telefono 2: </label>
                      <input type="text" name='telefonoDos' value={data.telefonoDos} onChange={handleChange} id='Telefono2' className='inputForForms'/>
                      
      
                      
                      <label htmlFor="correoInstitucional">Correo institucional: </label>
                      <input type="email" name='correoInstitucional' value={data.correoInstitucional} onChange={handleChange} id='correoInstitucional' className='inputForForms'/>
                      
      
                    
                     <label htmlFor="yearCursado">Año actual que cursa: </label>
                     <input type="number" name='yearCursado' value={data.yearCursado} onChange={handleChange} id='yearCursado' className='inputForForms'/>
      
                     <label htmlFor='proyectoQueParticipa'>Proyecto que va a participar: </label>
                     <select name="proyectoQueParticipa" id="proyectos" value={data.proyectoQueParticipa} onChange={handleChange}>
                        {proyectData.map((proyecto, index) => {
                            return(<option key={index} value={proyecto.nombreProyecto}> {proyecto.nombreProyecto}</option>)
                        })}
                     </select>
                    
                     <label htmlFor="nombreFacultad">Facultad: </label>
                     <select name="nombreFacultad" id="facultades" value={data.nombreFacultad} onChange={handleChange}>
                     {nombreFacultades.map((facultad, index) => {
                            return(<option key={index} value={facultad.nombre}> {facultad.nombre} </option>)
                        })}
                     </select>
                      
                      
                    <label htmlFor="tipoSangre">Tipo de Sangre: </label>
                    <select name='tipoSangre' id='tipoSangre' value={data.tipoSangre} onChange={handleChange}>
                        {sangreTipo.map((sangre, index) => {
                            return(<option key={index} value={sangre}>{sangre}</option>)
                        })}
                    </select>
             
      
                    <label htmlFor="nombreCarrera">Carreras: </label>
                    <select name="nombreCarrera" id="carreras" value={data.nombreCarrera} onChange={handleChange}>
                        {
                           
                          
                            carrera[data.nombreFacultad].map((carrera,index) => {
                                return(<option key={index} value={carrera}>{carrera}</option>)
                            })
                        }
                     </select>
              
                 <div>
                    <p>¿Incluye su copia de recibo de pago?</p>
                    <input type="checkbox" name="booleanoReciboPago" className="inputForForms" checked={data.booleanoReciboPago} onChange={(event) => setData({...data, booleanoReciboPago: data.booleanoReciboPago ? false : true})}/>
                 </div>

                 <div>
                 <button type='submit'>EDITAR</button>
                <Link to="/">
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

export default EditInfoEstudiante