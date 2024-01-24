import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { Progress } from "antd";
import MongoDb from "./../assets/MongoDB.jpg";
import VSCode from "./../assets/Vscode.jpg";
import StarRating from "./Starrating";

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
  
  return (
    <section id="skill" className="p-4" ref={skillRef}>
      <div
        className={`text-[40px] md:text-[80px] p-4 font-semibold ${
          isVisible ? "tracking-in-contract-bck-top" : ""
        } `}
      >
        Skills
      </div>
      <div className="">
        <div className="p-2 border1">
          <div className="!z-20 w-full py-4">
            <div className="text-[20px] md:text-[30px] text-black  p-4 text-center font-semibold">
              Technologies I Know{" "}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {data?.map((o, i) => (
                <div className=" flex items-center justify-center ">
                  <div class="flip-card" key={i}>
                    <div class="flip-card-inner">
                      <div class="flip-card-front flex items-center justify-center">
                        <img src={o?.img} className="h-full" alt="Avatar" />
                      </div>
                      <div class="flip-card-back flex flex-col items-center justify-center rounded-[40px]">
                        <h1 className="font-bold text1 p-4 text-[24px]">
                          {o?.label}
                        </h1>
                        <StarRating rating={o?.percent} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
