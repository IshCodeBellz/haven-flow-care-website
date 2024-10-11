import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:w-[1100px] mx-auto w-full">
        <Header />
      </header>

      <main className="flex-grow bg-dustyPink w-full">
        <div className="lg:w-[1100px] mx-auto w-full ">{children}</div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
