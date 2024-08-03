import { IoIosSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

const FindJobSearch = () => {
  return (
    <div className="flex items-center border mt-5 rounded-md w-[122%] bg-white px-1 py-2">
      <div className="flex items-center pl-2">
        <IoIosSearch size={24} className="text-blue-500" />
        <input
          className="pl-3 border-0 bg-white"
          type="text"
          placeholder="Job title, Keyword..."
        />
      </div>
      <div className="flex items-center border-l pl-2">
        <GrLocation size={24} className="text-blue-500" />
        <input
          type="text"
          placeholder="Your location"
          className="pl-2 border-0"
        />
      </div>
      <p className="text-white font-semibold px-7 rounded-md py-3 text-sm bg-blue-500 w">
        Find Job
      </p>
    </div>
  );
};

export default FindJobSearch;
