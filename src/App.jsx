import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AnimatedBackground from "./components/AnimatedBackground";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Work from "./components/work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-black">
        {/* Layout Wrapper */}
        <div className="flex flex-col min-h-screen">
          {/* Main Routes */}
          <Routes>
            {/* ==================== HOME PAGE ==================== */}
            <Route path="/" element={
              <>
                <NavBar />
                <main className="flex-1 pt-20">
                  <AnimatedBackground />
                </main>
              </>
            } />
            
            {/* ==================== FORM PAGE ==================== */}
            <Route path="/form" element={
              <main className="flex-1">
                <Form />
              </main>
            } />

            {/* ==================== SERVICES PAGE ==================== */}
            <Route path="/services" element={
              <>
                <NavBar />
                <main className="flex-1 mt-10 md:mt-10">
                  <Services />
                </main>
              </>
            } />
            
            {/* ==================== WORK PAGE ==================== */}
            <Route path="/work" element={
              <>
                <NavBar />
                <main className="flex-1 mt-10 md:mt-10">
                  <Work />
                </main>
              </>
            } />
            
            {/* ==================== ABOUT PAGE ==================== */}
            <Route path="/about" element={
              <>
                <NavBar />
                <main className="flex-1 mt-10 md:mt-10">
                  <About />
                </main>
              </>
            } />
            
            {/* ==================== CONTACT PAGE ==================== */}
            <Route path="/contact" element={
              <>
                <NavBar />
                <main className="flex-1 mt-10 md:mt-10">
                  <Contact />
                </main>
              </>
            } />
          </Routes>

          {/* Footer - appears on all pages except form */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;