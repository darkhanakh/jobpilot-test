import { IoIosSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import Button from "../Button";

const FindJobSearch = () => {
  return (
    <div className="flex items-center border mt-5 rounded-md w-[125%] bg-white px-1 py-2">
      <div className="flex items-center pl-2">
        <IoIosSearch size={24} className="text-blue-500" />
        <input
          className="pl-3 border-0 bg-white focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Job title, Keyword..."
        />
      </div>
      <div className="flex items-center border-l pl-2">
        <GrLocation size={24} className="text-blue-500" />
        <input
          type="text"
          placeholder="Your location"
          className="pl-2 border-0 border-transparent focus:border-transparent focus:ring-0"
        />
      </div>
      <Button type="primary">Find Job</Button>
    </div>
  );
};

export default FindJobSearch;
