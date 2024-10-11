import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-6 pb-40 font-syne bg-dustyPink h-28 justify-center grid grid-cols-1 lg:w-[1100px] mx-auto w-full">
      <div className=" grid grid-cols-4">
        <div className="flex items-center	">
          <div className="pr-2">
            <Image
              className=""
              src={"../images/phone-solid.svg"}
              width={40}
              height={40}
              alt="phone"
            />
          </div>
          <div>Call us today on 07904 333 304</div>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <Image
              className=""
              src={"../images/envelope-solid.svg"}
              width={40}
              height={40}
              alt="email"
            />
          </div>
          <div>admin@havenflowcare.co.uk</div>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <Image
              className=""
              src={"../images/circle-info-solid.svg"}
              width={40}
              height={40}
              alt="info"
            />
          </div>
          <div>
            {" "}
            More info
            {">"}
            {">"}
          </div>
        </div>
        <div className="grid grid-cols-4">
          <a href="https://www.instagram.com/havenflowcare/" target="_blank">
            <Image
              className=""
              src={"../images/instagram-brands-solid.svg"}
              width={30}
              height={30}
              alt="instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/haven-flow-care/"
            target="_blank"
          >
            <Image
              className=""
              src={"../images/linkedin-brands-solid.svg"}
              width={30}
              height={30}
              alt="linkedin"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567039918468"
            target="_blank"
          >
            <Image
              className=""
              src={"../images/square-facebook-brands-solid.svg"}
              width={30}
              height={30}
              alt="facebook"
            />
          </a>
          <Link href={"https://x.com/HavenFlowCare"} target="_blank">
            {" "}
            <Image
              className=""
              src={"../images/square-x-twitter-brands-solid.svg"}
              width={30}
              height={30}
              alt="twitter"
            />
          </Link>
        </div>
      </div>
      <div className="text-sm text-center pt-20 bg-dustyPink">
        © 2024 by Haven Flow Care.
      </div>
    </div>
  );
}
242830;
