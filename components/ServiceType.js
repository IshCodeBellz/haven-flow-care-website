import React from "react";
import Image from "next/image";

export default function Staff({ serviceType }) {
  const { serviceTypeTitle, serviceTypeDescription, serviceImage } =
    serviceType.fields;
  return (
    <>
      <div>
        <Image
          src={"/images/heart.jpg"}
          width={90}
          height={90}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">{serviceTypeTitle}</h1>
        <p className="w-80 h-36 line-clamp-6	">{serviceTypeDescription}</p>
      </div>
    </>
  );
}
