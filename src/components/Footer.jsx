import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white mt-10">
      <div className=" w-11/12 mx-auto  px-6 py-10 grid grid-cols-1  md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">GreenNest</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            A home for every plant lover. Explore, learn, and grow with care —
            because a greener space means a calmer mind.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-accent transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-base-300 opacity-30"></div>

      <div className="text-center py-4 text-sm opacity-80">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
