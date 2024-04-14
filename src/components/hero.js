import { Link } from "react-router-dom";
import "./App.css";
import restauranfood from "../Image_Icons/restauranfood.jpg";

export default function Hero() {

    return(
        <main>
            <div className="herobackground">
                <div className="herocontainer">
                    <div className="herotext">
                            <h1 style={{color: "#FBDABB"}}>Little Lemon</h1>
                            <h2 style={{color: "white"}}>Chicago</h2>
                            <p style={{color: "white"}}>
                            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                            </p>
                        <Link to= "/Book">
                            <button className="herobutton">Reserve a Table</button>
                        </Link>
                    </div>
                    <div className="heroimage">
                    <img src={restauranfood} alt="restauranfood" ></img>
                    </div>
                </div>
            </div>
        </main>
    )
}