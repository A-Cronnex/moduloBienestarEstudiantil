import { FACULTADES, CARRERAS, TIPO_SANGRE} from "./constantes.js"



const carreraSelect = document.getElementById("carreras")
const facultadSelect = document.getElementById("facultades")
const tipoSangreSelect = document.getElementById("tipoSangre")

let diccionarioFacultades = {

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



Object.values(diccionarioFacultades).forEach((facultad) => {
     const elementoAgregado = facultadSelect.appendChild(facultad.elemento)
     console.log(facultad.nombreFacultad)
     elementoAgregado.innerText = facultad.nombreFacultad
     elementoAgregado.setAttribute("value",facultad.nombreFacultad)
})

let facultadesKeys = Object.keys(CARRERAS)

Object.values(CARRERAS).forEach((facultad,index) => {
    diccionarioCarreras[facultadesKeys[index]] = {
        carreras: facultad,
        elemento: document.createElement("option")
    }
})

/* Actualizar select de carreras segun el valor presente en facultad*/

let optionsArray = []


if (facultadSelect.value == 'Facultad de Ciencias y Tecnología'){
    diccionarioCarreras[facultadSelect.value].carreras.forEach((carrera) => {
        const elementoAgregado = document.createElement("option")
        carreraSelect.appendChild(elementoAgregado)
        elementoAgregado.innerText = carrera
        elementoAgregado.setAttribute("value",carrera)
        optionsArray.push(elementoAgregado)
    })
}

facultadSelect.addEventListener("change",()=>{
    
    console.log(facultadSelect.value)
    optionsArray.forEach((elemento) => {
        carreraSelect.removeChild(elemento)
    })

    
    optionsArray= []



    diccionarioCarreras[facultadSelect.value].carreras.forEach((carrera) => {
        const elementoAgregado = document.createElement("option")
        carreraSelect.appendChild(elementoAgregado)
        elementoAgregado.innerText = carrera
        elementoAgregado.setAttribute("value",carrera)
        optionsArray.push(elementoAgregado)

    })
})

/* Agregar tipo de sangre */

TIPO_SANGRE.forEach((sangre) => {
    let elementoAgregado = document.createElement("option")
    tipoSangreSelect.appendChild(elementoAgregado)
    elementoAgregado.innerText = sangre
    elementoAgregado.setAttribute("value",sangre)
})

/*Comprobar si cambia */

tipoSangreSelect.addEventListener("change",() => {
    console.log(tipoSangreSelect.value)
})

