import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-gray-300 flex justify-center">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-white">WeconetData</h2>
            <p className="mt-2 text-sm text-gray-400">
              Building the future of the web with scalable, reliable, and secure
              solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+16727631514?text=Hello%20WeconetData%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                className="hover:text-white"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p className=" flex items-center gap-3 mt-4 text-sm text-gray-400">
              <FaEnvelope /> contact@Weconetdata.com
            </p>
            <p className="flex items-center gap-3 mt-2 text-sm text-gray-400">
              <FaPhone /> +1 (672) 763-1514
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Weconetdata. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
