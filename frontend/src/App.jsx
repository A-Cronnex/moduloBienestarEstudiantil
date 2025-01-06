import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EstudianteLink, {ProyectoLink} from './AdminWebiste/EstudianteTable.jsx'
import EditInfoEstudiante from './AdminWebiste/edit-delete-components/EditInfoEstudiante.jsx'
import DeleteInfoEstudiante from './AdminWebiste/edit-delete-components/DeleteInfoEstudiante.jsx'
import DeleteInfoProyecto from './AdminWebiste/edit-delete-components/DeleteInfoProyecto.jsx'
import EditInfoProyecto from './AdminWebiste/edit-delete-components/EditInfoProyecto.jsx'
import CreateInfoProyecto from './AdminWebiste/edit-delete-components/CreateInfoProyecto.jsx'
import Login from './login.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './useAuth.jsx'
import PrivateRoute from './privateRoute.jsx'
function App() {
     return(
        <ChakraProvider>
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<PrivateRoute><EstudianteLink/></PrivateRoute>}></Route>
            <Route path='/proyectos' element={<PrivateRoute><ProyectoLink/></PrivateRoute>}></Route>
            <Route path='/editarEstudiante/:id' element={<PrivateRoute><EditInfoEstudiante/></PrivateRoute>}></Route>
            <Route path='/borrarEstudiante/:id' element={<PrivateRoute><DeleteInfoEstudiante/></PrivateRoute>}></Route>
            <Route path='/proyectos/borrarProyecto/:id' element={<PrivateRoute><DeleteInfoProyecto/></PrivateRoute>}></Route>
            <Route path='/proyectos/editarProyecto/:id' element={<PrivateRoute><EditInfoProyecto/></PrivateRoute>}></Route>
            <Route path='/proyectos/crearProyecto' element={<PrivateRoute><CreateInfoProyecto/></PrivateRoute>}></Route>
        </Routes>
        </AuthProvider>
        </BrowserRouter>
        </ChakraProvider>
        
     )
}

export default App
