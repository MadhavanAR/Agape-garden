import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Hero from "./Hero";
import Features from "./Features";
import ParentSpeak from "./ParentSpeak";
import Faq from "./Faq";
import Admission from "./Admission";
import Gallery from "./Gallery";
import Footer from "./footer"

function AppContent() {
  const location = useLocation();
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/Features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.pathname === "/Gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission />
          </>
        } />
        <Route path="/About" element={<><About />< Footer /></>} />
        <Route path="/Gallery" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission />
          </>
        } />
        <Route path="/Features" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission />
          </>
        } />
        <Route path="/Faq" element={<Faq ref={faqRef} />} />
        <Route path="/Admission" element={<Admission />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  const faqRef = useRef(null);

  const handleEnquireClick = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar onEnquireClick={handleEnquireClick} />
      <AppContent faqRef={faqRef} />
    </>
  );
}
