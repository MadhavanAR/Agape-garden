import NavBar from "./NavBar";
import About from "./About";
import Hero from "./Hero";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
