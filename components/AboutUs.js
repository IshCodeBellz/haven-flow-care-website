import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SEOHead from "./SEOHead";

export default function AboutUs({ main }) {
  const { aboutHero, aboutUsPanel, aboutUsText } = main.fields;
  return (
    <>
      <SEOHead
        title="About Haven Flow | Compassionate Care & Child Services"
        description="Meet the team behind Haven Flow. We're dedicated to delivering trusted, quality care and childcare services across London."
        url="https://www.havenflow.co.uk/about"
        image={undefined}
      />
      <div>
        <div className="">
          <Image
            src={`https:${aboutHero.fields.file.url}`}
            width={1366}
            height={400}
            alt="Homepage Hero"
            className=""
          />
        </div>
        <div className="bg-panelBlue p-4 lg:p-8">
          <div className="p-4 lg:p-8 text-white md:text-3xl lg:text-5xl text-lg">
            <h1>
              <ReactMarkdown>{aboutUsPanel}</ReactMarkdown>
            </h1>
          </div>
        </div>
        <div className="">
          <div className="px-6 lg:px-16 py-9">
            <h1 className="text-2xl md:text-3xl lg:text-5xl py-4 text-center lg:text-left">
              About Us
            </h1>
            <p>{aboutUsText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
