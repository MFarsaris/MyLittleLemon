import LittleLemonLogo from "./Image_Icons/Logo .svg"


export default function Nav() {

    return(
        <nav>
            <img src={LittleLemonLogo} alt="LittleLemonLogo"></img>
        <ul classname="navbar">
            <li><a href= "/" >Home</a></li>
            <li><a href= "/About">About me</a></li>
            <li><a href= "/Menu">Menu</a></li>
            <li><a href= "/Reservations">Reservations</a></li>
            <li><a href= "/Order-Online">Order Online</a></li>
            <li><a href= "/Login">Login</a></li>
        </ul>
        </nav>
    )
}