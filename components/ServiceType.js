import React from "react";
import Image from "next/image";

export default function Staff({ serviceType }) {
  const { serviceTypeTitle, serviceTypeDescription } = serviceType.fields;
  return (
    <div className="pl-16 pr-16 grid grid-cols-2">
      <div className="p-4 flex items-center rounded-lg shadow-lg m-4">
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
      </div>
    </div>
  );
}
