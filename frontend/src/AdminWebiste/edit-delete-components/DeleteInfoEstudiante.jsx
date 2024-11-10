import React from "react"
import Header from "../AdminWebsiteComponents/Header"
import Footer from "../../Footer"
import { Link } from "react-router-dom"
import "../edit-delete-components/formObject.css"

function DeleteInfoEstudiante({data}){
    return(
        <div className="wrapperAdmin">
            <Header />
            <div className="wrapper">
                <div class='form-container'>
                  <h1 class='title'>Borrar estudiante</h1>
                  <form action="" class='form-info' method="GET">
                    
                    <label for="nombre">Nombre completo: </label>
                    <input type="text" name='nombreCompleto' id='nombre' class='inputForForms' />
                    
      
                    
                    <label for="edad">Edad: </label>
                    <input type="number" name='edad' id='edad' class='inputForForms'/>
                    
      
                      
                      <label for="cedula">Cedula: </label>
                      <input type="text" name='cedula' id='cedula' class='inputForForms'/>
                    
      
                      
                      <label for="Telefono1">Telefono 1: </label>
                      <input type="text" name='telefonoUno' id='Telefono1' class='inputForForms'/>
                      
      
      
                      
                      <label for="Telefono2">Telefono 2: </label>
                      <input type="text" name='telefonoDos' id='Telefono2' class='inputForForms'/>
                      
      
                      
                      <label for="correoInstitucional">Correo institucional: </label>
                      <input type="email" name='correoInstitucional' id='correoInstitucional' class='inputForForms'/>
                      
      
                    
                     <label for="yearCursado">Año actual que cursa: </label>
                     <input type="number" name='yearCursado' id='yearCursado' class='inputForForms'/>
      
                     <label for='proyectoQueParticipa'>Proyecto que va a participar: </label>
                     <select name="proyectoQueParticipa" id="proyectos">
                     </select>
                    
                     <label for="nombreFacultad">Facultad: </label>
                     <select name="nombreFacultad" id="facultades">
                     </select>
                      
      
      
            
                    <label for="tipoSangre">Tipo de Sangre: </label>
                    <select name='tipoSangre' id='tipoSangre'>
                    </select>
             
      
                    <label for="nombreCarrera">Carreras: </label>
                    <select name="nombreCarrera" id="carreras">
                     </select>
              
                <div>
                    <p>¿Incluye su copia de recibo de pago?</p>
                    <input type="checkbox" name="booleanoReciboPago" className="inputForForms" value="true"/>
                </div>

                <div>
                <button type='submit'>Borrar Estudiante</button>
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

export default DeleteInfoEstudiante