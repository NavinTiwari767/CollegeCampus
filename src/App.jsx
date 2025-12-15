import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground"; // Now includes testimonials
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Services from "./components/Services";
import Work from "./components/work";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          {/* Homepage - Now everything in one component */}
          <Route path="/" element={
            <>
              <NavBar />
              <AnimatedBackground /> {/* This includes hero + testimonials */}
            </>
          } />
          
          {/* Form Page - WITHOUT NavBar */}
          <Route path="/form" element={<Form />} />

          {/* Services Page */}
          <Route path="/services" element={
            <>
              <NavBar />
              <Services />
            </>
          } />
          
          {/* Work Page */}
          <Route path="/work" element={
            <>
              <NavBar />
              <Work />
            </>
          } />
          
          {/* About Page */}
          <Route path="/about" element={
            <>
              <NavBar />
              <About />
            </>
          } />
          
          {/* Contact Page */}
          <Route path="/contact" element={
            <>
              
              <Contact />
            </>
          } />
        </Routes>
        
        {/* Footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;