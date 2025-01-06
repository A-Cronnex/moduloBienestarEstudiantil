import Nav from "../../nav"
import { Link } from "react-router-dom"
import { logout } from "../../api";
import { useNavigate } from "react-router-dom";
function Header(){
    const nav = useNavigate()

    const  handleLogout = async () => {
        const success = await logout()
        if(success){
            console.log("Succes!")
            nav("/login")
        }
    }
    return(
        <header>
        <Nav />
        <div className="header">
            <ul>
                <li><Link to={'/proyectos'}>Proyectos</Link></li>
                <li><Link to={'/'}>Estudiantes</Link></li>
                <li > <Link to={'/login'} onClick={handleLogout}>Salir de la sesión</Link></li>
            </ul>
        </div>
        </header>  
    )
}

export default Header