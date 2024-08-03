import React from "react";

interface CardProps {
  img: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ img, title, subtitle }) => (
  <div className="flex-grow flex px-4 py-4 bg-white border rounded-md items-center shadow-sm">
    <img className="w-16 h-16" src={img} alt="" />
    <div className="pl-3">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-gray-400 text-xs">{subtitle}</p>
    </div>
  </div>
);

export default Card;
