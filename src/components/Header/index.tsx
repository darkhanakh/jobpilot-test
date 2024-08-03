import { PiSuitcaseSimple } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

const Index = () => {
  return (
    <div className="pt-5 pb-5 border-b-4 bg-white">
      <div className="flex items-center justify-between w-[1300px] mx-auto">
        <div className="flex items-center mx-auto w-30%">
          <div className="flex items-center">
            <PiSuitcaseSimple size={40} className="text-blue-500" />
            <p className="text-[30px] font-semibold ml-2">Jobpilot</p>
          </div>
          <div className="flex items-center ml-5 border shadow-sm px-4 py-2 rounded-md">
            <select className="border-0">
              <option>Kazakhstan</option>
              <option>India</option>
              <option>Russia</option>
            </select>
            <div className="flex items-center ml-4 border-l pl-2">
              <IoIosSearch size={24} className="text-blue-500" />
              <input
                className="ml-2 bg-gray-100 w-[400px] border-0 bg-white"
                type="text"
                placeholder="Job title, keyword, company"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mx-auto w-30%">
          <p className="text-blue-500 border px-5 py-3 font-semibold rounded-md cursor-pointer">
            Sign In
          </p>
          <p className="ml-3 text-white border border-blue-500 px-5 py-[0.65rem] font-semibold bg-blue-500 rounded-md cursor-pointer">
            Post A Jobs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
