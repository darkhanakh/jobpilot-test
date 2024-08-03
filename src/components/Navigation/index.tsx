import telephoneIcon from "./../../assets/telephone.svg";
import { Link } from "react-router-dom";
import LanguageSelect from "../LanguageSelect";

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
    href: "/",
  },
  {
    title: "Candidates",
    href: "/",
  },
  {
    title: "Pricing Plans",
    href: "/",
  },
  {
    title: "Customer Supports",
    href: "/",
  },
];

const Navigation = () => (
  <nav className="flex justify-around items-center bg-gray-100 py-3 w-[1300px] mx-auto">
    <ul className="flex justify-around items-center list-none">
      {navLink.map((link) => (
        <li key={link.title} className="mr-6">
          <Link
            to={link.href}
            className="text-gray-700 text-lg transition-colors duration-300 hover:text-blue-600"
          >
            {link.title}
          </Link>
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
      <LanguageSelect />
    </div>
  </nav>
);

export default Navigation;
