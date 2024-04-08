import LittleLemonLogo from "./Image_Icons/Logo .svg";
import React from "react";
import "./App.css";

export default function Nav() {

    return(
        <nav className="navbar">
            <img src={LittleLemonLogo} alt="LittleLemonLogo"></img>
            <ul>
                <li><a href= "/" >Home</a></li>
                <li><a href= "/About">About me</a></li>
                <li><a href= "/Menu">Menu</a></li>
                <li><a href= "/Reservations">Reservations</a></li>
                <li><a href= "/Order-Online">Order Online</a></li>
                <li><a href= "/Login">Login</a></li>
            </ul>
        </nav>
    );
}