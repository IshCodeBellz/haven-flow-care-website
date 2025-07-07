"use client";

import { useState } from "react";
import Link from "next/link";
import NannyServicesFlyer from "../pages/NannyServicesFlyer";

export default function FlyerModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-darkBlue text-white px-4 py-2 rounded-lg shadow-md hover:darkBlue-700"
      >
        View Ofsted Nanny Services Flyer
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-6xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-lg font-bold"
            >
              ✖
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Main flyer */}
              {/* <img
                src="/flyer.png"
                alt="Ofsted Nanny Services Flyer"
                className="rounded-md max-w-full max-h-[480px] object-contain"
              /> */}
              <div className="rounded-md max-w-full max-h-[480px] overflow-auto">
                <NannyServicesFlyer />
              </div>

              {/* Side Info image */}
              <img
                src="/flyer-info.png"
                alt="SEND and Ofsted Info"
                className="rounded-md max-w-full max-h-[480px] object-contain"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                href="/book-nanny"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-semibold"
                // target="blank"
              >
                <button className="">Book a Nanny</button>
              </Link>
              <Link
                href="/apply-nanny"
                // target="blank"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-semibold"
              >
                <button className="">Apply to Become a Nanny</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
