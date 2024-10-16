import React from "react";
import Image from "next/image";

export default function Staff({ person }) {
  const { position, staffPicture, staffText, staffName } = person.fields;

  return (
      <div>
          
      <div className="flex flex-col items-center text-center lg:text-left">
        <div className="flex justify-center">
          <Image
            src={`https:${staffPicture.fields.file.url}`}
            width={330}
            height={330}
            alt="Homepage Hero"
            className="rounded-md"
          />
        </div>
        <div className="mt-1 p-8 lg:p-4">
          <p>{staffName}</p>
          <p className="text-xs text-gray-500 mt-1">{position}</p>
          <p className="text-sm mt-1">{staffText}</p>
        </div>
      </div>
    </div>
  );
}
