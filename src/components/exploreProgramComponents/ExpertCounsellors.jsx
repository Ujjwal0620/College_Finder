import React from "react";
import { FaStar, FaBriefcase, FaUserGraduate } from "react-icons/fa";

const counsellors = [
  {
    name: "Rashid Ali",
    image: "https://i.pravatar.cc/300?img=12",
    rating: "4.3/5",
    experience: "7+ Yrs. Experience",
    students: "4267+ Students Counselled",
  },
  {
    name: "Ashok Joshi",
    image: "https://i.pravatar.cc/300?img=13",
    rating: "4.8/5",
    experience: "9+ Yrs. Experience",
    students: "5634+ Students Counselled",
  },
  {
    name: "Kapil Gupta",
    image: "https://i.pravatar.cc/300?img=14",
    rating: "4.6/5",
    experience: "9+ Yrs. Experience",
    students: "4865+ Students Counselled",
  },
  {
    name: "Kriti Bhalla",
    image: "https://i.pravatar.cc/300?img=15",
    rating: "4.7/5",
    experience: "12+ Yrs. Experience",
    students: "6975+ Students Counselled",
  },
];

const ExpertCounsellors = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-14">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Still have queries?
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Let an Expert counselor address them.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {counsellors.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />

            {/* Name & Rating */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-blue-600">{item.name}</h3>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
                <FaStar className="text-yellow-400" />
                {item.rating}
              </span>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <FaBriefcase className="text-blue-600" />
              {item.experience}
            </div>

            {/* Students */}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUserGraduate className="text-blue-600" />
              {item.students}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Get free counselling from our career expert
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Book a Free Call Now
        </button>
      </div>
    </section>
  );
};

export default ExpertCounsellors;
