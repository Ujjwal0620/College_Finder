import React, { useEffect, useState } from "react";

const ProgramsForCourses = () => {
  const [activeTab, setActiveTab] = useState("pg");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const ITEMS_PER_PAGE = 2;

  // ✅ Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset pagination when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const pgCourses = [
    { courseName: "Online MBA (Marketing)", affiliation: "UGC Entitled | NAAC A+", duration: "2 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online MCA", affiliation: "UGC Entitled | AICTE Approved | NAAC A", duration: "2 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online BBA", affiliation: "UGC Recognized | NAAC A+", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online BCA", affiliation: "UGC Approved | NAAC A", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online M.Com", affiliation: "UGC Entitled | NAAC A++", duration: "2 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online BA (Psychology)", affiliation: "UGC Approved | NAAC A", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "Online MA (English)", affiliation: "UGC Entitled | NAAC A+", duration: "2 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
  ];

  const ugCourses = [
    { courseName: "B.Tech Computer Science", affiliation: "AICTE Approved | NAAC A++", duration: "4 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "MBBS", affiliation: "NMC Approved | NAAC A+", duration: "5.5 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "BBA", affiliation: "UGC Approved | NAAC A", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "BCA", affiliation: "UGC Recognized | NAAC A", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "B.Com (Hons)", affiliation: "UGC Approved | NAAC A+", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "BA (Political Science)", affiliation: "UGC Recognized | NAAC A", duration: "3 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
    { courseName: "B.Sc Nursing", affiliation: "INC Approved | NAAC A", duration: "4 Years", image: "https://collegevidya.in/online-courses/images/MBA.webp" },
  ];

  const allCourses = activeTab === "pg" ? pgCourses : ugCourses;

  // ✅ Pagination logic (mobile only)
  const totalPages = Math.ceil(allCourses.length / ITEMS_PER_PAGE);
  const coursesToShow = isMobile
    ? allCourses.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : allCourses;

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-center text-xl md:text-3xl font-bold mb-6">
        Programs From Top Online Universities
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 shadow py-4">
        {["pg", "ug"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === tab
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.toUpperCase()} COURSES
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {coursesToShow.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 text-black rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.courseName}
              className="w-full h-28 object-cover"
            />
            <div className="p-3">
              <h2 className="text-sm font-semibold mb-1">
                {item.courseName}
              </h2>
              <p className="text-xs text-gray-700">{item.duration}</p>
              <p className="text-[11px] text-gray-600 leading-snug">
                {item.affiliation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (Mobile only) */}
      {isMobile && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 text-sm rounded bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 text-sm rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProgramsForCourses;
