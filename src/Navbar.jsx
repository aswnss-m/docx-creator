import React from "react";
import markdownLogo from "./assets/markdown.png"
export default function Navbar(){
    return(
        <div className="navbar">
            <img src={markdownLogo} alt="MarkdownLogo" />
            <h1>Markdown Creator</h1>
        </div>
    )
}
