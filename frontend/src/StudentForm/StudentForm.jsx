import { useState } from 'react'
import './StudentForm.css'
import facultades from "../utils/faculties.json"
import carreras from "../utils/carreras.json"
import Nav from '../nav'
import Footer from '../Footer'

function StudentForm() {
  const [carrera, setCarrera] = useState("")
  const [facultad, setFacultad] = useState("Facultad de Ciencias y Tecnología")

  const facultadesObjetos = facultades.facultades
  const diccionarioCarreras = carreras.carreras

  const tipoSange = ["O+","O-","B+","B-","A+","A-","AB+","AB-"]

  //Esta parte puede generar errores y no esta autenticada
  const changeFunctionFac = (e) => {
    setFacultad(e.target.value)
  }

  const changeFunctionCareer = (e) => {
    setFacultad(e.target.value)
  }

  //Faltan cosas por arreglar en el form, como lo de la sangre
  return (
    <>
    <div className="wrapper">
      <Nav />
      
        <div className='form-container'>
        <h1 className='title'>Ingrese Información Servicio Social</h1>
            <form action="" className='form-info'>
              
              <label htmlFor="nombre">Nombre completo: </label>
              <input type="text" name='nombre' id='nombre' className='inputForForms' />
              

              
              <label htmlFor="edad">Edad: </label>
              <input type="number" name='edad' id='edad' className='inputForForms'/>
              

                
                <label htmlFor="cedula">Cedula: </label>
                <input type="text" name='cedula' id='cedula' className='inputForForms'/>
              

                
                <label htmlFor="Telefono1">Telefono 1: </label>
                <input type="text" name='Telefono1' id='Telefono1' className='inputForForms'/>
                


                
                <label htmlFor="Telefono2">Telefono 2: </label>
                <input type="text" name='Telefono2' id='Telefono2' className='inputForForms'/>
                

                
                <label htmlFor="cedula">Correo institucional: </label>
                <input type="text" name='cedula' id='cedula' className='inputForForms'/>
                

              
               <label htmlFor="edad">Año actual que cursa: </label>
               <input type="number" name='edad' id='edad' className='inputForForms'/>

               <label htmlFor='proyectos'>Proyecto que va a participar: </label>
               <select>
                    <option></option>
               </select>
              
               <label htmlFor="facultades">Facultad: </label>
               <select name="facultades" id="facultades" value={facultad} onChange={changeFunctionFac}>
                 {
                    facultadesObjetos.map((nombre,value) => {
                        return (
                          <option value={nombre.nombre} id={value}>{nombre.nombre} </option>
                           )
                          })
                 }     
                </select>
                


      
        <label htmlFor="tipoSangre">Tipo de Sangre: </label>
        <select name='tipoSangre' id='tipoSangre'>
          {tipoSange.map((sangre,value) => {

            return(
            <option value={sangre} id={value}>{sangre}</option>
            )
          })}
        </select>
       

        <label htmlFor="carreras">Carreras: </label>
        <select name="carreras" id="carreras">
        {
            diccionarioCarreras[facultad].map((carrera,id) => {
              return (
                <option value={carrera} id={id}>{carrera}</option>
              )
            })
          }
        </select>

      
          <p>¿Incluye su copia de recibo de pago?</p>

          
          <div>
          <label htmlFor="option">Si</label>
          <input type="radio" id='yes' value={"yes"} name='option'></input>

          <label htmlFor="option">No</label>
          <input type="radio" id='no' value={"no"} name='option'></input>
          </div>

          <button type='submit'>ENVIAR</button>
              </form>
          </div>

          <Footer></Footer>
      </div>
    </>
  )
}

export default StudentForm