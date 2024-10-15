import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Homepage({ main }) {
  
  const {homepageHero, heroText, heroSubtitle, homepageTitle, homepageText, homepageTextBottom, servicesHeader,servicesSubtitle} = main.fields
  return (
    <div className="bg-white font-syne text-lightBlack">
      <div className='relative'>
        <div className=''>
        <Image
          src={`https:${homepageHero.fields.file.url}`}
          width={1366}
          height={400}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div className='absolute bottom-10 lg:bottom-20 bg-black bg-opacity-15 lg:w-[1000px] py-5 px-3  lg:py-10'>
         
            <h1 className='text-white font-bold text-2xl lg:text-5xl font-sans'>{heroText}</h1>
      <p className='text-white text-xl lg:text-5xl lg:pt-2'>{ heroSubtitle}</p> 
       
       
      </div>
      </div>
      
      
      <div className="py-6 px-10">
        <div>
          <h2 className="text-3xl lg:text-5xl">{homepageTitle}</h2>
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
