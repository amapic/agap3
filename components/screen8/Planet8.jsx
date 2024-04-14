import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import Image from 'next/image'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import IImage from "@images/planet.jpg"



const CanvasImage = () => {
  
  
  

  

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
            trigger: "#main8",
            
            start: "top top", 
            end: "bottom-=10% bottom",
            
            toggleActions: "play pause resume reset",
            
            scrub: 3,
            animation: scrollSunTl,
            
          });



          scrollSunTl.fromTo(
            "#canvas8",
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
            trigger: "#main8",
            
            start: "top top", 
            end: "bottom-=10% bottom",
            
            toggleActions: "play pause resume reset",
            
            scrub: 3,
            animation: scrollSunTl,
            
          });
          scrollSunTl.fromTo(
            "#canvas8",
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
      id="main8"
      className="z-20"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas8"
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
        <a href="https://amaurypichat.fr/planet/" className="img_site hidden lg:block">
         
		  <Image
		  
			  src={{IImage}}
			  width={500}
			  height={500}
			  alt="Picture of the author"
			/>
        </a>

      </div>
    </div>
  );
};

export default CanvasImage;
