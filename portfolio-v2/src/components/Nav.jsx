import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import resume from '../assets/resume.pdf'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="left-0 fixed w-screen z-10">
      <nav className=" p-4 border-gray-200 bg-transparent dark:text-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto mt-3 ">
          <NavLink to="/">
            <h1 className=" font-font-saira text-2xl font-extrabold dark:text-white text-gray-500 hover:text-black dark:hover:text-gray-200">
              Iffat Hossain
            </h1>
          </NavLink>
          <div className="flex items-center justify-items-end">
            <button
              className="md:hidden text-gray-500 text-2xl dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-white rounded-lg md:hidden dark:hove:text-green-800 hover:text-black dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              onClick={handleClick}
              class=" mt-14 absolute w-1/2 top-2 right-1 dark:bg-slate-800 bg-white divide-y divide-gray-100 rounded-xl shadow "
            >
              <ul
                class="py-2 text-sm dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="block px-4 py-2 dark:hover:bg-slate-600 hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 ">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="block px-4 py-2 dark:hover:bg-slate-600 hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 ">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="block px-4 py-2 dark:hover:bg-slate-600 hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 ">
                  <NavLink to="/projects">Projects</NavLink>
                </li>

                <li className="block px-4 py-2 dark:hover:bg-slate-600 hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 ">
                <a  href = {resume} target = "_blank">Resume</a> 
                </li>
                <li class="block px-4 py-2 text-center cursor-pointer dark:hover:bg-slate-600 border-gray-500 hover:bg-gray-200 hover:text-black dark:hover:text-gray-200  ">
                  Close
                </li>
              </ul>
            </div>
          )}

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col mt-4 rounded-lg text-gray-500 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <button
                className=" text-gray-500 text-2xl dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                onClick={toggleDarkMode}
              >
                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>

              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 md:hover:bg-transparent md:border-0 md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  Projects
                </NavLink>
              </li>

              <li>
              <a className="block py-2 pl-3 pr-4 rounded hover:bg-gray-200 hover:text-black dark:hover:text-gray-200 md:hover:bg-transparent md:border-0 md:p-0 " href = {resume} target = "_blank">Resume</a> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
