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
    <nav className="fixed top-0 w-full z-20 py-4 px-8 bg-transparent transition-colors duration-500 hover:bg-black/80">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-white text-2xl font-bold flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-purple-500 mr-2">🚀</span> College Campus
        </div>

        {/* Agar form page hai to sirf cross button show hoga */}
        {isFormPage ? (
          <button
            onClick={() => navigate("/")}
            className="text-white text-2xl hover:text-red-500 transition-colors"
          >
            
          </button>
        ) : (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-semibold">
              <button
                onClick={() => navigate("/")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/services")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/work")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Our Work
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Desktop Button */}
            <button
              onClick={() => navigate("/form")}
              className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Get Started
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden text-white text-2xl ml-4"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation (only when not on form page) */}
      {!isFormPage && isMenuOpen && (
        <div className="md:hidden mt-4 bg-black/95 rounded-lg p-4">
          <div className="flex flex-col space-y-4 font-semibold">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
              }}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/services");
              }}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/portfolio");
              }}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/about");
              }}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/form");
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all mt-2"
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
