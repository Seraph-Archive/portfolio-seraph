import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
// import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Seraph Archive</Link>
                {/* <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}