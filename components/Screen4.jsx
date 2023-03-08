import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasPlanete from "./screen4/Planet";
import Ttext1, {
  Ttext2,
  Ttext3,
  Timeline1,
  Timeline2,
  Timeline3,
} from "./screen4/LeftTexts";

import RightText, { TimelineDroite } from "./screen4/RightText";

export default function Screen4() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    const element = zoom.current;
    let q = gsap.utils.selector(zoom);

    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();

      //mouvement gén éral
      scrollSunTl.to("#container_move", {
        scrollTrigger: {
          trigger: ".screen5",
          start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "top+=100% bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
          pin: "#container_move",
        },
      });

      //cercle
      scrollSunTl.to("#bgCircle", {
        scrollTrigger: {
          trigger: ".screen5",
          start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "top+=70% bottom",
          toggleActions: "play none none reset",
          scrub: 1,
        },
        transform: "scale(200)",
        transformOrigin: "center",
        left: "-20vw",
        borderRadius: "10px",
      });

      //les timeline se passe les unes après les autres
      Timeline1(scrollSunTl, q);
      Timeline2(scrollSunTl, q);
      Timeline3(scrollSunTl, q);
      TimelineDroite(scrollSunTl, q);
    });

    return () => ctx.revert();
  });

  return (
    <>
      <div
        style={{
          height: "300vh",
          position: "relative",
          zIndex: "10",
          overflow: "hidden",
        }}
        className="screen5
        
        "
        ref={zoom}
      >
        <div
          id="container_move"
          className="home-numbers__wrapper relative w-full h-full flex flex-wrap items-stretch overflow-hidden z-0 bg-gray-transparent"
        >
          <div
            // id="AAA"
            className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1"
          >
            <CanvasPlanete />
            <Ttext1 />
            <Ttext2 />
            <Ttext3 />
            <div
              className="bg-blue"
              id="bgCircle"
              style={{
                left: "0vw",
                borderRadius: "999px",
                width: "10px",
                height: "10px",
                zIndex: "10",
                top: "calc(50vh - 5px)",
                // bottom: "30vh",
                // margin: "auto 0",
                position: "absolute",
              }}
            ></div>
          </div>

          <RightText />
        </div>
      </div>
      {/* <div
        style={{
          height: "100vh",
          backgroundColor: "pink",
          zIndex: "100",
        }}
        className="screen6"
      >
        AAA
      </div> */}
    </>
  );
}
