import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const CanvasPlanete = () => {


  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(max-width: 999px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          ScrollTrigger.create({
            trigger: "#main6",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            toggleActions: "play pause resume reset",
            scrub: 3,
            animation: scrollSunTl,
          });



          scrollSunTl.fromTo(
            "#canvas6",
            {
              x: "-100vw",
              y: "-30vh",
              width: "100vw",
              padding:"0 20vw 0 20vw"
            },
            {
              x: "2vw",
              y: "-30vh",
              width: "100vw",
              padding:"0 20vw 0 20vw"
            }
          );
        }
      );
      mm.add(
        {
          isSmall: "(min-width: 1000px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          ScrollTrigger.create({
            trigger: "#main6",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            toggleActions: "play pause resume reset",
            scrub: 3,
            animation: scrollSunTl,
          });
          scrollSunTl.fromTo(
            "#canvas6",
            {
              x: "-50vw",
            },
            {
              x: "5vw",
            }
          );
        }
      );
    });
    return () => ctx.revert();
  });


  return (
    <div
      id="main6"
      className="z-20"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas6"
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "absolute",
          left: "0vh",
          width: "40vw",
          zIndex: "50",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="https://amaurypichat.fr/siteWeb1/index.html" className="img_site hidden jjj lg:block">
          <img
            style={{
              backgroundSize: "contain",
            }}
            src="/siteExemple.jpg"
          ></img>
        </a>

      </div>
    </div>
  );
};

export default CanvasPlanete;
