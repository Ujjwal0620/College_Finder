import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-16">
      <div className="px-4 sm:px-6 lg:px-32 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">
              CollegeFinder
            </h2>
            <p className="text-sm leading-relaxed">
              Explore top online & offline universities in India.  
              Choose the right college with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/colleges" className="hover:text-white">Colleges</Link></li>
              <li><Link to="/more" className="hover:text-white">Explore More</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Colleges */}
          <div>
            <h3 className="text-white font-semibold mb-3">Popular Universities</h3>
            <ul className="space-y-2 text-sm">
              <li>IGNOU</li>
              <li>Manipal University</li>
              <li>Jain University</li>
              <li>Amrita University</li>
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <p className="text-sm mb-4">
              Email: support@collegefinder.in  
              <br />
              Phone: +91 98765 43210
            </p>

            <div className="flex gap-4 text-white">
              <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} CollegeFinder. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
