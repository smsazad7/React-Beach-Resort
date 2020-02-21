import React from "react";

export default function Bennar({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div></div>
      {children}
    </div>
  );
}
