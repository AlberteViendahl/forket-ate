"use client";
import React, { useState } from "react";

const Knap = ({ children, onClick }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? "#67362D" : "white",
    border: `1px solid ${hover ? "#DBA581" : "#67362D"}`,
    borderRadius: "12px",
    padding: "20px 40px",
    color: hover ? "#DBA581" : "#67362D",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

export default Knap;
