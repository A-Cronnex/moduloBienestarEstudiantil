import { FACULTADES, CARRERAS, TIPO_SANGRE} from "./constantes.js"



const carreraSelect = document.getElementById("carreras")
const facultadSelect = document.getElementById("facultades")
const tipoSangreSelect = document.getElementById("tipoSangre")

let diccionarioFacultades = {

}

let diccionarioTipoSangre = {

}

let diccionarioCarreras = {

}


FACULTADES.map((facultad,id) => {
    diccionarioFacultades["facultad" + id] = {
        nombreFacultad: facultad.nombre,
        elemento: document.createElement("option"),
        valor: facultad.nombre

    }
})

Object.values(diccionarioFacultades).forEach((facultad) => {
     const elementoAgregado = facultadSelect.appendChild(facultad.elemento)
     elementoAgregado.innerText = facultad.nombreFacultad
     elementoAgregado.setAttribute("value",facultad.nombreFacultad)
})

/*CARRERAS.map((facultad,id) => {
    diccionarioCarreras[facultad] = {
        carreras: facultad.nombre,

    }
})

Object.values(diccionarioFacultades).forEach((facultad) => {
     const elementoAgregado = facultadSelect.appendChild(facultad.elemento)
     console.log(facultad.nombreFacultad)
     elementoAgregado.innerText = facultad.nombreFacultad
     elementoAgregado.setAttribute("value",facultad.nombreFacultad)
})*/

let facultadesKeys = Object.keys(CARRERAS)

Object.values(CARRERAS).forEach((facultad,index) => {
    diccionarioCarreras[facultadesKeys[index]] = {
        carreras: facultad,
        elemento: document.createElement("option")
    }
})

facultadSelect.addEventListener("change",()=>{
    diccionarioCarreras[facultadSelect.value].carreras.forEach((carrera) => {
        const elementoAgregado = document.createElement("option")
        carreraSelect.appendChild(elementoAgregado)
        elementoAgregado.innerText = carrera
        elementoAgregado.setAttribute("value",carrera)
    })
})

if (facultadSelect.value == 'Facultad de Ciencias y Tecnología'){
    diccionarioCarreras[facultadSelect.value].carreras.forEach((carrera) => {
        const elementoAgregado = document.createElement("option")
        carreraSelect.appendChild(elementoAgregado)
        elementoAgregado.innerText = carrera
        elementoAgregado.setAttribute("value",carrera)
    })
}


