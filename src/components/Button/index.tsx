import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: string;
  type: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  className,
}) => {
  return (
    <button
      className={clsx(
        type === "primary"
          ? "text-white font-semibold px-7 rounded-md py-3 text-sm bg-blue-500 cursor-pointer"
          : "text-blue-500 border px-5 py-3 font-semibold rounded-md cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
