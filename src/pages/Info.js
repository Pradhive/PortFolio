import React, { useEffect, useRef, useState } from "react";
import "./Project.css";
import Pradhive from "./../assets/Pradhive.jpg";
import "./info.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

export default function Info() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const infoRef = useRef();

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);
  const animText = new SplitType(".anim", { types: "words, chars" });

  gsap.set(animText.chars, {
    opacity: 0.2,
  });

  gsap.to(animText.chars, {
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".anim",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.35,
    });

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setHoveredIndex(true);
  };

  return (
    <section id="info" className="p-4 md:mb-[200px]" ref={infoRef}>
      <div
        className={`text-[40px] md:text-[80px] p-4 font-semibold ${
          isVisible ? "tracking-in-contract-bck-top" : ""
        } `}
      >
        Info
      </div>
      <div className="w-4/5 p-4 font-medium text-[30px] md:text-[60px]">
        <span
          className="border-b-4  cursor-pointer border-black"
          onMouseEnter={handleMouseEnter}
        >
          Pradhive
        </span>
      </div>
      <div className="md:flex p-4">
        <img
          src={Pradhive}
          className="grayscale md:hidden p-4 rounded-lg animate__animated animate__fadeInUp "
          alt=""
        />
        <div class="hero ">
          <div class="container"></div>
          <p class="anim text-[30px] md:text-[60px]">
            A dedicated developer blending creativity and code to build dynamic
            websites. Whether it's front-end magic or back-end wizardry, I
            specialize in turning concepts into responsive and user-friendly
            digital spaces.Let's elevate your online presence to new heights!
          </p>
        </div>
        <div>
          {hoveredIndex && (
            <img
              src={Pradhive}
              className="grayscale hidden md:block  rounded-lg animate__animated animate__fadeInUp "
              alt=""
            />
          )}
        </div>
      </div>
    </section>
  );
}
