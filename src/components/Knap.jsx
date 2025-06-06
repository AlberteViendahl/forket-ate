"use client";
import React from "react";

const BookButton = ({ label }) => {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    button: {
      backgroundColor: "#ffffff",
      color: "#67362D",
      border: "1px solid #67362D",
      padding: "10px 15px",
      margin: "30px",
      borderRadius: "12px",
      fontSize: "18px",
      fontFamily: "sans-serif",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    hover: {
      backgroundColor: "#B7CBD4",
      color: "#35465F",
      border: "1px solid #35465F",
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.wrapper}>
      <button
        style={
          isHovered ? { ...styles.button, ...styles.hover } : styles.button
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label}
      </button>
    </div>
  );
};

export default BookButton;
