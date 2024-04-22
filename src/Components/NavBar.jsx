import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-4 ">
        <div className="flex items-center space-x-4">
          <p className="text-green-500 text-2xl font-semibold">Ecoyaan</p>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sell On Ecoyaan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
            Sign In
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
