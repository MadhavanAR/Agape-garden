
import logo from "./logo.png";


export default function NavBar() {
    return (
      <div>
        <div className="navbar">
          <img src={logo} alt="img"></img>
          <a href="/">Home</a>
          <a href="/About">About us</a>
          <a href="Features">Features</a>
          <a href="Testimonial">Testimonial</a>
          <a href="Gallery">Gallery</a>
          <button>Enquire now</button>
        </div>
        <div className="navbar-line"></div>
      </div>
    );
  }