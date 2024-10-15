import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Homepage({ main }) {
  
  const {homepageHero, heroText, heroSubtitle, homepageTitle, homepageText, homepageTextBottom, servicesHeader,servicesSubtitle} = main.fields
  return (
    <div className="bg-white font-syne text-lightBlack">
      <div>
        <Image
          src={`https:${homepageHero.fields.file.url}`}
          width={1366}
          height={400}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div className="p-5">
        <div>
          <h2 className="text-4xl lg:text-6xl">{homepageTitle}</h2>
        </div>

        <div className="rich-text pt-3">
          <p>{homepageText}</p> 
        </div>
        <br />
        <div>
          <h2 className="text-4xl">{servicesHeader}</h2>
          <p className="text-lg lg:text-xl pt-2">{servicesSubtitle}</p>
        </div>
        <br />
        <div className="rich-text pb-5">
          <p>{homepageTextBottom}</p>
        </div>
      </div>
    </div>
  );
}
