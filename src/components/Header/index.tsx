import { PiSuitcaseSimple } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import kazakhstanImg from "./../../assets/kazakhstan.png";
import russiaImg from "./../../assets/russia.png";
import indiaImg from "./../../assets/india.png";
import Select from "../Select";
import React from "react";

const countries = [
  {
    label: "Kazakhstan",
    img: kazakhstanImg,
  },
  {
    label: "India",
    img: indiaImg,
  },
  {
    label: "Russia",
    img: russiaImg,
  },
];

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="pt-5 pb-5 bg-white">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center mx-auto">
          <div className="flex items-center">
            <PiSuitcaseSimple size={40} className="text-blue-500" />
            <p className="text-[30px] font-semibold ml-2">Jobpilot</p>
          </div>
          <div className="flex items-center ml-5 border shadow-sm px-4 py-2 rounded-md">
            <Select items={countries} />
            <div className="flex items-center ml-4 border-l pl-2">
              <IoIosSearch size={24} className="text-blue-500" />
              <input
                className="ml-2 w-[400px] border-0 bg-white  border-transparent focus:border-transparent focus:ring-0"
                type="text"
                placeholder="Job title, keyword, company"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
