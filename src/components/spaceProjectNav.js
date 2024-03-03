import React, { useState } from "react";
import logo from "../Spaceimgs/shared/logo.svg";

export default function SpaceProjectNav({ setCurrentPage, currentPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Heads = [
    { number: "00", head: "Home", onClick: () => setCurrentPage("Home") },
    {
      number: "01",
      head: "Destination",
      onClick: () => setCurrentPage("Destination"),
    },
    {
      number: "02",
      head: "Crew",
      onClick: () => setCurrentPage("Crew"),
    },
    {
      number: "03",
      head: "Technology",
      onClick: () => setCurrentPage("Technology"),
    },
  ];

  return (
    <div className="">
      <div className="w-full z-50 absolute flex items-center justify-between lg:pt-12">
        <img className="lg:pl-20 pl-10" src={logo} alt="logo" />
        <div className="absolute right-[45%] w-[40%] z-20 lg:border-b-2 border-[#3e404c]"></div>
        <div className="relative flex items-center justify-center w-full sm:w-[50%]  sm:bg-transparent sm:backdrop-blur-3xl h-20">
          {/* Burger icon */}
          <div className=" sm:hidden absolute z-50 right-4 ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 bg-[#d6daf9] p-2 rounded-full "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Navigation menu */}
          <ul
            className={`${
              showMenu
                ? "transition-all duration-500 absolute top-0 right-0 sm:bg-transparent sm:backdrop-blur-3xl sm:bg-[#13141f] bg-slate-500 w-[100vw] text-center"
                : " hidden duration-500 absolute right-0 top-0  sm:bg-transparent sm:backdrop-blur-3xl bg-slate-500 text-center"
            } sm:flex gap-x-[4lvw] text-white sm:pl-10 sm:pr-10 `}
          >
            {Heads.map((item, i) => (
              <li
                key={i}
                onClick={item.onClick}
                className={`cursor-pointer leading-[78px] ${
                  currentPage === item.head ? "active" : ""
                }`}
              >
                <span className="hidden lg:inline font-semibold">
                  {item.number}
                </span>{" "}
                {item.head}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
