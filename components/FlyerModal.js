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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2">
          <div className="relative bg-white rounded-xl shadow-lg p-4 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-lg font-bold"
            >
              ✖
            </button>

            {/* Images Section: Responsive Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start mt-4">
              {/* <img
                src="/flyer.png"
                alt="Ofsted Nanny Services Flyer"
                className="rounded-md max-w-full max-h-[480px] object-contain"
              />  */}
              <div className="rounded-md max-w-full max-h-[480px] overflow-auto">
                <NannyServicesFlyer />
              </div>

              {/* Side Info image */}
              <img
                src="/flyer-info.png"
                alt="SEND and Ofsted Info"
                className="rounded-md w-full h-auto max-h-[400px] object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link href="/book-nanny">
                <button className="w-full sm:w-64 bg-green-800 hover:bg-green-600 text-white rounded-lg px-6 py-3 text-sm font-semibold text-center">
                  Book a Nanny
                </button>
              </Link>

              <a
                href="/Haven_Flow_Nanny_Application_Form_2025-06-25.pdf"
                download
                className="w-full sm:w-64 bg-darkBlue hover:bg-indigo-700 text-white rounded-lg px-6 py-3  text-sm font-semibold text-center"
              >
                Download Application Form
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
