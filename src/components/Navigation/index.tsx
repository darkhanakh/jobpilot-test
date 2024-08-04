import telephoneIcon from "./../../assets/telephone.svg";
import { NavLink } from "react-router-dom";
import kazakhstanImg from "./../../assets/kazakhstan.png";
import russiaImg from "./../../assets/russia.png";
import usaImg from "./../../assets/usa.svg";
import Select from "../Select";

const languages = [
  {
    label: "English",
    img: usaImg,
  },
  {
    label: "Kazakh",
    img: kazakhstanImg,
  },
  {
    label: "Russian",
    img: russiaImg,
  },
];

const navLink = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Find Job",
    href: "/find-job",
  },
  {
    title: "Employers",
    href: "/employers",
  },
  {
    title: "Candidates",
    href: "/candidates",
  },
  {
    title: "Pricing Plans",
    href: "/pricing-plans",
  },
  {
    title: "Customer Supports",
    href: "/customer-supports",
  },
];

const Navigation = () => {
  return (
    <nav className="flex justify-around items-center bg-gray-100 py-3 container mx-auto">
      <ul className="flex justify-around items-center list-none">
        {navLink.map((link) => (
          <li key={link.title} className="mr-6">
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-lg transition-colors duration-300 border-b-2 border-blue-600 pb-4"
                  : "text-gray-700 text-lg transition-colors duration-300 hover:text-blue-600"
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <img src={telephoneIcon} alt="Telephone Icon" className="mr-2" />
          <a
            href="tel:+1-202-555-0178"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-600"
          >
            +1-202-555-0178
          </a>
        </div>
        <Select items={languages} />
      </div>
    </nav>
  );
};

export default Navigation;
