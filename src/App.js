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
import Footer from "./Footer";
import PicFlowGallery from "./PicFlowGallery";
import Readmore from "./Readmore";


function AppContent({ admissionRef }) {
  const location = useLocation();
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/Features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Admission" && admissionRef.current) {
      admissionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, admissionRef]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features ref={featuresRef} />
              <ParentSpeak />
              <Gallery ref={galleryRef} />
              <Faq ref={faqRef} />
              <Admission ref={admissionRef} />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/Gallery"
          element={
            <>
              <Hero />
              <Features ref={featuresRef} />
              <ParentSpeak />
              <Gallery ref={galleryRef} />
              <Faq ref={faqRef} />
              <Admission ref={admissionRef} />
            </>
          }
        />
        <Route
          path="/Features"
          element={
            <>
              <Hero />
              <Features ref={featuresRef} />
              <ParentSpeak />
              <Gallery ref={galleryRef} />
              <Faq ref={faqRef} />
              <Admission ref={admissionRef} />
            </>
          }
        />
        <Route path="/Faq" element={<Faq ref={faqRef} />} />
        <Route path="/Admission" element={<Admission ref={admissionRef} />} />
        <Route path="/PicflowGallery" element={<PicFlowGallery />} />
        <Route path="/Readmore" element={<Readmore />} /> {/* Ensure this route is added */}
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  const faqRef = useRef(null);
  const admissionRef = useRef(null);

  const handleEnquireClick = () => {
    if (admissionRef.current) {
      admissionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar onEnquireClick={handleEnquireClick} />
      <AppContent admissionRef={admissionRef} faqRef={faqRef} />
    </>
  );
}
