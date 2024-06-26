import "./App.css";
import footerLogo from "../Image_Icons/Asset 20@4x.png"



export default function Footer() {




    return(
        <footer style={{ backgroundColor: 'lightgrey', color: 'black', padding: '20px', textAlign: 'center' }}>
            <img height="200px" src={footerLogo} alt="footerLogo" class="footer-image"></img>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '40px' }}>
                <h2 style={{ color: '#495E57', fontWeight: 'bold', marginBottom: '10px'}}>Doormat Navigation</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }} >
                    <li><a href= "/" style={{ textDecoration: 'none' }}>Home</a></li>
                    <li><a href= "/About" style={{ textDecoration: 'none' }}>About Us</a></li>
                    <li><a href= "/Menu" style={{ textDecoration: 'none' }}>Menu</a></li>
                    <li><a href= "/Reservations" style={{ textDecoration: 'none' }}>Reservations</a></li>
                    <li><a href= "/Order-Online" style={{ textDecoration: 'none' }}>Order Online</a></li>
                    <li><a href= "/Login" style={{ textDecoration: 'none' }}>Login</a></li>
                </ul>
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '20px' }}>
                <h2 style={{ color: '#495E57', fontWeight: 'bold', marginBottom: '10px'}}>Contact Us</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li style={{fontWeight:"bold"}}>Address:</li>
                    <li>65-99 E Jackson Blvd, Chicago, IL 60604</li>
                    <li style={{fontWeight:"bold"}}>Phone:</li>
                    <li>+1 773-771-7723</li>
                    <li style={{fontWeight:"bold"}}>E-mail:</li>
                    <li>littlelemon@gmail.com</li>
                </ul>
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '20px' }}>
                <h2 style={{ color: '#495E57', fontWeight: 'bold', marginBottom: '10px'}}>Social Media</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li><a href= "https://el-gr.facebook.com/"
                    style={{ textDecoration: 'none' }}>Facebook</a></li>
                    <li><a href= "https://www.instagram.com/"
                    style={{ textDecoration: 'none' }}>Instagram</a></li>
                    <li><a href= "https://twitter.com/?lang=el"
                    style={{ textDecoration: 'none' }}>Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}