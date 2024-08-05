import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode | string;
  type: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "transition ease-in-out duration-300 transform hover:scale-105 active:scale-95",
        type === "primary"
          ? "text-white font-semibold px-7 rounded-md py-3 text-sm bg-blue-500 cursor-pointer hover:bg-blue-600"
          : "text-blue-500 border px-5 py-3 font-semibold rounded-md cursor-pointer hover:bg-blue-100",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
