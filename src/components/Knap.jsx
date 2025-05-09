"use client";
import React from "react";

const BookButton = ({ label }) => {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "20px 0",
    },
    button: {
      backgroundColor: "#ffffff",
      color: "#67362D",
      border: "1px solid #67362D",
      padding: "20px 40px",
      borderRadius: "12px",
      fontSize: "18px",
      fontFamily: "sans-serif",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    hover: {
      backgroundColor: "#67362D",
      color: "#DBA581",
      border: "1px solid #DBA581",
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
