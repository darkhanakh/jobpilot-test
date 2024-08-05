import React from "react";
import { RiMap2Line } from "react-icons/ri";

interface JobInfoProps {
  location: string;
  salary: string;
}

const JobInfo: React.FC<JobInfoProps> = ({ location, salary }) => (
  <div className="flex items-center border-2 rounded-lg p-8">
    <div className="flex flex-col items-center border-gray-300 border-r-2 pr-8">
      <h4 className="font-semibold">Salary (USD)</h4>
      <p className="text-[#0BA02C] text-lg font-semibold">{salary}</p>
      <span className="text-[#767F8C] text-sm font-light">Yearly salary</span>
    </div>
    <div className="pl-8 flex items-center flex-col">
      <RiMap2Line size={30} className="text-[#0A65CC]" />
      <h6 className="font-semibold text-lg">Job Location</h6>
      <p className="text-gray-400">{location}</p>
    </div>
  </div>
);

export default JobInfo;
