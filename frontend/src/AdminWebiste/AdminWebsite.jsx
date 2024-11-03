import { useState } from "react"
import "../AdminWebiste/AdminWebsite.css"
import Header from "./AdminWebsiteComponents/Header"
import InfoTable from "./AdminWebsiteComponents/InfoTable"
import row from  "../utils/infoEstudiante.json"
import Footer from "../Footer"
function AdminWebsite(){
    return (

        <div className="wrapperAdmin">
            <Header />

            <div className="wrapperSearch">
                <div className="wrapperFromExcel">
                    <h1>Buscar estudiante...</h1>
                    <input type="search"></input>
                    <button className="excel">
                        <h1>Exportar Excel</h1>
                    </button>
                </div>
                <InfoTable data={row.row}/>
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default AdminWebsite