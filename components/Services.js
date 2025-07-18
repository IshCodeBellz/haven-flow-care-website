import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SEOHead from "./SEOHead";

export default function AboutUs({ services }) {
  const { servicesHero, servicesPanel } = services.fields;
  return (
    <>
      <SEOHead
        title="Our Services | Ofsted Nanny, SEND Support & Care | Haven Flow"
        description="Discover Haven Flow’s range of services including Ofsted-registered nanny placements, SEND childcare support, and family-centered care across London."
        url="https://www.havenflow.co.uk/services"
        image={`https:${servicesHero.fields.file.url}`}
      />
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
        <div className="bg-panelBlue p-4 lg:p-8 flex justify-center ">
          <div className="p-4 lg:p-8 text-white text-md lg:text-3xl lg:w-3/4 ">
            <h1>
              <ReactMarkdown>{servicesPanel}</ReactMarkdown>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
