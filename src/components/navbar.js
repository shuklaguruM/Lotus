import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchEmployee from "./SearchEmployee";

const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    navigate("/login");
  };
  const [isSidebarOpen3, setIsSidebarOpen3] = useState(false);
  const openSidebar3 = () => {
    setIsSidebarOpen3(!isSidebarOpen3);
  };
  return (
    <header className="absolute right-[2.5rem] top-10 lg:w-[526px] h-[144px] lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white  dark:bg-[#111111] ">
      <div className="absolute top-[3rem] right-[36rem] flex items-center">
        <span
          className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#EF4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
          onClick={handleThemeSwitch}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-3xl dark-mode-light dark:hidden"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </span>
        <span
          className="bg-white w-[40px] hover:text-white flex h-[40px] rounded-full lg:hidden justify-center items-center text-black hover:bg-[#EF4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
          onClick={handleThemeSwitch}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-3xl dark-mode-light dark:hidden"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </span>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex ">
          <a
            className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
            href="/home-box-layout/home"
          >
            <span className="text-xl mb-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            </span>
            Home
          </a>
          <button
            type="button"
            className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite   dark:text-[#A6A6A6] justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
            href="/home-box-layout/resume"
          >
            <span className="text-xl mb-1">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Project
          </button>{" "}
          <button
            type="button"
            className=" w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite  dark:text-[#A6A6A6]  justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
            onClick={openSidebar3}
          >
            <span className="text-xl mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            Search
          </button>
          <button
            onClick={handleLogout}
            type="button"
            className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite   dark:text-[#A6A6A6]  justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
            href="/home-box-layout/blogs"
          >
            <span className="text-xl mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </span>
            Log Out
          </button>
        </ul>
        {/* <div
          className={` dark:text-[#A6A6A6]    dark:hover:text-white dark:bg-[#212425] hover:text-white z-[999999] shadow-md rounded-[10px] absolute top-[10rem] bg-white text-black w-80 min-h-[76.5vh] overflow-y-auto transition-transform transform  ${
            isSidebarOpen3 ? "-translate-x-[22vw]" : ""
          } ease-in-out duration-300 left-[37.5rem]`}
        >
          <div className="p-4 dark:text-[#A6A6A6]    dark:hover:text-white dark:bg-[#212425] hover:text-white">
            <div className="flex items-center dark:text-[#A6A6A6]    dark:hover:text-white dark:bg-[#212425] hover:text-white">
              <div className="flex space-x-1">
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <SearchEmployee />
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className={` z-[999999] shadow-md rounded-[10px] absolute top-[10rem] bg-white text-black w-[25rem] min-h-[76.5vh] overflow-y-auto transition-transform transform  ${
            isSidebarOpen3 ? "-translate-x-[22vw]" : ""
          } ease-in-out duration-300 left-[35rem]`}
        >
          <div className="p-4">
            <div className="flex items-center">
              <SearchEmployee />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import SearchEmployee from "./SearchEmployee";
// const Navbar = () => {
//   const [isSidebarOpen3, setIsSidebarOpen3] = useState(false);
//   const navigate = useNavigate();

//   const openSidebar3 = () => {
//     setIsSidebarOpen3(!isSidebarOpen3);
//   };

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <header className="absolute right-[2.5rem] top-10 lg:w-[526px] h-[144px] lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white    ">
//       <div className="absolute top-[3rem] right-[32rem] flex items-center">
//         <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 ">
//           <svg
//             stroke="currentColor"
//             fill="none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-3xl dark-mode-light dark:hidden"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//           </svg>
//           <svg
//             stroke="currentColor"
//             fill="none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="12" cy="12" r="5"></circle>
//             <line x1="12" y1="1" x2="12" y2="3"></line>
//             <line x1="12" y1="21" x2="12" y2="23"></line>
//             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//             <line x1="1" y1="12" x2="3" y2="12"></line>
//             <line x1="21" y1="12" x2="23" y2="12"></line>
//             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//           </svg>
//         </span>
//         <span className="bg-white w-[40px] hover:text-white flex items-center h-[40px] rounded-full lg:hidden justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 ">
//           <svg
//             stroke="currentColor"
//             fill="none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-3xl dark-mode-light dark:hidden"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//           </svg>
//           <svg
//             stroke="currentColor"
//             fill="none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="12" cy="12" r="5"></circle>
//             <line x1="12" y1="1" x2="12" y2="3"></line>
//             <line x1="12" y1="21" x2="12" y2="23"></line>
//             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//             <line x1="1" y1="12" x2="3" y2="12"></line>
//             <line x1="21" y1="12" x2="23" y2="12"></line>
//             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//           </svg>
//         </span>
//         <span className="lg:opacity-0 lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 ">
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 1024 1024"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
//           </svg>
//         </span>
//       </div>

//       <nav className="hidden lg:block">
//         <ul className="flex ">
//           <a
//             className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out  hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
//             href="/home-box-layout/home"
//           >
//             <span className="text-xl mb-1">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 1024 1024"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
//               </svg>
//             </span>
//             Home
//           </a>
//           <button
//             type="button"
//             className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out  hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
//             href="/home-box-layout/resume"
//           >
//             <span className="text-xl mb-1">
//               <svg
//                 stroke="currentColor"
//                 fill="none"
//                 strokeWidth="0"
//                 viewBox="0 0 24 24"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//             </span>
//             Project
//           </button>
//           <button
//             type="button"
//             className=" w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
//             onClick={openSidebar3}
//           >
//             <span className="text-xl mb-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-search"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.3-4.3" />
//               </svg>
//             </span>
//             Search
//           </button>

//           <button
//             type="button"
//             className="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite     justify-center flex flex-col items-center   transition-all duration-300 ease-in-out hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
//             onClick={handleLogout}
//             href="/home-box-layout/blogs"
//           >
//             <span className="text-xl mb-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-log-out"
//               >
//                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                 <polyline points="16 17 21 12 16 7" />
//                 <line x1="21" x2="9" y1="12" y2="12" />
//               </svg>
//             </span>
//             Log Out
//           </button>
//         </ul>
//         <div
//           className={` z-[999999] shadow-md rounded-[10px] absolute top-[10rem] bg-white text-black w-[25rem] min-h-[76.5vh] overflow-y-auto transition-transform transform  ${
//             isSidebarOpen3 ? "-translate-x-[22vw]" : ""
//           } ease-in-out duration-300 left-[35rem]`}
//         >
//           <div className="p-4">
//             <div className="flex items-center">
//               <SearchEmployee />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };
// export default Navbar;
