import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the client-only form
const BookNannyForm = dynamic(() => import("../components/BookNannyForm"), {
  ssr: false,
});

export default function BookNannyPage() {
  return (
    <div className="min-h-screen bg-panelBlue flex items-center justify-center px-4">
      <BookNannyForm />
    </div>
  );
}
