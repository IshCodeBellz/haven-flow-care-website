import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function AboutUs({ main }) {
  const { aboutHero, aboutUsPanel, aboutUsText } = main.fields;
  return (
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
      <div className="bg-panelBlue p-8">
        <div className="p-8 text-white sm:text-5xl text-lg">
          <h1>
            <ReactMarkdown>{aboutUsPanel}</ReactMarkdown>
          </h1>
        </div>
      </div>
      <div className="">
        <div className="pr-16 pl-16 pt-9 pb-9">
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
