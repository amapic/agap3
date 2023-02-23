import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import CanvasPlanete from "./planeteExport";
import Ttext1, {
  Ttext2,
  Ttext3,
  ttimeline1,
  ttimeline2,
  ttimeline3,
} from "../components/screen4/textedansCercle";

import Screen4PartieDroite from "../components/screen4/screen4PartieDroite";

export default function Home() {
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
          // endTrigger: ".screen6",
          start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "top+=100% bottom",
          // end: "+=200",
          toggleActions: "play none none reset",
          markers: true,
          scrub: 1,
          pin: "#container_move",
        },
      });

      //cercle
      scrollSunTl.to("bgCircle", {
        scrollTrigger: {
          trigger: ".screen5",
          // endTrigger: ".screen6",
          start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "top+=70% bottom",
          toggleActions: "play none none reset",
          markers: true,
          scrub: 1,
        },
        width: "50vh",
        height: "50vh",
        left: "-70vh",
        borderRadius: "100px",
      });

      ttimeline1(scrollSunTl, q);
      ttimeline2(scrollSunTl, q);
      ttimeline3(scrollSunTl, q);
      // scrollSunTl.set(q("#texte_haut .text1"), {
      //   y: 20,
      // });
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
            id="AAA"
            className="home-numbers__gl js-home-gl relative w-full rg:w-1/2 order-2 rg:order-1"
          >
            <CanvasPlanete />
            <Ttext1 />
            <Ttext2 />
            <Ttext3 />
            <div
              id="bgCircle"
              style={{
                top: "50vh",
                left: "-25px",
                borderRadius: "999px",
                backgroundColor: "yellow",
                position: "absolute",
                width: "100px",
                height: "100px",
                zIndex: "10",
              }}
            ></div>
          </div>

          <Screen4PartieDroite />
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "pink",
          zIndex: "100",
        }}
        className="screen6"
      >
        AAA
      </div>
    </>
  );
}
