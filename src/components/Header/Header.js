import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-10">
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start justify-between w-full">
          <NavLink to="/" className="flex text-2xl items-center text-primary">
            <FontAwesomeIcon icon={faFileCode} /> &nbsp;
            <p className="font-bold">Quiz Geeks</p>
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <li className="mb-2 text-secondary font-medium">
                <NavLink to="/">Topic</NavLink>
              </li>
              <li className="mb-2 text-secondary font-medium">
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li className="text-secondary font-medium">
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-5 text-secondary font-medium">
              <NavLink to="/">Topic</NavLink>
            </li>
            <li className="mr-5 text-secondary font-medium">
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className="text-secondary font-medium">
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
