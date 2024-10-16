import React from "react";
import Image from "next/image";

export default function Staff({ serviceType }) {
  const { serviceTypeTitle, serviceTypeDescription } = serviceType.fields;
  return (
    <div className="flex flew-row pl-16 pr-16 items-center">
      <div className="basis-1/2 p-10 ">
        <Image
          src={"/images/heart.jpg"}
          width={200}
          height={200}
          alt="Homepage Hero"
          className=""
        />
      </div>
      <div className="basis-1/2 p-10 ">
        <h1>{serviceTypeTitle}</h1>
        <p>{serviceTypeDescription}</p>
      </div>
    </div>
  );
}
