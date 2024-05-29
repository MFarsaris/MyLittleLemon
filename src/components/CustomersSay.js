import "./App.css";
import Donna from "../Image_Icons/Donna.jpg";
import Michael from "../Image_Icons/michael.jpg";
import Pedro from "../Image_Icons/pedro.jpg";
import Alice from "../Image_Icons/alice.jpg";

export default function Testimonials() {
    return (
    <main className="testimonialsbackground">
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src={Donna} alt="Donna"/>
                <div className="name-rating">
                    <h3>Donna</h3>
                    <div class="rating">★★★★</div>
                </div>
                <div className="review-text">
                    <p>Review Text</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={Michael} alt="Michael"/>
                <div className="name-rating">
                    <h3>Michael</h3>
                    <div class="rating">★★★★</div>
                </div>
                <div className="review-text">
                    <p>Review Text</p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src={Pedro} alt="Pedro"/>
                <div className="name-rating">
                    <h3>Pedro</h3>
                    <div class="rating">★★★★★</div>
                </div>
                <div className="review-text">
                    <p>Review Text</p>
                </div>
            </div>
                <div className="testimonial">
                    <img className="reviewer-img" src={Alice} alt="Alice"/>
                    <div className="name-rating">
                        <h3>Alice</h3>
                        <div class="rating">★★★</div>
                    </div>
                    <div className="review-text">
                        <p>Review Text</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
  }
