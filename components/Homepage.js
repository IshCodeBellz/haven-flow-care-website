import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Homepage({ main }) {
  
  const {homepageHero, heroText, heroSubtitle, homepageTitle, homepageText, homepageTextBottom, servicesHeader, servicesSubtitle} = main.fields
  return (
    <div>
      <div>
        <Image
          src={`https:${homepageHero.fields.file.url}`}
          width={1366}
          height={400}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div>
        <h2>{homepageTitle}</h2>
      </div>

      <div className='rich-text'>
        {documentToReactComponents(homepageText)}
      </div>
      <br />
      <div>
        <h2 className='text-3xl'>{servicesHeader}</h2>
        <p className='text-xl pt-2'>{servicesSubtitle }</p>
      </div>
      <br />
      <div className='rich-text pb-5'>
        {documentToReactComponents(homepageTextBottom)}
      </div>
    </div>
  );
}
