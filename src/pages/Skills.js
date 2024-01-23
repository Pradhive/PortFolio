import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { Progress } from "antd";
import MongoDb from "./../assets/MongoDB.jpg";
import VSCode from "./../assets/Vscode.jpg";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef();

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.35,
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  const data = [
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-9294875-7578018.png?f=webp",
      label: "HTML 5",
      percent: 75,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png?f=webp",
      label: "CSS",
      percent: 65,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png",
      label: "JavaScript",
      percent: 75,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp",
      label: "React JS",
      percent: 85,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp",
      label: "Node JS",
      percent: 45,
    },
    {
      img: MongoDb,
      label: "Mongo DB",
      percent: 50,
    },
  ];
  const data1 = [
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-git-9294878-7578021.png?f=webp",
      label: "Git",
      percent: 75,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?f=webp",
      label: "Tailwind CSS",
      percent: 65,
    },
    {
      img: VSCode,
      label: "VS Code",
      percent: 75,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-windows-5562368-4642713.png?f=webp",
      label: "Windows",
      percent: 85,
    },
    {
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-linux-5645900-4695758.png?f=webp",
      label: "Linux",
      percent: 85,
    },
    {
      img: "https://static-00.iconduck.com/assets.00/postman-icon-1024x1014-w6mbi9fr.png",
      label: "Postman",
      percent: 85,
    },
  ];

  return (
    <section id="skill" className="p-4" ref={skillRef}>
      <div
        className={`text-[80px] p-4 font-semibold ${
          isVisible ? "tracking-in-contract-bck-top" : ""
        } `}
      >
        Skills
      </div>
      <div className="">
        <div className="p-2 ">
          <div className="z-2">
            <div className="text-[30px]  p-4 text-center font-semibold">
              Technologies I Know{" "}
            </div>
            <div className="grid grid-cols-3 gap-10">
              {data?.map((o, i) => (
                <div className=" flex items-center justify-center ">
                  <div class="flip-card" key={i}>
                    <div class="flip-card-inner">
                      <div class="flip-card-front flex items-center justify-center">
                        <img src={o?.img} className="h-full" alt="Avatar" />
                      </div>
                      <div class="flip-card-back flex flex-col items-center justify-center">
                        <h1 className="font-bold text1 p-4 text-[24px]">
                          {o?.label}
                        </h1>
                        <Progress
                          type="dashboard"
                          percent={o?.percent}
                          strokeColor="black"
                          gapDegree={90}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-[30px] p-4 text-center font-semibold">
          Tools I'm using
        </div>
        <div className="grid grid-cols-3 gap-10">
          {data1?.map((o, i) => (
            <div className=" flex items-center justify-center ">
              <div class="flip-card" key={i}>
                <div class="flip-card-inner">
                  <div class="flip-card-front flex items-center justify-center">
                    <img src={o?.img} className="h-full" alt="Avatar" />
                  </div>
                  <div class="flip-card-back flex flex-col items-center justify-center">
                    <h1 className="font-bold text1 p-4 text-[24px]">
                      {o?.label}
                    </h1>
                    <Progress
                      type="dashboard"
                      percent={o?.percent}
                      strokeColor="black"
                      gapDegree={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
