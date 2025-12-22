import React from "react";
import { Link } from "react-router-dom";

const CollegeList = () => {
  const images = [
    { image: "https://collegevidya.in/partner-online-courses/unimage/manipal-online-university-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/Jain-University-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/dy-patil-vidyapeeth-university-online.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/Lovely-Professional-University-Online-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/sastra-online-university-with-tcs-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/GLA-University-Online-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/Maharishi-Markandeshwar-Deemed-to-be-University-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/ignou-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/uttaranchal-online-university-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/svg-university-logo.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/iim-raipur.webp" },
    { image: "https://collegevidya.in/partner-online-courses/unimage/Symbiosis-SCDL-logo.webp" },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-32">
      <div className="bg-black rounded-2xl px-4 sm:px-6 lg:px-10 py-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2">
          Explore Over 100+
        </h1>
        <p className="text-center text-blue-500 font-semibold mb-6">
          Online Universities & Chuno Apna Sahi
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt="University Logo"
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link to="/more">
            <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 transition text-white text-base sm:text-lg rounded-xl">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CollegeList;
