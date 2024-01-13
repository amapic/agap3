import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasImage from "./screen4/Planet4_new";
import Ttext1, {
  Ttext2,
  Ttext3,
  Timeline1,
  Timeline2,
  Timeline3,
} from "./screen4/LeftTexts";

import RightText from "./screen4/RightText";

export default function Screen4() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    const element = zoom.current;
    let q = gsap.utils.selector(zoom);

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(min-width: 0px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false });

          //mouvement gén éral
          scrollSunTl.to("#container_move4", {
            scrollTrigger: {
              trigger: "#screen4",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=100% bottom",
              toggleActions: "play none none reset",
              // markers: true,
              scrub: 1,
              pin: "#container_move4",
            },
          });

          scrollSunTl.to("#bgCircle", {
            scrollTrigger: {
              trigger: "#screen4",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=70% bottom",
              toggleActions: "play none none reset",
              scrub: 1,
            },
            transform: "scale(100)",
            transformOrigin: "center",
            // left: "50vw",
            borderRadius: "10px",
          });

          Timeline1(scrollSunTl, q);
          Timeline2(scrollSunTl, q);
          Timeline3(scrollSunTl, q);
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div
        id="screen4"
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
          id="container_move4"
          className="home-numbers__wrapper relative w-full h-full justify-center md:justify-normal flex flex-wrap items-stretch overflow-hidden z-0"
        >
          <div className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1">
            <CanvasImage />

            <Ttext3 />
            <Ttext2 />
            <Ttext1 />
            <div
              // className="bg-blue"
              id="bgCircle"
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

          <RightText />
        </div>
      </div>
    </>
  );
}
