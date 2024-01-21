import React, { useEffect, useRef, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Project.css";
import BallGame from ".././assets/BallGame.png";
import Invoice from ".././assets/InvoiceApp.png";
import NavBar from ".././assets/NavBar.png";
import Portfolio from ".././assets/Portfolio.png";
import Wedding from ".././assets/Wedding.png";

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  const data = [
    {
      label: "Former Portfolio",
      imageURL: Portfolio,
      url: "https://pradhive.netlify.app/",
    },
    {
      label: "NavBar App",
      imageURL: NavBar,
      url: "https://navbar-pradhive.netlify.app/",
    },
    {
      label: "Wedding App",
      imageURL: Wedding,
      url: "https://pradhive1.netlify.app/",
    },
    {
      label: "Ball Game",
      imageURL: BallGame,
      url: "https://pradhive.github.io/Ball-Game/",
    },
    {
      label: "Invoice App",
      imageURL: Invoice,
      url: "https://ashokmess.netlify.app/",
    },
  ];
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

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

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <section id="project" className="p-4 " ref={projectRef}>
      <div
        className={`text-[80px] p-4 font-semibold ${
          isVisible ? "tracking-in-contract-bck-top" : ""
        } `}
      >
        Projects
      </div>
      <div
        className={`text-end p-4 text-gray-600  ${
          isVisible ? "animate__animated  animate__slideInDown " : ""
        }`}
      >
        Here are some of my work @copyright2024
      </div>
      {data?.map((o, index) => (
        <div
          className="grid md:grid-cols-3 cursor-pointer"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleProjectClick(o.url)}
        >
          <div className="hidden md:block">
            {hoveredIndex === index && (
              <img
                src={o?.imageURL || ""}
                className="h-[30vh] rounded-lg  absolute animate__animated animate__fadeInUp "
                alt=""
              />
            )}
          </div>
          <div className="col-span-2 pr-10">
            <div
              className={`grid grid-cols-5 border-y-2 items-center text-gray-400 h-28`}
            >
              <div
                className={`col-span-3 text-3xl ${
                  hoveredIndex === index ? "translate-x-10" : ""
                } duration-500`}
              >
                {o?.label}
              </div>
              <div className="col-span-2 flex justify-between ">
                <div
                  className={`${
                    hoveredIndex === index ? "translate-x-10" : ""
                  } duration-500`}
                >
                  Web Design
                </div>
                <div
                  className={`${
                    hoveredIndex === index ? "" : "-rotate-45"
                  } duration-500`}
                >
                  <ArrowDownwardIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
