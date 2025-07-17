import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SEOHead from "./SEOHead";

export default function AboutUs({ main }) {
  const { aboutHero, aboutUsPanel, aboutUsText } = main.fields;
  return (
    <div>
      <SEOHead
        title="About Haven Flow | Compassionate Care & Child Services"
        description="Meet the team behind Haven Flow. We're dedicated to delivering trusted, quality care and childcare services across London."
        url="https://www.havenflow.co.uk/about"
        image={`https:${aboutHero.fields.file.url}`}
      />

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
  );
}

{
  /* <div>
    <div className="flex flew-row pl-16 pr-16 items-center">
        <div className="basis-1/2 p-10 ">
            <Image
            src={`https:${aboutHero.fields.file.url}`}
            width={400}
            height={400}
            alt="Homepage Hero"
            className="rounded"
            />
        </div>
        <div className="basis-1/2 p-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            elementum elit sit amet dignissim dapibus. Nulla facilisi. Vivamus
            tempor augue est, non fermentum ante ultricies sit amet. Vivamus
            ullamcorper purus non turpis fermentum placerat.
        </div>
    </div>
    <div className="flex flew-row pl-16 pr-16 items-center">
        <div className="basis-1/2 p-10 ">
            <Image
            src={`https:${aboutHero.fields.file.url}`}
            width={400}
            height={400}
            alt="Homepage Hero"
            className="rounded"
            />
        </div>
        <div className="basis-1/2 p-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            elementum elit sit amet dignissim dapibus. Nulla facilisi. Vivamus
            tempor augue est, non fermentum ante ultricies sit amet. Vivamus
            ullamcorper purus non turpis fermentum placerat.
        </div>
    </div>
    <div className="flex flew-row pl-16 pr-16 items-center">
        <div className="basis-1/2 p-10 ">
            <Image
            src={`https:${aboutHero.fields.file.url}`}
            width={400}
            height={400}
            alt="Homepage Hero"
            className="rounded"
            />
        </div>
        <div className="basis-1/2 p-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            elementum elit sit amet dignissim dapibus. Nulla facilisi. Vivamus
            tempor augue est, non fermentum ante ultricies sit amet. Vivamus
            ullamcorper purus non turpis fermentum placerat.
        </div>
    </div>
</div> */
}
