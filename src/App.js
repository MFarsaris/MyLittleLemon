import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LittleLemonLogo from "./Image_Icons/Logo .svg";
import Home from "./components/Home";
import Order from "./components/Order";
import Book from "./components/Reservations";
import About from "./components/AboutUs";
import Menu from "./components/Menu";
import Login from "./components/Login";


function App() {

  return(
    <>
    <Router>
    <nav className="navbar">
            <Link to="/" className="navbar-img">
              <img src={LittleLemonLogo} alt="LittleLemonLogo"></img>
            </Link>
            <ul>
                <li><Link to= "/" >Home</Link></li>
                <li><Link to= "/About">About Us</Link></li>
                <li><Link to= "/Menu">Menu</Link></li>
                <li><Link to= "/Reservations">Reservations</Link></li>
                <li><Link to= "/Order">Order Online</Link></li>
                <li><Link to= "/Login">Login</Link></li>
            </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Reservations" element={<Book />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )

}
export default App;