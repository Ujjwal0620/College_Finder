import React from "react";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

          
          <div className="p-6 sm:p-10 lg:p-14">
            <h1 className="text-2xl sm:text-3xl text-black lg:text-5xl font-bold leading-tight">
              <span className="text-blue-600">Compare Online Courses</span>{" "}
              from India’s <br className="hidden sm:block" />
              Top Universities
            </h1>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "MBA",
                "Dual MBA",
                "1 Year MBA",
                "MCA",
                "M.Com",
                "M.Sc",
                "BBA",
                "B.Com",
                "BA",
                "BCA",
                "B.Sc",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl">
              Step into your next chapter with a 100% Online Courses from
              India’s top universities. The right university can quietly shift
              the odds, enhancing your journey by 3x.
            </p>

            
            <ul className="mt-6 text-black space-y-3 text-sm sm:text-base">
              {[
                "Flexible timelines at your pace",
                "100% online, access anytime anywhere",
                "UGC, AICTE, WES approved course",
                "EMI starts from ₹4,999*/month",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg text-base font-medium">
              Compare Now
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative bg-gray-100 flex items-center justify-center p-6 lg:p-0">
            <div className="relative w-full max-w-md lg:max-w-none h-100 sm:h-112.5 lg:h-full">

              {/* Left Image */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyBhesaw0yCjda56QjcvwnMVCPO9IMQD5ag&s"
                alt="Person"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[48%] rounded-2xl shadow-lg"
              />

              {/* Right Image */}
              <img
                src="https://img.freepik.com/free-photo/isolated-vertical-portrait-successful-handsome-stylish-young-european-male-boss-with-fuzzy-trimmed-beard-wearing-trendy-men-s-wear-relaxing-armchair-staring-with-serious-look_343059-1784.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Person"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[48%] rounded-2xl shadow-lg bg-blue-600 p-2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
