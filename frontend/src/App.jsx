import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EstudianteLink, {ProyectoLink} from './AdminWebiste/EstudianteTable.jsx'
import EditInfoEstudiante from './AdminWebiste/edit-delete-components/EditInfoEstudiante.jsx'
import DeleteInfoEstudiante from './AdminWebiste/edit-delete-components/DeleteInfoEstudiante.jsx'
import DeleteInfoProyecto from './AdminWebiste/edit-delete-components/DeleteInfoProyecto.jsx'
import EditInfoProyecto from './AdminWebiste/edit-delete-components/EditInfoProyecto.jsx'
import CreateInfoProyecto from './AdminWebiste/edit-delete-components/CreateInfoProyecto.jsx'
function App() {
     return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<EstudianteLink/>}></Route>
            <Route path='/proyectos' element={<ProyectoLink/>}></Route>
            <Route path='/editarEstudiante' element={<EditInfoEstudiante/>}></Route>
            <Route path='/borrarEstudiante' element={<DeleteInfoEstudiante/>}></Route>
            <Route path='/proyectos/borrarProyecto' element={<DeleteInfoProyecto/>}></Route>
            <Route path='/proyectos/editarProyecto' element={<EditInfoProyecto/>}></Route>
            <Route path='/proyectos/crearProyecto' element={<CreateInfoProyecto/>}></Route>
        </Routes>
        </BrowserRouter>
     )
}

export default App
