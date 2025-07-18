import dynamic from "next/dynamic";
import Footer from "./Footer";

// Dynamically load Header without SSR
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:w-[1100px] mx-auto w-full">
        <Header />
      </header>

      <main className="flex-grow bg-dustyPink w-full">
        <div className="lg:w-[1100px] mx-auto w-full">{children}</div>
      </main>

      <footer className="w-full bg-dustyPink pt-5 lg:pt-0">
        <Footer />
      </footer>
    </div>
  );
}
