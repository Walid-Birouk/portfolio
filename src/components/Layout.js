import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

// Layout component for dark mode with a gradient background
const Layout = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #0A0A0B, #202124)",
      }}
      className="flex-col min-h-screen "
    >
      <Navbar />

      <main
        className="container flex-grow mx-auto p-4 rounded-lg shadow-lg mt-2 mb-2"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)", // Very subtle transparency for a dark mode feel
          backdropFilter: "blur(10px)", // Optional: adds a blur effect to the background container for a frosted glass look
          color: "#FFFFFF", // Ensuring text is white for dark mode
        }}
      >
        <div className="px-5">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
