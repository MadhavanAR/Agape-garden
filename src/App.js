import NavBar from "./NavBar";
import About from "./About";
import Hero from "./Hero";
import Footer from "./footer";
import Features from "./Features";
import ParentSpeak from "./ParentSpeak";
import { Route, Routes } from "react-router-dom";
import Faq from "./Faq";
import Admission from "./Admission";
import Gallery from "./Gallery";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Features />
      <ParentSpeak />
      <Gallery />
      <Faq />
      <Admission />
      <Footer />
    </div>
  );
}
