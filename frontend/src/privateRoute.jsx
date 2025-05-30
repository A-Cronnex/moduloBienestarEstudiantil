import { Heading
 } from "@chakra-ui/react";

 import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

 const PrivateRoute = ({children}) => {
    const {isAuthenticated, loading} = useAuth()
    const nav = useNavigate()
    if (loading){
        return <Heading>Cargando...</Heading>
    }

    if (isAuthenticated){
        return children
    } else {
        nav('/login')
    }
 }

 export default PrivateRoute