import React, { useState } from "react";

const Programs = () => {
  const categories = [
    { id: "pg", title: "PG Courses", tag: "After Graduation" },
    { id: "exec", title: "Executive Education", tag: "Working Professionals & CXOs" },
    { id: "phd", title: "Doctorate / Ph.D.", tag: "After UG + Work Ex" },
    { id: "ug", title: "UG Courses", tag: "After 12th" },
    { id: "job", title: "Job Guarantee", tag: "100% Placement*" },
    { id: "abroad", title: "Study Abroad", tag: "Pathway / Hybrid Mode" },
    { id: "diploma", title: "Advanced Diploma", tag: "After 10th & 12th" },
    { id: "skill", title: "Skilling & Certificate", tag: "After 10th & 12th" },
  ];

  const programsData = {
    pg: [
      { title: "Online MBA", badge: "80+ Specializations", count: 37 },
      { title: "1 Year MBA Online", badge: "ROI 100%", count: 10 },
      { title: "Distance MBA", badge: "2 Years", count: 15 },
      { title: "Online MCA", badge: "16+ Specializations", count: 14 },
      { title: "M.Tech", badge: "25+ Specializations", count: 3 },
      { title: "Online M.Sc", badge: "2 Years", count: 5 },
    ],
    exec: [
      { title: "Executive MBA", badge: "12–24 Months", count: 13 },
      { title: "Online Global MBA", badge: "Trending", count: 4 },
      { title: "PGDM for Working", badge: "Fast Track", count: 6 },
      { title: "CXO Leadership Program", badge: "Elite", count: 2 },
      { title: "Business Analytics", badge: "High ROI", count: 8 },
    ],
    phd: [
      { title: "Ph.D in Management", badge: "Doctorate", count: 5 },
      { title: "Online DBA", badge: "Global", count: 3 },
      { title: "Ph.D in CS", badge: "Research", count: 4 },
      { title: "Ph.D in Education", badge: "UGC Approved", count: 6 },
      { title: "Ph.D in Commerce", badge: "Flexible", count: 2 },
    ],
    ug: [
      { title: "Online BBA", badge: "3 Years", count: 12 },
      { title: "Online BCA", badge: "IT Focus", count: 9 },
      { title: "Online BA", badge: "Arts", count: 10 },
      { title: "Online B.Com", badge: "Commerce", count: 11 },
      { title: "Online B.Sc", badge: "Science", count: 7 },
    ],
    job: [
      { title: "MBA with Placement", badge: "100% Job", count: 6 },
      { title: "Data Science", badge: "Guaranteed", count: 4 },
      { title: "Full Stack Dev", badge: "Career Track", count: 5 },
      { title: "Digital Marketing", badge: "Job Ready", count: 8 },
      { title: "AI & ML", badge: "High Demand", count: 3 },
    ],
    abroad: [
      { title: "MS in USA", badge: "Hybrid", count: 6 },
      { title: "MBA Abroad", badge: "Global", count: 4 },
      { title: "UK Pathway", badge: "Fast Track", count: 5 },
      { title: "Canada Diploma", badge: "PR Path", count: 7 },
      { title: "Australia Study", badge: "Top Univ", count: 3 },
    ],
    diploma: [
      { title: "PG Diploma", badge: "2 Years", count: 5 },
      { title: "Advanced IT Diploma", badge: "Tech", count: 4 },
      { title: "Management Diploma", badge: "Business", count: 6 },
      { title: "HR Diploma", badge: "Career", count: 3 },
      { title: "Finance Diploma", badge: "Industry", count: 5 },
    ],
    skill: [
      { title: "Digital Marketing", badge: "Certificate", count: 8 },
      { title: "Python Programming", badge: "Beginner", count: 6 },
      { title: "Data Analytics", badge: "Skill Up", count: 7 },
      { title: "UI/UX Design", badge: "Creative", count: 4 },
      { title: "Cyber Security", badge: "Trending", count: 5 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("pg");
  const [viewAll, setViewAll] = useState(false);

  const visiblePrograms = viewAll
    ? programsData[activeCategory]
    : programsData[activeCategory].slice(0, 5);

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

        {/* 🔹 MOBILE CATEGORY TABS */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-3">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCategory(item.id);
                setViewAll(false);
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border ${
                activeCategory === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-black text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* 🔹 DESKTOP SIDEBAR */}
        <aside className="hidden lg:block rounded-2xl shadow p-4 h-fit sticky top-24 ">
          <div className="space-y-3">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveCategory(item.id);
                  setViewAll(false);
                }}
                className={`cursor-pointer rounded-xl px-4 py-3 transition ${
                  activeCategory === item.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-black"
                }`}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs opacity-80">{item.tag}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* 🔹 PROGRAM CARDS */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {visiblePrograms.map((item, index) => (
              <div
                key={index}
                className=" rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col border"
              >
                <span className="text-xs bg-gray-300 text-orange-600 px-3 py-1 rounded-full w-fit mb-3">
                  {item.badge}
                </span>

                <div className="h-16 flex items-center justify-center">
                  <div className="w-12 h-12  bg-white  rounded-lg" />
                </div>

                <h3 className="text-center font-semibold mt-3">
                  {item.title}
                </h3>

                <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg py-2 mt-4">
                  Compare {item.count} Now
                </button>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          {programsData[activeCategory].length > 5 && (
            <div className="flex justify-center mt-8 ">
              <button
                onClick={() => setViewAll(!viewAll)}
                className="px-6 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100"
              >
                {viewAll ? "VIEW LESS ←" : "VIEW ALL →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;
