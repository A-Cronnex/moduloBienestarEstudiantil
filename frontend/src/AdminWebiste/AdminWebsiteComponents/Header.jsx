import Nav from "../../nav"
import { Link } from "react-router-dom"
function Header(){
    return(
        <header>
        <Nav />
        <div className="header">
            <ul>
                <li><Link to={'/proyectos'}>Proyectos</Link></li>
                <li><Link to={'/'}>Estudiantes</Link></li>
            </ul>
        </div>
        </header>  
    )
}

export default Header