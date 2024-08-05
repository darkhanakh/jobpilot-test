import Header from "../components/Header";
import bellImg from "../assets/bell.svg";
import { Avatar } from "flowbite-react";
import avatarImg from "../assets/avatar.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import JobAction from "../components/JobAction";
import facebookImg from "../assets/facebook.png";
import JobDescription from "../components/JobDescription";
import JobInfo from "../components/JobInfo";

const JobDetailPage = () => {
  const { id } = useParams();

  const markdown = `
## Job Description

Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!

Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.

The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform.

Want to work with us? You're in good company!

## Requirements

- Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on
- 3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications
- Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel
- Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc)
- Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management
- Familiarity with version control and project management systems (e.g., Github, Jira)
- Ambitious and hungry to grow your career in a fast-growing agency

## Desirable

- Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations
- Working knowledge of payment gateways
- API platform experience / Building restful APIs

## Benefits

- Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)
- 28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday
- Generous annual bonus
- Healthcare package
- Paid community days to volunteer for a charity of your choice
- £100 contribution for your own personal learning and development
- Free Breakfast on Mondays and free snacks in the office
- Access to Perkbox with numerous discounts plus free points from the company to spend as you wish
- Cycle 2 Work Scheme
- Brand new MacBook Pro
- Joining an agency on the cusp of exponential growth and being part of this exciting story
`;

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

          <div className="mt-8 flex">
            <JobDescription text={markdown} />

            <div>
              <JobInfo
                location="Almaty, Kazakhstan"
                salary="$100000 - $120000"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
