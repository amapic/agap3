import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasImage from "./screen11/Planet11";
import Ttext39 from "./screen11/LeftTexts11";

import RightText9 from "./screen11/RightText11";

export default function Screen11() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    // const element = zoom.current;
    // let q = gsap.utils.selector(zoom);

    let ctx = gsap.context(() => {
      // var mediaQueries = [
      //   { id: "x-small", media: "(max-width: 400px)" },
      //   { id: "small", media: "(min-width: 400px) and (max-width: 700px)" },
      //   { id: "medium", media: "(min-width: 700px) and (max-width: 1000px)" },
      //   { id: "large", media: "(min-width: 1000px) and (max-width: 1300px)" },
      //   { id: "x-large", media: "(min-width: 1300px)" },
      // ];

      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(min-width: 0px)",
          isLarge: "(min-width: 769px) and (max-width: 1300px)",
          isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false });

          //mouvement gén éral
          scrollSunTl.to("#container_move11", {
            scrollTrigger: {
              trigger: "#screen11",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=100% bottom",
              toggleActions: "play none none reset",
              // markers: true,
              scrub: 1,
              pin: "#container_move11",
            },
          });

          scrollSunTl.to("#bgCircle11", {
            scrollTrigger: {
              trigger: "#screen11",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=70% bottom",
              toggleActions: "play none none reset",
              scrub: 1,
            },
            transform: "scale(100)",
            transformOrigin: "center",
            // left: "-20vw",
            borderRadius: "10px",
          });
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div
        id="screen11"
        style={{
          height: "300vh",
          position: "relative",
          zIndex: "10",
          overflow: "hidden",
        }}
        // className="screen5"

        ref={zoom}
      >
        <div
          id="container_move11"
          className="home-numbers__wrapper relative w-full h-full justify-center md:justify-normal flex flex-wrap items-stretch overflow-hidden z-0"
        >
          <div className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1">
            <CanvasImage />

            <Ttext39 />
            <div
              // className="bg-blue"
              id="bgCircle11"
              style={{
                left: "0vw",
                borderRadius: "999px",
                width: "1vw",
                height: "1vw",
                zIndex: "10",
                top: "calc(50vh - 5px)",
                // opacity:"0",
                // bottom: "30vh",
                // margin: "auto 0",
                position: "absolute",
              }}
            ></div>
          </div>

          <RightText9 />
        </div>
      </div>
    </>
  );
}
