"use client";
import Image from "next/image";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDownWideFill } from "react-icons/ri";
import { BsLightbulb } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import {
  FaRegBell,
  FaRegStar,
  FaUserEdit,
  FaUserInjured,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { GiWaterDivinerStick, GiGraduateCap } from "react-icons/gi";
import { CiLock, CiYoutube } from "react-icons/ci";
import Toggle from "./Toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    "Home",
    "CRM",
    "Utilities",
    "Insurance",
    "Assets",
    "Mutual",
    "Research",
    "Transact Online",
    "Goal GPS",
    "Financial Planning",
    "Wealth Report",
    "Other",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadPDF = () => {
    window.open("/api/export-pdf", "_blank");
  };

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
        <Image
          src="/images/wealth-elite-logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "80px", height: "auto" }}
        />

        <div className="hidden md:flex w-[40%] lg:w-[35%]">
          <input
            type="text"
            className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 w-full rounded-l-lg p-2 text-gray-500 dark:placeholder-gray-400"
            placeholder="elite portfolio"
          />
          <IoSearchSharp className="bg-gray-300 dark:bg-gray-600 dark:text-gray-300 h-12 w-8 p-1 rounded-r-lg cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500" />
        </div>

        <nav className="hidden lg:flex justify-evenly items-center w-[40%] font-semibold text-gray-700 dark:text-gray-300">
          <RiArrowDownWideFill className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <BsLightbulb className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <IoIosSettings className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <FaRegBell className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <FaRegStar className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <FaUserInjured className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <GiWaterDivinerStick className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <FaUserEdit className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <CiLock className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <GiGraduateCap className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <CiYoutube className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
          <span className="rotate-180 text-gray-300 dark:text-gray-600">|</span>
          <Toggle />
          <span className="rotate-180 text-gray-300 dark:text-gray-600">|</span>
          <button
            onClick={downloadPDF}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
        </nav>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 lg:hidden flex flex-col">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <Image
              src="/images/wealth-elite-logo.png"
              alt="logo"
              width={80}
              height={60}
            />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="p-4 border-b dark:border-gray-700 md:hidden">
            <div className="flex">
              <input
                type="text"
                className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 w-full rounded-l-lg p-3 text-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="elite portfolio"
              />
              <IoSearchSharp className="bg-gray-300 dark:bg-gray-600 dark:text-gray-300 h-full w-12 p-2 rounded-r-lg cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500" />
            </div>
          </div>

          <div className="p-4 border-b dark:border-gray-700">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <RiArrowDownWideFill className="text-2xl text-gray-700 dark:text-gray-300" />
              <BsLightbulb className="text-2xl text-gray-700 dark:text-gray-300" />
              <IoIosSettings className="text-2xl text-gray-700 dark:text-gray-300" />
              <FaRegBell className="text-2xl text-gray-700 dark:text-gray-300" />
              <FaRegStar className="text-2xl text-gray-700 dark:text-gray-300" />
              <FaUserInjured className="text-2xl text-gray-700 dark:text-gray-300" />
              <GiWaterDivinerStick className="text-2xl text-gray-700 dark:text-gray-300" />
              <FaUserEdit className="text-2xl text-gray-700 dark:text-gray-300" />
              <CiLock className="text-2xl text-gray-700 dark:text-gray-300" />
              <GiGraduateCap className="text-2xl text-gray-700 dark:text-gray-300" />
              <CiYoutube className="text-2xl text-gray-700 dark:text-gray-300" />
            </div>
            <div className="flex justify-evenly items-center mt-4">
              <Toggle />
              <span className="rotate-180 text-gray-300 dark:text-gray-600">
                |
              </span>
              <button
                onClick={downloadPDF}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Download PDF
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {items.map((item, i) => (
                <button
                  key={i}
                  className="w-full text-left p-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <nav
        className={`bg-red-600 dark:bg-red-700 text-white px-4 py-3 ${
          isMenuOpen ? "hidden" : "block"
        } lg:block`}
      >
        <div className="flex justify-evenly overflow-x-auto scrollbar-hide max-w-full">
          {items.map((item, i) => (
            <button
              key={i}
              className="px-3 uppercase whitespace-nowrap hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex-shrink-0 text-sm lg:text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
