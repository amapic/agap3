import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasPlanete from "./screen6/Planet6";
import {
  Ttext36,
  // Timeline1,
  // Timeline2,
  Timeline3,
} from "./screen6/LeftTexts6";

import RightText6 from "./screen6/RightText6";

export default function Screen6() {
  const zoom = useRef(null);
  let el = useRef();

  useEffect(() => {
    const element = zoom.current;
    let q = gsap.utils.selector(zoom);

    let ctx = gsap.context(() => {

      const mm = gsap.matchMedia();
      mm.add(
        {
          // isSmall: "(min-width: 0px)",
          isLarge: "(min-width: 1000px)",
          // isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false });

          //mouvement gén éral
          scrollSunTl.to("#container_move6", {
            scrollTrigger: {
              trigger: "#screen6",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=100% bottom",
              toggleActions: "play none none reset",
              // markers: true,
              scrub: 1,
              pin: "#container_move6",
            },
          });

          // scrollSunTl.to("#bgCircle",{
          //   opacity:"1",
          //   duration:"0"
          // },

          // );

          //cercle
          // console.log("size", c.conditions);
          // if (c.conditions.isXLarge) {
          scrollSunTl.to("#bgCircle6", {
            scrollTrigger: {
              trigger: "#screen6",
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

      mm.add(
        {
          isSmall: "(max-width: 999px)"
        },
        (c) => {
          var scrollSunTl = gsap.timeline({ invalidateOnRefresh: false });

          //mouvement gén éral
          scrollSunTl.to("#container_move4", {
            scrollTrigger: {
              trigger: "#screen6",
              start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
              end: "top+=100% bottom",
              toggleActions: "play none none reset",
              // markers: true,
              scrub: 1,
              pin: "#container_move6",
            },
          });

          // );

          //cercle
          // console.log("size", c.conditions);
          // if (c.conditions.isXLarge) {
          scrollSunTl.to("#bgCircle", {
            scrollTrigger: {
              trigger: "#screen6",
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
        id="screen6"
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
          id="container_move6"
          className="home-numbers__wrapper relative w-full h-full flex flex-col rg:flex-row overflow-hidden z-0"
        >
          <div
            id="AAA"
            className="home-numbers__gl js-home-gl relative w-full h-screen-1/2 rg:w-1/2 order-2 rg:order-1"
          >
            <CanvasPlanete />
            <Ttext36 />
            <div
              // className="opacity-0 rg:opacity-1"
              id="bgCircle6"
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

          <RightText6 />
        </div>
      </div>
    </>
  );
}
