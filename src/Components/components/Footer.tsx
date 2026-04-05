import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-2 mt-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} DocOnline – Développé par B2GS
      </p>
      <p className="text-xs mt-1">
        Application médicale – Sénégal 🌍
      </p>
    </footer>
  );
};

export default Footer;