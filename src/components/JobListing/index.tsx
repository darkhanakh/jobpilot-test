import React from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import { CiLocationOn } from "react-icons/ci";
import { RiCrosshair2Fill } from "react-icons/ri";
import Button from "../Button";
import { FiSliders } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
}

interface JobListingsProps {
  jobs: Job[];
  isLoading: boolean;
  searchTerm: string;
  locationTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: () => void;
}

const JobListings: React.FC<JobListingsProps> = ({
  jobs,
  isLoading,
  searchTerm,
  locationTerm,
  onSearchChange,
  onLocationChange,
  onFilter,
}) => {
  return (
    <main className="px-4 py-6 bg-white min-h-[70vh]">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="flex items-center justify-between border shadow-sm px-4 py-2 rounded-md mb-12">
          <div className="flex items-center">
            <IoIosSearch size={24} className="text-blue-500" />
            <input
              className="ml-2 w-[500px] border-0 bg-white border-transparent focus:border-transparent focus:ring-0"
              type="text"
              placeholder="Search by: Job title, Position, Keyword..."
              value={searchTerm}
              onChange={onSearchChange}
            />
          </div>
          <div className="flex items-center ml-4 border-l pl-2">
            <CiLocationOn size={24} className="text-blue-500 stroke-1" />
            <input
              className="ml-2 w-[400px] border-0 bg-white border-transparent focus:border-transparent focus:ring-0"
              type="text"
              placeholder="City, state or zip code"
              value={locationTerm}
              onChange={onLocationChange}
            />
            <RiCrosshair2Fill size={24} className="text-gray-400" />
          </div>
          <div className="flex items-center">
            <Button type="secondary" className="text-black bg-[#F1F2F4] mr-4">
              <div className="flex items-center justify-center">
                <FiSliders className="mr-2" />
                Filters
              </div>
            </Button>
            <Button type="primary" className="py-3.5" onClick={onFilter}>
              Find Job
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {jobs.map((job, index) => (
                <Link to={`/jobs/${job.id}`}>
                  <Card
                    location={job.location}
                    company={job.company}
                    type={job.type}
                    title={job.title}
                    salary={job.salary}
                    key={job.id}
                    gradient={index % 2 === 0}
                  />
                </Link>
              ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </main>
  );
};

export default JobListings;
