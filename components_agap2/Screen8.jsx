import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasPlanete from "./screen8/Planet8";
import Ttext1, {
  Ttext2,
  Ttext38,
  // Timeline1,
  // Timeline2,
  Timeline3,
} from "./screen8/LeftTexts8";

import RightText8 from "./screen8/RightText8";

export default function Screen8() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    const element = zoom.current;
    let q = gsap.utils.selector(zoom);

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
          isSmall: "(max-width: 0px)",
          isLarge: "(min-width: 769px) and (max-width: 1300px)",
          isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false});



          //mouvement gén éral
          scrollSunTl.to("#container_move8", {
            scrollTrigger: {
              trigger: "#screen8",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=100% bottom",
              toggleActions: "play none none reset",
              // markers: true,
              scrub: 1,
              pin: "#container_move8",
            },
          });

            scrollSunTl.to("#bgCircle8", {
              scrollTrigger: {
                trigger: "#screen8",
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
          // }
          // if (c.conditions.isLarge) {
          //   scrollSunTl.to("#bgCircle", {
          //     scrollTrigger: {
          //       trigger: "#screen4",
          //       start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          //       end: "top+=70% bottom",
          //       toggleActions: "play none none reset",
          //       scrub: 1,
          //     },
          //     transform: "scale(100)",
          //     transformOrigin: "center",
          //     // backgroundColor: "red",
          //     // borderColor: "red",
          //     // left: "-20vw",
          //     borderRadius: "10px",
          //   });
          // }

          // if (c.conditions.isSmall) {
          //   scrollSunTl.to("#bgCircle", {
          //     scrollTrigger: {
          //       trigger: "#screen4",
          //       start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          //       end: "top+=70% bottom",
          //       toggleActions: "play none none reset",
          //       scrub: 1,
          //     },
          //     transform: "scale(100)",
          //     transformOrigin: "center",
          //     // backgroundColor: "red",
          //     // borderColor: "red",
          //     // left: "-20vw",
          //     borderRadius: "10px",
          //   });
          // }

          //les timeline se passe les unes après les autres
          // Timeline1(scrollSunTl, q);
          // Timeline2(scrollSunTl, q);
          Timeline3(scrollSunTl, q);
          // TimelineDroite(scrollSunTl, q);
        //   TimelineImage(scrollSunTl, q);
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div
        id="screen8"
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
          id="container_move8"
          className="home-numbers__wrapper relative w-full h-full flex flex-wrap items-stretch overflow-hidden z-0"
        >
          <div
            // id="AAA"
            className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1"
          >
            <CanvasPlanete />
            {/* <Ttext1 /> */}
            {/* <Ttext2 /> */}
            <Ttext38 />
            <div
              // className="bg-blue"
              id="bgCircle8"
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

          <RightText8 />
        </div>
      </div>

    </>
  );
}
