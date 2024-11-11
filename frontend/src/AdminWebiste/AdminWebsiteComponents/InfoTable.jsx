
import { text } from "@fortawesome/fontawesome-svg-core"
import "./infotable.css"
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Button({type,texto, clase, id}){
    let [seleccionado, setSeleccionado] = useState(false)
    const navigation = useNavigate()
    let [idEP, setIdEP] = useState(id)

    const onClickNavigation = () => {
        if (clase == "estudiante"){
            if(type == "eliminar" ){
                navigation(`/borrarEstudiante/${id}`)
            }

            if(type == "editar"){
                navigation(`/editarEstudiante/${id}`)
            }
        }

        if(clase == "proyecto"){
            if(type == "eliminar" ){
                navigation(`/proyectos/borrarProyecto/${id}`)
            }

            if(type == "editar"){
                navigation(`/proyectos/editarProyecto/${id}`)
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



function InfoTable({clase,data, headers}){


    let returnCheckmark = (element) => {
        if (typeof element === "boolean"){
            if (element){
                return '✅'
            } else{
                return '❌'
            }
        } else{
            return element
        }
    }

    useEffect(() =>{
     console.log(data)   
    })

    return (
        <table className={["infoTable",clase].join(" ")}>
            <thead>
                <tr>
                    {
                        headers.map((row,index)=>{
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
                        let values = Object.values(row)
                        return(
                            <tr key={index}>
                                {
                                    values.map((Element, i) => {
                                        return(
                                            <td key={i}>
                                                {returnCheckmark(Element)}
                                            </td>
                                        )
                                    })
                                }

                                <td>
                                
                                <div>
                                <Button type="editar" texto="Editar" clase = {clase} id={clase == 'estudiante'? row.cedula : row.idProyecto}/>
                                <Button type="eliminar" texto="Eliminar" clase = {clase} id={clase == 'estudiante'? row.cedula : row.idProyecto}/>
                                </div>
                                {clase == 'estudiante'?
                                 <Button type="agregarExcelBoton" texto="Agregar a excel" id={row.cedula}/>
                                 : null}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )  
}


export default InfoTable