import Nav from "../../nav"

function Header(){
    return(
        <header>
        <Nav />
        <div className="header">
            <ul>
                <li>Proyectos</li>
                <li>Estudiantes</li>
            </ul>
        </div>
        </header>  
    )
}

export default Header