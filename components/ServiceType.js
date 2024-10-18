import React from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function ServiceType({ serviceType }) {
  const { serviceTypeTitle, serviceTypeDescription, serviceImage } =
    serviceType.fields;
  return (
    <>
      <div className="flex items-center">
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
        <p className="w-56 lg:w-80 h-36 line-clamp-[6] lg:line-clamp-[6]">{serviceTypeDescription}</p>
        <Modal
          serviceTypeTitle={serviceTypeTitle}
          serviceTypeDescription={serviceTypeDescription}
        />
      </div>
     
      </div>
    </>
  );
}
