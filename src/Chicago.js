import "./App.css";
import restaurantchefB from "./Image_Icons/restaurant chef B.jpg"
import MarioandAdrianb from "./Image_Icons/Mario and Adrian b.jpg"

export default function Chicago() {

    return(
        <main>
            <div className="chicago-container">
                <div className="chicago-text">
                    <h1 >Little Lemon</h1>
                    <h2 >Chicago</h2>
                    <p>
                        Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                    </p>
                </div>
                <div className="chicago-image">
                    <img src={restaurantchefB} alt="restaurantchefB" ></img>
                    <img src={MarioandAdrianb} alt="MarioandAdrianb" ></img>
                </div>
            </div>
        </main>
    )
}