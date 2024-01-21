import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import "./Home.css"

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub:  0.075,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.045 * direction;
  }

  return (
    <main className="relative flex h-[100vh] overflow-hidden bg-black">
      
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Pradhive ‧ Developer ‧ Designer  ‧ </p>
          <p ref={secondText}>Pradhive  ‧ Developer ‧ Designer  ‧ </p>
        </div>
      </div>
    </main>
  )
}
