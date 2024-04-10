import "./App.css";
import greeksalad from "./Image_Icons/greek salad.jpg";
import lemondessert from "./Image_Icons/lemon dessert.jpg";
import bruchetta from "./Image_Icons/bruchetta.svg";
import scooterdelivery from "./Image_Icons/scooter-delivery.svg";


export default function Specials() {

    return(
        <main>
            <div className="specialsnavbar">
                <h2 style={{fontSize: "30px"}}>Specials</h2>
                <button className="specialsbutton">Online Menu</button>
            </div>
                <section>
                    <article>
                        <img src={greeksalad} alt="greeksalad" className="greeksalad"></img>
                        <div className="articlenameprice">
                            <h3>Greek Salad</h3>
                            <h3 style={{color: "#ee9972"}}>$12.99</h3>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <br></br>
                        <div className="orderdelivery">
                            <a href="/Order-Online">Order a delivery</a>
                            <img src={scooterdelivery} alt="scooterdelivery" ></img>
                        </div>
                        </article>
                    <article>
                        <img src={bruchetta} alt="bruchetta" className="bruchetta"></img>
                        <div className="articlenameprice">
                            <h3>Bruchetta</h3>
                            <h3 style={{color: "#ee9972"}}>$5.99</h3>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <br></br>
                        <br></br>
                        <div className="orderdelivery">
                            <a href="/Order-Online">Order a delivery</a>
                            <img src={scooterdelivery} alt="scooterdelivery" ></img>
                        </div>
                    </article>
                    <article>
                        <img src={lemondessert} alt="lemondessert" className="lemondessert"></img>
                        <div className="articlenameprice">
                            <h3>Lemon Dessert</h3>
                            <h3 style={{color: "#ee9972"}}>$5.00</h3>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <br></br>
                        <div className="orderdelivery">
                            <a href="/Order-Online">Order a delivery</a>
                            <img src={scooterdelivery} alt="scooterdelivery" ></img>
                        </div>
                    </article>
                </section>
        </main>
    )
}