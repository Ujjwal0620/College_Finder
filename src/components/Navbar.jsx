import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky bg-black  top-0 z-50  shadow text-white">
        <div className="py-4 px-4 sm:px-6 lg:px-20 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">
            College<span className="text-orange-500">Finder</span>
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:text-blue-600" to="/">Home</Link>
            <Link className="hover:text-blue-600" to="/">Top Universities</Link>

            <Link to="/more">
              <button className="bg-blue-700 hover:bg-blue-800 transition rounded-xl px-4 py-2 text-white">
                Explore Programs
              </button>
            </Link>

            <Link className="hover:text-blue-600" to="/">Login</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden"
          >
            <IoMdMenu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#191919] z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-blue-600">
            College<span className="text-orange-500">Finder</span>
          </h1>
          <IoMdClose
            onClick={() => setOpenMenu(false)}
            className="w-7 h-7 text-white cursor-pointer"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 px-6 py-6 text-white">
          <Link onClick={() => setOpenMenu(false)} to="/">Home</Link>
          <Link onClick={() => setOpenMenu(false)} to="/">Top Universities</Link>

          <Link
            onClick={() => setOpenMenu(false)}
            to="/more"
            className="bg-blue-700 text-center rounded-xl px-4 py-2"
          >
            Explore Programs
          </Link>

          <Link onClick={() => setOpenMenu(false)} to="/">Login</Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
