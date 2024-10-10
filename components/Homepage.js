import React from 'react'
import Image from 'next/image'

export default function Homepage({ main }) {
  
  const {homepageHero, heroText, heroSubtitle, homepageTitle, homepageText, homepageTextBottom} = main.fields

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
    </div>
  );
}
