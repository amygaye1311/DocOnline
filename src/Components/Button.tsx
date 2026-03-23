import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  >
    {label}
  </button>
);

export default Button;