import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import Button from "../Button";
import { IoMdArrowForward } from "react-icons/io";

interface JobActionProps {
  img: string;
  title: string;
  company: string;
  type: string;
  isFeatured?: boolean;
}

const JobAction: React.FC<JobActionProps> = ({
  img,
  company,
  title,
  type,
  isFeatured = true,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={img} alt={`logo ${company}`} className="w-24 h-24 mr-6" />
        <div>
          <h3 className="font-semibold text-2xl">{title}</h3>
          <div className="flex items-center">
            <span className="text-lg text-gray-700 mr-2">at {company}</span>
            <span className="bg-[#0BA02C] text-white px-2 py-1 rounded uppercase text-xs font-semibold">
              {type}
            </span>
            {isFeatured && (
              <span className="text-[#E05151] bg-[#FFEDED] rounded-[52px] px-3 py-1 ml-2">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Button type="secondary" className="bg-[#E7F0FA] h-12 w-14 mr-2">
          <FaRegBookmark size={18} className="stroke-1" />
        </Button>
        <Button type="primary" className="flex items-center py-3 px-10">
          Apply now
          <IoMdArrowForward size={24} />
        </Button>
      </div>
    </div>
  );
};

export default JobAction;
