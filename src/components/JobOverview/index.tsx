import React from "react";
import {
  FaLink,
  FaLinkedin,
  FaRegCalendar,
  FaRegClock,
  FaWallet,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FiLayers, FiMail } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import Button from "../Button";

interface JobCharacteristicProps {
  icon: React.ReactNode;
  label: string;
  info: string;
}

const JobCharacteristic: React.FC<JobCharacteristicProps> = ({
  icon,
  label,
  info,
}) => (
  <div className="flex flex-col justify-center p-3">
    {icon}
    <h4 className="text-gray-400 font-light uppercase text-sm mt-2">
      {label}:
    </h4>
    <p className="font-semibold text-lg">{info}</p>
  </div>
);

const JobOverview: React.FC = () => (
  <div className="flex justify-center flex-col border-2 rounded-lg mt-5">
    <div className="p-8">
      <h3 className="font-semibold text-xl pl-3">Job Overview</h3>
      <div className="flex flex-wrap">
        <JobCharacteristic
          icon={<FaRegCalendar className="text-[#0A65CC]" size={30} />}
          label="Job posted"
          info="14 Jun, 2021"
        />
        <JobCharacteristic
          icon={<FaRegClock className="text-[#0A65CC]" size={30} />}
          label="Job Expire In"
          info="14 Aug, 2021"
        />
        <JobCharacteristic
          icon={<FiLayers className="text-[#0A65CC]" size={30} />}
          label="Job Level"
          info="Entry Level"
        />
        <JobCharacteristic
          icon={<FaWallet className="text-[#0A65CC]" size={30} />}
          label="Experience"
          info="$50k-80k/month"
        />
        <JobCharacteristic
          icon={<BsBriefcase className="text-[#0A65CC]" size={30} />}
          label="Education"
          info="Graduation"
        />
      </div>
    </div>
    <div className="border-t-2">
      <div className="p-8 flex flex-col justify-center">
        <h4 className="font-semibold text-xl mb-3">Share this job</h4>
        <div className="flex">
          <Button
            type="secondary"
            className="flex items-center font-medium bg-[#E7F0FA] mr-2"
          >
            <FaLink className="mr-1" />
            Copy Link
          </Button>
          <Button
            type="secondary"
            className="px-2 py-2 bg-[#E7F0FA] group hover:bg-blue-600 hover:text-white mr-2"
          >
            <FaLinkedin
              size={24}
              className="text-blue-500 group-hover:text-white transition duration-300"
            />
          </Button>
          <Button
            type="secondary"
            className="px-2 py-2 bg-[#E7F0FA] group hover:bg-blue-600 hover:text-white mr-2"
          >
            <FaFacebook
              size={24}
              className="text-blue-500 group-hover:text-white transition duration-300"
            />
          </Button>
          <Button
            type="secondary"
            className="px-2 py-2 bg-[#E7F0FA] group hover:bg-blue-600 hover:text-white mr-2"
          >
            <FaTwitter
              size={24}
              className="text-blue-500 group-hover:text-white transition duration-300"
            />
          </Button>
          <Button
            type="secondary"
            className="px-2 py-2 bg-[#E7F0FA] group hover:bg-blue-600 hover:text-white mr-2"
          >
            <FiMail
              size={24}
              className="text-blue-500 group-hover:text-white transition duration-300"
            />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default JobOverview;
