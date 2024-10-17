import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function AboutUs({ services }) {
  const { servicesHero, servicesPanel } = services.fields;
  return (
    <div>
      <div className="">
        <Image
          src={`https:${servicesHero.fields.file.url}`}
          width={1366}
          height={400}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div className="bg-panelBlue p-8 flex justify-center ">
        <div className="sm:p-8 text-white sm:text-3xl w-3/4 ">
          <h1>
            <ReactMarkdown>{servicesPanel}</ReactMarkdown>
          </h1>
        </div>
      </div>
    </div>
  );
}
