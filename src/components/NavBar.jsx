import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on the form page
  const isFormPage = location.pathname === "/form";

  return (
    <nav className="fixed top-0 w-full z-20 py-4 px-4 md:px-8 bg-gradient-to-r from-black via-slate-900 to-black shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/20 border-b border-yellow-500/20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-yellow-300 text-lg md:text-2xl font-bold flex items-center cursor-pointer hover:text-yellow-200 transition-colors"
          onClick={() => navigate("/")}
        >
          <span className="text-yellow-400 mr-2 text-xl md:text-2xl">🎓</span>
          <span className="hidden sm:inline">College Campus</span>
          <span className="sm:hidden">CC</span>
        </div>

        {/* Agar form page hai to sirf cross button show hoga */}
        {isFormPage ? (
          <button
            onClick={() => navigate("/")}
            className="text-yellow-300 text-2xl hover:text-red-400 transition-colors"
          >
            ✖
          </button>
        ) : (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 font-semibold">
              <button
                onClick={() => navigate("/")}
                className="text-yellow-100/80 hover:text-yellow-300 transition-colors py-2 px-1 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => navigate("/services")}
                className="text-yellow-100/80 hover:text-yellow-300 transition-colors py-2 px-1 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => navigate("/work")}
                className="text-yellow-100/80 hover:text-yellow-300 transition-colors py-2 px-1 relative group"
              >
                Our Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-yellow-100/80 hover:text-yellow-300 transition-colors py-2 px-1 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-yellow-100/80 hover:text-yellow-300 transition-colors py-2 px-1 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Desktop Button */}
            <button
              onClick={() => navigate("/form")}
              className="hidden md:block bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2.5 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all shadow-lg hover:shadow-yellow-500/50 font-semibold"
            >
              Get Started
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden text-yellow-300 text-2xl ml-4 hover:text-yellow-200 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation (only when not on form page) */}
      {!isFormPage && isMenuOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-b from-slate-900 to-black rounded-xl p-4 shadow-lg border border-yellow-500/30 backdrop-blur-sm">
          <div className="flex flex-col space-y-2 font-semibold">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
              }}
              className="text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors py-3 px-4 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/services");
              }}
              className="text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors py-3 px-4 rounded-lg"
            >
              Services
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/work");
              }}
              className="text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors py-3 px-4 rounded-lg"
            >
              Our Work
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/about");
              }}
              className="text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors py-3 px-4 rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
              className="text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors py-3 px-4 rounded-lg"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/form");
              }}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all mt-4 w-full font-semibold shadow-lg hover:shadow-yellow-500/50"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;