import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css"
function Nav(){

    let url = "https://www.instagram.com/utppanama/"
    const loadPage = () => {
        window.location.href = url
    }
    return (
        <div>
            <nav id="navWebpage" className="navWeb">
                <img src="/assets/utp_logo.jpeg" alt=""/>
                <ul>
                    <li><a href="https://utp.ac.pa/">Página Principal</a></li>
                    <li><a href="https://vidauniversitaria.utp.ac.pa/Default.aspx">Dirección de Vida Universitaria</a></li>
                    <li><FontAwesomeIcon icon={faInstagram} onClick={loadPage}/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav