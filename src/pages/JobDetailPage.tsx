import Header from "../components/Header";
import bellImg from "../assets/bell.svg";
import { Avatar } from "flowbite-react";
import avatarImg from "../assets/avatar.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import JobAction from "../components/JobAction";
import facebookImg from "../assets/facebook.png";
import JobDescription from "../components/JobDescription";
import JobInfo from "../components/JobInfo";
import JobOverview from "../components/JobOverview";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Job } from "./FindJobPage";

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jobpilot-test-json.vercel.app/jobs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Job not found");
        }
        return response.json();
      })
      .then((data) => {
        setJob(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });

    fetch("https://jobpilot-test-json.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>{error}</p>
        <Link to="/find-job" className="text-blue-500 hover:underline">
          Go back to job listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <div className="flex items-center justify-center w-[25%]">
          <img className="mr-3" src={bellImg} alt="bell icon" />
          <Avatar img={avatarImg} rounded />
        </div>
      </Header>

      <Breadcrumbs
        title="Job Details"
        items={[
          { to: "/find-job", label: "Find Job" },
          { to: `/jobs/${id}`, label: "Job Detail" },
        ]}
      />

      <main className="py-8 bg-white">
        <div className="container mx-auto w-[85%]">
          {job && (
            <>
              <JobAction
                img={facebookImg}
                title={job.title}
                type={job.type}
                company={job.company}
                isFeatured
              />

              <div className="mt-8 flex">
                <JobDescription text={job.description ?? ""} />

                <div className="flex flex-col items-center w-[40%]">
                  <JobInfo location={job.location} salary={job.salary} />
                  <JobOverview />
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <section className="bg-white container mx-auto px-20 py-24 border-t-2 border-gray-200">
        <h2 className="text-5xl font-medium mb-6">Related Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((relatedJob, index) => (
            <Link to={`/jobs/${relatedJob.id}`} key={relatedJob.id}>
              <Card
                location={relatedJob.location}
                company={relatedJob.company}
                type={relatedJob.type}
                title={relatedJob.title}
                salary={relatedJob.salary}
                gradient={index % 2 === 0}
              />
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
