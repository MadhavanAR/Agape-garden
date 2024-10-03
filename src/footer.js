import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <img src="./images/footer.png" alt="img" id="footer"></img>
      <div className="footer">
        <div className="footer-container">
          <div className="top">
            <div className="logo">
              <img src="./images/logo.png" alt="img"></img>
              <div className="social-media">
                <img src="./motion/fb.png" alt="img"></img>
                <img src="./motion/insta.png" alt="img"></img>
                <img src="./motion/whatsapp.png" alt="img"></img>
              </div>
            </div>
            <div className="quick-links">
              <p>Quick Links</p>
              <Link to="/">Home</Link>
              <a href="/About">About us</a>
              <Link to="/Features">Features</Link>
              <Link to="/Testimonial">Testimonial</Link>
              <Link to="/Gallery">Gallery</Link>
            </div>
            <div className="address">
              <h5>Address</h5>
              <p>
                No 301, 12th Street, Viduthalai Nagar, Chennai - 600091 (Behind
                Nilgiris)
              </p>
              <h5>Timings</h5>
              <p>
                Mon - Fri 8:00 am - 8:00 pm
                <br />
                Sat - Sun Closed - Closed
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="footer-line"></div>
            <p> Copyright © Agape Garden. All rights reserved.</p>
          </div>
          <div className="map-container">
            <img src="./images/map.png" alt="Map" className="map-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
