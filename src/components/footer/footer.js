import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Footer() {
    return(
        <IconContext.Provider value={{color: "black", size: "2em" }}>
        <div className="container-fluid fixed-bottom bg-light">
            <div className="row justify-content-between">
                <a className="col text-end" href="https://github.com/Seraph-Archive" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
            </div>
        </div>
        </IconContext.Provider>
    )
}