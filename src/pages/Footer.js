import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Footer.css";

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const data = [
    {
      label: "Email",
      value: "pradhiveragul@gmail.com",
      url: "mailto:pradhiveragul@gmail.com?subject=Welcome&body=Glad to Contact you",
    },
    {
      label: "Phone",
      value: "+91 9788162003",
      url: "https://api.whatsapp.com/send/?phone=919788162003&text&type=phone_number&app_absent=0",
    },
  ];
  const data1 = [
    {
      label: "LinkedIn",
      value: "@pradhive",
      url: "https://www.linkedin.com/in/pradhive-b-0a838a218/",
    },
    {
      label: "Insta",
      value: "@pradhive",
      url: "https://www.instagram.com/chocolate_fellow_pradhive_/",
    },
    {
      label: "Github",
      value: "@pradhive",
      url: "https://github.com/Pradhive",
    },
    {
      label: "Twitter",
      value: "@pradhive",
      url: "https://twitter.com/5088_b",
    },
  ];
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black pb-[10px] p-4">
      <div className="p-[20px] pt-[40px]">
        <div className="text-[80px] text-white font-bold uppercase underline-hover1">Wanna start a</div>
        <div className="text-[80px] text-white font-bold uppercase ml-[450px] underline-hover1">New project ? </div>
      </div>
      <div className="grid grid-cols-3 gap-10 pt-10">
        <div></div>
        <div className="p-4">
          <div className="text-gray-400 text-2xl">Contacts</div>
          {data?.map((o, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleProjectClick(o.url)}
            >
              <div className="pt-8 text-sm">
                <div
                  className={`grid grid-cols-7 py-4 hover:text-white  w-full  underline-hover2 items-center text-gray-400 `}
                >
                  <div
                    className={`col-span-2 text-white  ${
                      hoveredIndex === index ? "translate-x-10" : ""
                    } duration-500`}
                  >
                    {o?.label}
                  </div>
                  <div className="col-span-5 flex justify-between ">
                    <div
                      className={`${
                        hoveredIndex === index ? "translate-x-10" : ""
                      } duration-500`}
                    >
                      {o?.value}
                    </div>
                    <div
                      className={`${
                        hoveredIndex === index ? "-rotate-90" : ""
                      } duration-500 `}
                    >
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="text-gray-400 text-2xl">Social</div>
          {data1?.map((o, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex1(index)}
              onMouseLeave={() => setHoveredIndex1(null)}
              onClick={() => handleProjectClick(o.url)}
            >
              <div className="pt-8 ">
                <div
                  className={`grid grid-cols-7 py-4 hover:text-white  w-full  underline-hover2 items-center text-gray-400 `}
                >
                  <div
                    className={`col-span-4 text-white  ${
                      hoveredIndex1 === index ? "translate-x-10" : ""
                    } duration-500`}
                  >
                    {o?.label}
                  </div>
                  <div className="col-span-3 flex justify-between ">
                    <div
                      className={`${
                        hoveredIndex1 === index ? "translate-x-10" : ""
                      } duration-500`}
                    >
                      {o?.value}
                    </div>
                    <div
                      className={`${
                        hoveredIndex1 === index ? "-rotate-90" : ""
                      } duration-500 `}
                    >
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-between text-white items-center mt-10 border-t-2 border-gray-400">
        <div>@2024 India</div>
        <div>Developed by : Pradhive</div>
        <div></div>
      </div>
    </div>
  );
}
