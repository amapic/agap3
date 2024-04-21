import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasImage from "./screenBIM/PlanetBIM";
import Ttext39 from "./screenBIM/LeftTextsBIM";

import RightText9 from "./screenBIM/RightTextBIM";

export default function ScreenBIM() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(min-width: 0px)",
          isLarge: "(min-width: 769px) and (max-width: 1300px)",
          isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false });

          scrollSunTl.to("#container_moveBIM", {
            scrollTrigger: {
              trigger: "#screenBIM",
              start: "top top",
              end: "top+=100% bottom",
              toggleActions: "play none none reset",

              scrub: 1,
              pin: "#container_moveBIM",
            },
          });

          scrollSunTl.to("#bgCircleBIM", {
            scrollTrigger: {
              trigger: "#screenBIM",
              start: "top top",
              end: "top+=70% bottom",
              toggleActions: "play none none reset",
              scrub: 1,
            },
            transform: "scale(100)",
            transformOrigin: "center",

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
        id="screenBIM"
        style={{
          height: "300vh",
          position: "relative",
          zIndex: "10",
          overflow: "hidden",
        }}
        ref={zoom}
      >
        <div
          id="container_moveBIM"
          className="home-numbers__wrapper relative w-full h-full justify-center md:justify-normal flex flex-wrap items-stretch overflow-hidden z-0"
        >
          <div className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1">
            <CanvasImage />

            <Ttext39 />
            <div
              id="bgCircleBIM"
              style={{
                left: "0vw",
                borderRadius: "999px",
                width: "1vw",
                height: "1vw",
                zIndex: "10",
                top: "calc(50vh - 5px)",

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
