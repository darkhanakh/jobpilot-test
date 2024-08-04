import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Pagination = () => (
  <div className="flex justify-center space-x-2 mt-12">
    <button className="px-3 py-3 p-2 rounded-full hover:bg-[#E7F0FA]">
      <IoMdArrowBack size={24} className="text-blue-400 stroke-0" />
    </button>
    <button className="px-4 py-3 bg-blue-600 text-white rounded-full">
      01
    </button>
    <button className="px-4 py-3 hover:bg-gray-200 rounded-full">02</button>
    <button className="px-4 py-3 hover:bg-gray-200 rounded-full">03</button>
    <button className="px-4 py-3 hover:bg-gray-200 rounded-full">04</button>
    <button className="px-4 py-3 hover:bg-gray-200 rounded-full">05</button>
    <button className="px-3 py-3 rounded-full hover:bg-[#E7F0FA]">
      <IoMdArrowForward size={24} className="text-blue-400 stroke-0" />
    </button>
  </div>
);

export default Pagination;
