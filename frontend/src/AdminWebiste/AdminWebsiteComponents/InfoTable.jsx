
import { text } from "@fortawesome/fontawesome-svg-core"
import "./infotable.css"
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Button({type,texto, clase}){
    let [seleccionado, setSeleccionado] = useState(false)
    const navigation = useNavigate()

    const onClickNavigation = () => {
        if (clase == "estudiante"){
            if(type == "eliminar" ){
                navigation("/borrarEstudiante")
            }

            if(type == "editar"){
                navigation("/editarEstudiante")
            }
        }

        if(clase == "proyecto"){
            if(type == "eliminar" ){
                navigation("/proyectos/borrarProyecto")
            }

            if(type == "editar"){
                navigation("/proyectos/editarProyecto")
            }
        }
    }

    let foo = () => {
        if (seleccionado && type == "agregarExcelBoton"){
            texto = "Agregado a excel"
        }  else {
            texto
        }
        return texto
    }
    return(
        <button className={`${seleccionado && type == "agregarExcelBoton"? [type,"seleccionado"].join(" ") : type}`} onClick={()=> {setSeleccionado(!seleccionado); onClickNavigation()}}>
            {foo()}
        </button>
    )
}



function InfoTable({clase,data}){

    let foo = (index,array) => {
        if(index == array.length - 1){
            return(
                <>
                <Button type="editar" texto="Editar" clase = {clase}/>
                <Button type="eliminar" texto="Eliminar" clase = {clase}/>
                {clase == 'estudiante'?
                    <Button type="agregarExcelBoton" texto="Agregar a excel"/>
                : null}
                </>
            )
        } else {
            return (
                <p>Hola</p>
            )
        }
    }

    return (
        <table className={["infoTable",clase].join(" ")}>
            <thead>
                <tr>
                    {
                        data.map((row,index)=>{
                            return(
                                <td id={index}>
                                    {row}
                                </td>
                            )
                        })

                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row,index)=>{
                        return(
                            <tr>
                                {
                                    data.map((row,index) => {
                                        return(
                                            <td id={index}>
                                                {foo(index,data)}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )  
}


export default InfoTable