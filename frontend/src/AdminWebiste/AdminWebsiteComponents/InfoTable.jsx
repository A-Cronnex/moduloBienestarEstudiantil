
import { text } from "@fortawesome/fontawesome-svg-core"
import "./infotable.css"
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Button({type,texto, clase, id, funcAppendArray, funcRemoveFromArray, element}){
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

    let fooOnClick = (value) => {
        if(type == "agregarExcelBoton"){

            if (value != undefined){
                if (seleccionado){
                    funcRemoveFromArray(value)
                    console.log("Elemento: " + value)
                } else {
                    funcAppendArray(value)
                    
                }
            }
        }
    }

    return(
        <button className={`${seleccionado && type == "agregarExcelBoton"? [type,"seleccionado"].join(" ") : type}`} onClick={()=> {setSeleccionado(!seleccionado); onClickNavigation() ; fooOnClick(element)}}>
            {foo()}
        </button>
    )
}



function InfoTable({clase,data, headers, functionAppendArray, functionRemoveFromArray}){


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
                        let keys = Object.keys(row)
                        let diccionario = Object.fromEntries(keys.map((key, index) => [key, values[index]]))
                        
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
                                 <Button type="agregarExcelBoton" texto="Agregar a excel" id={row.cedula} element={JSON.stringify(row,null,2)} funcAppendArray={functionAppendArray} funcRemoveFromArray={functionRemoveFromArray} />
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