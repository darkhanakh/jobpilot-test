import { Avatar } from "flowbite-react";
import Header from "../components/Header";
import bellImg from "../assets/bell.svg";
import avatarImg from "../assets/avatar.png";
import Footer from "../components/Footer";
import { SetStateAction, useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import JobListings from "../components/JobListing";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}

const FindJobPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  useEffect(() => {
    fetch("https://jobpilot-test-json.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocationTerm(e.target.value);
  };

  const handleFilter = () => {
    const filtered = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(locationTerm.toLowerCase())
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <div className="flex items-center justify-center w-[25%]">
          <img className="mr-3" src={bellImg} alt="bell icon" />
          <Avatar img={avatarImg} rounded />
        </div>
      </Header>

      <Breadcrumbs
        title="Find Job"
        items={[{ to: "/find-job", label: "Find Job" }]}
      />

      <JobListings
        jobs={filteredJobs}
        isLoading={isLoading}
        searchTerm={searchTerm}
        locationTerm={locationTerm}
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
        onFilter={handleFilter}
      />

      <Footer />
    </div>
  );
};

export default FindJobPage;
