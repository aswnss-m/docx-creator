import React from "react";
import documentLogo from "./assets/document.png"
import "./assets/Navbar.css"
export default function Navbar(){
    return(
        <div className="navbar">
            <img src={documentLogo} alt="Document Logo" />
            <h1>Document Creator</h1>
        </div>
    )
}
