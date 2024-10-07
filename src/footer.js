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
                <a href="https://www.facebook.com/agapegarden300/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="footer-fb">
                <img src="./motion/fb.png" alt="img"></img>
                </button>
              </a>
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
            <a
              href="https://www.google.co.in/maps/place/Agape+Garden+Play+School+%26+Day+Care+Centre/@12.9472781,80.1969516,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dcdf26b952d:0x126e2ec396280c4b!8m2!3d12.9472781!4d80.1995265!16s%2Fg%2F11c1mw2m_8?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="footer-map">
                <img src="./images/map.png" alt="Map" className="map-image" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
