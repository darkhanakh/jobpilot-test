import { Avatar } from "flowbite-react";
import Header from "../components/Header";
import bellImg from "../assets/bell.svg";
import avatarImg from "../assets/avatar.png";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiCrosshair2Fill } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const FindJobPage = () => {
  const [jobs, setJobs] = useState<
    {
      location: string;
      company: string;
      type: string;
      title: string;
      salary: string;
      id: number;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <div className="flex items-center justify-center w-[25%]">
          <img className="mr-3" src={bellImg} alt="bell icon" />
          <Avatar img={avatarImg} rounded />
        </div>
      </Header>

      <div className="flex items-center justify-between px-28 mx-auto container bg-gray-100">
        <h3 className="text-xl">Find Job</h3>

        {/* Breadcrumbs */}
        <nav className="px-4 py-4">
          <ol className="flex space-x-2">
            <li>
              <Link className="text-gray-500 hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <span>Find Job</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Job Listings */}
      <main className="px-4 pt-6 bg-white min-h-[70vh]">
        <div className="container mx-auto flex flex-col justify-between">
          <div className="flex items-center justify-between border shadow-sm px-4 py-2 rounded-md mb-12">
            <div className="flex items-center">
              <IoIosSearch size={24} className="text-blue-500" />
              <input
                className="ml-2 w-[500px] border-0 bg-white border-transparent focus:border-transparent focus:ring-0"
                type="text"
                placeholder="Search by: Job title, Position, Keyword..."
              />
            </div>
            <div className="flex items-center ml-4 border-l pl-2">
              <CiLocationOn size={24} className="text-blue-500 stroke-1" />
              <input
                className="ml-2 w-[400px] border-0 bg-white border-transparent focus:border-transparent focus:ring-0"
                type="text"
                placeholder="City, state or zip code"
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
              <Button type="primary" className="py-3.5">
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
                {jobs.map((job) => (
                  <Card
                    location={job.location}
                    company={job.company}
                    type={job.type}
                    title={job.title}
                    salary={job.salary}
                    key={job.title}
                  />
                ))}
              </div>
              <Pagination />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindJobPage;
