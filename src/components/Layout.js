import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Walid Birouk</title>
        <meta
          name="description"
          content="AI Bachelor's portfolio by Walid Birouk"
        />
        <meta name="author" content="Walid Birouk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div
        style={{
          background: "linear-gradient(to right, #0A0A0B, #202124)",
        }}
        className="flex-col min-h-screen"
      >
        <Navbar />

        <main
          className="container flex-grow mx-auto p-4 rounded-lg shadow-lg mt-5 mb-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            color: "#FFFFFF",
          }}
        >
          <div className="px-5">{children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
