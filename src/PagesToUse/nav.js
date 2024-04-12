import LittleLemonLogo from "./Image_Icons/Logo .svg";
import React from "react";
import "./App.css";

export default function Nav() {

    return(
        <nav className="navbar">
            <img src={LittleLemonLogo} alt="LittleLemonLogo"></img>
            <ul>
                <li><Link to= "/" >Home</Link></li>
                <li><Link to= "/About">About Us</Link></li>
                <li><Link to= "/Menu">Menu</Link></li>
                <li><Link to= "/Book">Reservations</Link></li>
                <li><Link to= "/Order">Order Online</Link></li>
                <li><Link to= "/Login">Login</Link></li>
            </ul>
        </nav>
    );
}