import "./App.css";
import Donna from "../Image_Icons/Donna.jpg";
import Michael from "../Image_Icons/michael.jpg";
import Pedro from "../Image_Icons/pedro.jpg";
import Alice from "../Image_Icons/alice.jpg";

export default function CustomersSay() {

    return(
        <main className="testimonialsbackground">
            <div className="testimonials-max-width">
            <div className="testimonials">
                <h2>Testimonials</h2>
            </div>
                <div className="testimonials-grid-container">
                    <div className="grid-item">
                        <div class="rating">★★★★</div>
                        <div className="grid-pic-name">
                            <img src={Donna} alt="Donna"></img>
                            <h3>Donna</h3>
                        </div>
                        <p>Review Text</p>
                    </div>
                    <div className="grid-item">
                        <div class="rating">★★★★</div>
                        <div className="grid-pic-name">
                            <img src={Michael} alt="Michael"></img>
                            <h3>Michael</h3>
                        </div>
                        <p>Review Text</p>
                    </div>
                    <div className="grid-item">
                        <div class="rating">★★★★★</div>
                        <div className="grid-pic-name">
                            <img src={Pedro} alt="Pedro"></img>
                            <h3>Pedro</h3>
                        </div>
                        <p>Review Text</p>
                    </div>
                    <div className="grid-item">
                        <div class="rating">★★★★</div>
                        <div className="grid-pic-name">
                            <img src={Alice} alt="Alice"></img>
                            <h3>Alice</h3>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
            </div>
        </main>
    )
}