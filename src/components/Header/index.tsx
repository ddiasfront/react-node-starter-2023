import React from "react";
import img from "../../public/img.png";

export const Header = () => {
  return (
    <header>
      <h1 className="title">Header</h1>
      <img src={img} alt="monday" />
    </header>
  );
};
