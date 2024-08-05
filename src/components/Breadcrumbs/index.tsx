import { Link, useLocation } from "react-router-dom";
import React from "react";

interface BreadcrumbsProps {
  title: string;
  items: {
    to: string;
    label: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, items }) => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-between px-28 mx-auto container bg-gray-100">
      <h3 className="text-xl">{title}</h3>

      <nav className="px-4 py-4">
        <ol className="flex space-x-2">
          <li>
            <Link className="text-gray-500 hover:underline" to="/">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <span>/</span>
              </li>
              <li>
                {location.pathname === item.to ? (
                  <span className="text-black">{item.label}</span>
                ) : (
                  <Link className="text-gray-500 hover:underline" to={item.to}>
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
