import React from "react";
import "./Header.css";

// if true: do thise ? else_this
const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`header-image ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="logo"
      />
      <h1
        className={`head-text ${
          headerExpanded ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        {headTitle}
      </h1>
    </div>
  );
};

export default Header;
