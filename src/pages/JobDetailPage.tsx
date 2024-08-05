import Header from "../components/Header";
import bellImg from "../assets/bell.svg";
import { Avatar } from "flowbite-react";
import avatarImg from "../assets/avatar.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import JobAction from "../components/JobAction";
import facebookImg from "../assets/facebook.png";

const JobDetailPage = () => {
  const { id } = useParams();

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
          <JobAction
            img={facebookImg}
            title="Senior UX Designer"
            type="full-time"
            company="Google"
            isFeatured
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
