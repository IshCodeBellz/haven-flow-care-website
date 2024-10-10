import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";



export default function Header() {

    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
      setOpen(!isOpen);
    };

    const closeSideBar = () => {
      setOpen(false);
    };
  
  
  return (
    <div className="font-syne">
      <div className="flex items-center justify-between px-3 pt-3 pb-10 xl:px-10 lg:hidden">
        <Link href={"/"}>
          <div className="flex lg:hidden">
            <Image
              src={"/haven-flow-logo.jpg"}
              width={250}
              height={300}
              alt={"Logo image"}
            />
          </div>
        </Link>
        <div className="lg:hidden text-gray-600">
          <Menu
            right
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <Link href={"/"} onClick={closeSideBar}>
              Home
            </Link>
            <Link href={"/about"} onClick={closeSideBar}>
              About Us
            </Link>
            <Link href={"/services"} onClick={closeSideBar}>
              Services
            </Link>
            <Link href={"/contact"} onClick={closeSideBar}>
              Contact Us
            </Link>
          </Menu>
        </div>
      </div>

      <div className="hidden lg:block ml-2 pt-3">
        <div className="hidden lg:block">
          <Image
            src={"/haven-flow-logo.jpg"}
            width={250}
            height={300}
            alt={"Logo image"}
          />
        </div>
        <nav className="relative flex justify-between items-center w-full px-4 pt-3 pb-10">
          {/* Empty div to push the menu to the center */}
          <div className="flex-1"></div>

          {/* Centered menu */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-600">
            <Link href={"/"}>Home |</Link>
            <Link href={"/about"} className="ml-3">
              About Us |
            </Link>
            <Link href={"/services"} className="ml-3">
              Services |
            </Link>
            <Link href={"/contact"} className="ml-3">
              Contact Us
            </Link>
          </div>

          {/* Telephone icon and number */}
          <div className="flex items-center">
            <Image
              src={"/telephone-handle-silhouette.png"}
              width={30}
              height={30}
              alt={"Logo image"}
            />
            <h3 className="text-2xl ml-2">07904 333 304</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}
