import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="lg:w-[1100px] mx-auto">
        <Header />
      </div>
      <div className="relative min-h-screen bg-dustyPink">
        <div className="lg:w-[1100px] bg-white mx-auto">
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
