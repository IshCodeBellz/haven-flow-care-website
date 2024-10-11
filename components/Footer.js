import Image from "next/image";

export default function Footer() {
  return (
    <div className="font-syne bg-dustyPink h-52 justify-center grid grid-cols-1 lg:w-[1100px] mx-auto w-full">
      <div className=" grid grid-cols-4">
        <div className="flex">
          <Image
            className=""
            src={"../images/phone-solid.svg"}
            width={48}
            height={48}
            alt="phone"
          />
          Call us today on 07904 333 304
        </div>
        <div className="flex">
          <Image
            className=""
            src={"../images/envelope-solid.svg"}
            width={48}
            height={48}
            alt="email"
          />
          admin@havenflowcare.co.uk
        </div>
        <div className="flex">
          <Image
            className=""
            src={"../images/circle-info-solid.svg"}
            width={48}
            height={48}
            alt="info"
          />
          More info
          {">"}
          {">"}
        </div>
        <div className="grid grid-cols-4">
          <Image
            className=""
            src={"../images/instagram-brands-solid.svg"}
            width={48}
            height={48}
            alt="instagram"
          />
          <Image
            className=""
            src={"../images/linkedin-brands-solid.svg"}
            width={48}
            height={48}
            alt="linkedin"
          />
          <Image
            className=""
            src={"../images/square-facebook-brands-solid.svg"}
            width={48}
            height={48}
            alt="facebook"
          />
          <Image
            className=""
            src={"../images/square-x-twitter-brands-solid.svg"}
            width={48}
            height={48}
            alt="twitter"
          />
        </div>
      </div>
      <div className="text-sm text-center">© 2024 by Haven Flow Care.</div>
    </div>
  );
}
