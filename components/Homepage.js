import React from "react";
import Image from "next/image";
import Link from "next/link";
import FlyerModal from "../components/FlyerModal";

export default function Homepage({ main }) {
  const {
    homepageHero,
    heroText,
    heroSubtitle,
    homepageTitle,
    homepageText,
    homepageTextBottom,
    servicesHeader,
    servicesSubtitle,
  } = main.fields;
  return (
    <div className="bg-white font-syne text-lightBlack">
      <div className="relative">
        <div className="">
          <Image
            src={`https:${homepageHero.fields.file.url}`}
            width={1366}
            height={400}
            alt="Homepage Hero"
            className=""
          />
        </div>
        <div className="absolute bottom-5 lg:bottom-20 bg-black bg-opacity-25 lg:w-[1000px] py-5 px-3  lg:py-10">
          <h1 className="text-white font-bold text-2xl lg:text-5xl font-sans">
            {heroText}
          </h1>
          <p className="text-white text-xl lg:text-5xl lg:pt-2">
            {heroSubtitle}
          </p>
        </div>
      </div>

      <div className="py-6 px-5 lg:px-10">
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
        {/* <div className=" bg-black h-32 text-white sm:max-2xl:p-8 p-4 grid grid-cols-6 rounded-lg">
          <div className="md:max-2xl:text-3xl text-xl p-4 col-start-1 col-end-4">
            Better Care Starts with You!
          </div>
          <Link
            href="/contact"
            // target="blank"
            className="bg-darkBlue rounded col-end-7 col-span-3 text-lg flex justify-center md:max-2xlg:text-xl"
          >
            <button className="">NANNY JOBS</button>
          </Link>
        </div> */}
        <br />
        <div className="rich-text pb-5">
          <p>{homepageTextBottom}</p>
        </div>
        <div className="w-full flex justify-center p-4 ">
          <FlyerModal />
        </div>
      </div>
      <div className=" bg-black h-32 text-white sm:max-2xl:p-8 p-4 grid grid-cols-6">
        <div className="md:max-2xl:text-3xl text-xl p-4 col-start-1 col-end-4">
          Better Care Starts with You!
        </div>
        <Link
          href="/contact"
          // target="blank"
          className="bg-darkBlue rounded col-end-7 col-span-3 text-lg flex justify-center md:max-2xlg:text-xl"
        >
          <button className="">CAREGIVER JOBS</button>
        </Link>
      </div>
    </div>
  );
}
