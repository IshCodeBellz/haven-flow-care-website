import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-6 font-syne pb-5 bg-dustyPink  lg:w-[1100px] mx-auto w-full">
      <div className=" grid gird-cols-2 lg:grid-cols-4">
        <div className="flex items-center	justify-center">
          <div className="pr-2">
            <Image
              className="w-4"
              src={"../images/phone-solid.svg"}
              width={40}
              height={40}
              alt="phone"
            />
          </div>
          <div>Call us today on 07904 333 304</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pr-2">
            <Image
              className="w-4"
              src={"../images/envelope-solid.svg"}
              width={40}
              height={40}
              alt="email"
            />
          </div>
          <div>admin@havenflowcare.co.uk</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pr-2">
            <Image
              className="w-4"
              src={"../images/circle-info-solid.svg"}
              width={40}
              height={40}
              alt="info"
            />
          </div>
          <div> More info {">"}{">"} </div>
        </div>
        <div className="flex items-center justify-center pt-4 lg:mx-0 lg:pt-0">
          <div className="">
            <Link href={"https://www.instagram.com/havenflowcare/"} target="_blank">
              <Image
              className=""
              src={"../images/instagram-brands-solid.svg"}
              width={30}
              height={30}
              alt="instagram"
            />
            </Link>
          </div>
          
          <div className="pl-3">
            <Link href={"https://www.linkedin.com/company/haven-flow-care/"} target="_blank">
             <Image
              className=""
              src={"../images/linkedin-brands-solid.svg"}
              width={30}
              height={30}
              alt="linkedin"
            />
            </Link>
          </div>
          <div className="pl-3">
            <Link href={"https://www.facebook.com/profile.php?id=61567039918468"} target="_blank">
               <Image
              className=""
              src={"../images/square-facebook-brands-solid.svg"}
              width={30}
              height={30}
              alt="facebook"
            />
            </Link>
         </div>
          <div className="pl-3">
            <Link href={"https://x.com/HavenFlowCare"} target="_blank">
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
      </div>
      <div className="text-sm text-center pt-10 pb-4">
        © 2024 by Haven Flow Care.
      </div>
    </div>
  );
}
