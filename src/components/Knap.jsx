"use client";
import React from "react";

const OmOs = ({ imageUrl, title, description }) => {
  const omOsStyle = {
    container: {
      display: "flex",
      backgroundColor: "#1B2E4B", // Blå baggrund
      borderRadius: "12px",
      padding: "20px",
      color: "white",
    },
    imageSection: {
      flex: 1,
      marginRight: "20px",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    textSection: {
      flex: 1,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontSize: "40px",
      marginBottom: "10px",
    },
    p: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "20px",
    },
  };

  return (
    <div style={omOsStyle.container}>
      <div style={omOsStyle.imageSection}>
        <img src={imageUrl} alt="Om Os" style={omOsStyle.image} />
      </div>
      <div style={omOsStyle.textSection}>
        <h2 style={omOsStyle.h2}>{title}</h2>
        <p style={omOsStyle.p}>{description}</p>
      </div>
    </div>
  );
};

export default OmOs;
