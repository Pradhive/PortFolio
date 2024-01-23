import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [open, setopen] = useState(false);

  const menulink = [
    { name: "HOME", link: "home" },
    { name: "INFO", link: "info" },
    { name: "SKILL", link: "skill" },
    { name: "PROJECTS", link: "project" },
    { name: "CONTACT", link: "contact" },
  ];

  return (
    <div className="bg-black border-b w-full h-[10vh] p-4 flex justify-between items-center fixed top-0 !z-40">
      <div className="flex">
        <div
          className="text-white text-[30px] pl-4 tracking-widest font-bold italic cursor-pointer"
          onClick={scrollToTop}
        >
          PU
        </div>
        <span className="p-1 mt-2 ml-1 h-fit bg-white rounded-full"></span>
      </div>
      <div className="hidden md:flex gap-24">
        {menulink?.map((o, i) => (
          <Link
            to={o?.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white text-[14px] tracking-widest font-bold underline-hover duration-300"
          >
            {o?.name}
          </Link>
        ))}
      </div>
      <div
        className={`z-[999] text-3xl text-white ${
          open ? "text-gray-900" : "text-gray-500"
        } md:hidden m-5`}
        onClick={() => setopen(!open)}
      >
        <ion-icon name="menu"></ion-icon>
      </div>
      <div
        className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <ul className="flex flex-col justify-center h-full gap-10 py-10 text-lg">
          {menulink?.map((o, i) => (
            <Link
              to={o?.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setopen(false)}
            >
              {o?.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
