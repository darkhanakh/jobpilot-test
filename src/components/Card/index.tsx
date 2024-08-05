import React from "react";
import googleImg from "./../../assets/google.png";
import { CiBookmark } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

interface CardProps {
  title: string;
  type: string;
  salary: string;
  company: string;
  location: string;
  gradient?: boolean; // Add a prop to conditionally apply the gradient
}

const Card: React.FC<CardProps> = ({
  type,
  salary,
  title,
  company,
  location,
  gradient = false,
}) => {
  return (
    <div
      className={`border p-4 rounded-md flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg ${
        gradient
          ? "bg-gradient-to-r from-[#FFF6E6] to-white shadow-[0px_2px_18px_rgba(24,25,28,0.03)]"
          : ""
      } min-h-[150px]`}
    >
      <h5 className="font-semibold text-xl line-clamp-1">{title}</h5>
      <div className="flex items-center mb-2">
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded uppercase text-xs font-semibold">
          {type}
        </span>
        <span className="text-gray-400 text-sm ml-3">Salary: {salary}</span>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <img
            src={googleImg}
            alt="Company Logo"
            className="w-12 h-12 mr-2.5"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{company}</span>
            <span className="text-gray-400 flex items-center">
              <SlLocationPin size={18} className="mr-0.5" />
              {location}
            </span>
          </div>
        </div>
        <CiBookmark color="#C8CCD1" className="stroke-1 size-5" />
      </div>
    </div>
  );
};

export default Card;
