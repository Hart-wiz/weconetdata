import React, { useState } from "react";
import logo from "../assets/wlogo.png"; // Adjust the path as necessary

const navLinks = [
  { name: "Home", href: "#" },
  { name: "services", href: "#services" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#footer" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 w-full bg-white/80 backdrop-blur-md shadow-lg  px-20 max-md:py-3 max-md:px-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
          <div className="flex items-center ">
            <img src={logo} alt="logo" className=" w-30  max-md:w-20" />
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-3 py-2 font-semibold text-gray-700 hover:text-primary transition-colors duration-200
                  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-primary before:transition-all before:duration-300 hover:before:w-full before:rounded-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 group"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 w-7 rounded bg-primary transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-7 rounded bg-primary transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-7 rounded bg-primary transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 shadow-lg px-8 py-4 animate-fade-in-down">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-lg font-semibold text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <style jsx global>{`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.3s ease;
          }
        `}</style> */}
      </nav>
    </>
  );
};

export default Nav;
