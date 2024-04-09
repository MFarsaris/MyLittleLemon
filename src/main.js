import restauranfood from "./Image_Icons/restauranfood.jpg";
import greeksalad from "./Image_Icons/greek salad.jpg";
import lemondessert from "./Image_Icons/lemon dessert.jpg";
import bruchetta from "./Image_Icons/bruchetta.svg"

export default function Main() {

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
                        <button className="herobutton">Reserve a Table</button>
                    </div>
                    <div className="heroimage">
                    <img src={restauranfood} alt="restauranfood" ></img>
                    </div>
                </div>
            </div>
            <div className="specialsnavbar">
                <h2 style={{fontSize: "30px"}}>Specials</h2>
                <button className="specialsbutton">Online Menu</button>
            </div>
                <section>
                    <article>
                        <img src={greeksalad} alt="greeksalad" className="greeksalad"></img>
                        <h3>Greek Salad</h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <br></br>
                        <a href="menu.html">See our menu</a>
                        </article>
                    <article>
                        <img src={bruchetta} alt="bruchetta" className="bruchetta"></img>
                        <h3>Bruchetta</h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <br></br>
                        <a href="book.html">Book your table now</a>
                    </article>
                    <article>
                        <img src={lemondessert} alt="lemondessert" className="lemondessert"></img>
                        <h3>Lemon Dessert</h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <br></br>
                        <p class="openinghours">Mon - Fri: 1pm - 10pm</p>
                        <p class="openinghours">Sat: 1pm - 11pm</p>
                        <p class="openinghours">Sun: 1pm - 9pm</p>
                    </article>
                </section>
        </main>
    )
}