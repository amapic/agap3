import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ttimeline2 from "../components/screen5/timeline2";

import useWindowDimensions from "../components/useWindowDimensions";

import Ttexte from "../components/screen5/ttexte";

export default function Home() {
  const zoom = useRef(null);

  let hauteurDefilementStep1 = "+=900";
  let hauteurDefilementStep2 = "+=300";

  const { height, width } = useWindowDimensions();

  //animation

  let tailleMaxZoom = (width * 2) / 12;
  let topZoom = 6 / 12;
  let initZoomTop = "50%";
  useEffect(() => {
    const element = zoom.current;
    // console.log((1 / 12) * height + (0.5 * width) / 100 + "px");
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();

      ScrollTrigger.create({
        animation: scrollSunTl,
        start: "center center", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "+=900 center",
        toggleActions: "play none none reset",
        scrub: 1,
        pin: "#container_move",
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   // duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
        // },
      });

      // ScrollTrigger.create({
      //   animation: scrollSunTl,
      //   start: "center center", // which means "when the top of the trigger hits 40px above the bottom of the viewport
      //   end: "+=900 center",
      //   toggleActions: "play none none reset",
      //   scrub: 1,
      //   pin: "#entete",
      //   // snap: {
      //   //   snapTo: "labels", // snap to the closest label in the timeline
      //   //   // duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      //   //   // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      //   //   ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
      //   // },
      // });

      scrollSunTl.addLabel("un");

      // scrollSunTl.set(
      //   //commence à un, termine à 3
      //   "#zoombgCircleDiv",
      //   {
      //     top: topZoom + "vh",
      //   }
      // );

      scrollSunTl.to(
        //commence à un, termine à 3
        "#zoombgCircleDiv",
        {
          top: topZoom + "vh",
          duration: "0.1",
        }
      );

      scrollSunTl.to(
        //commence à un, termine à 3
        "#entete",
        {
          top: "0vh",
          duration: "0.1",
        }
      );

      // scrollSunTl.to(
      //   //commence à un, termine à 3
      //   "#backgroundCircleDiv",
      //   {
      //     top: topZoom + "vh",
      //     duration: "0.1",
      //   }
      // );

      scrollSunTl.to(
        "#zoom",
        {
          // top: 2 * topZoom + "vh",
          height: tailleMaxZoom + "px",
          fontSize: tailleMaxZoom + "px",
          lineHeight: tailleMaxZoom + "px",
          duration: 2,
        },
        "<"
      );

      // scrollSunTl.to(
      //   "#backgroundCircle",
      //   {
      //     transform: "scale(0.34)", //=> prochaine étape 0.61
      //     transformOrigin: "center",
      //     duration: 2,
      //   },
      //   "<"
      // );

      scrollSunTl.addLabel("deux");

      // scrollSunTl.to(
      //   "#zoom",
      //   {
      //     top: "40%",
      //     duration: 2,
      //   },
      //   "<"
      // );

      scrollSunTl.to(
        "h2#aero",
        {
          color: "white",
          duration: 2,
        },
        "<"
      );

      scrollSunTl.addLabel("phase2");
      // scrollSunTl.to(
      //   "h2#aero",
      //   {
      //     top: "40%",
      //     duration: 2,
      //   },
      //   "<"
      // );

      // scrollSunTl.to(
      //   "#backgroundCircle",
      //   {
      //     // width: "100vw",
      //     // height: "100vh",
      //     transform: "scale(50)",
      //     transformOrigin: "center",
      //     duration: 1,
      //   }
      //   // "<"
      // );

      // scrollSunTl.to(
      //   "#zoom",
      //   {
      //     height: "15vh",
      //     fontSize: "15vh",
      //     lineHeight: "15vh",
      //     duration: 1,
      //   },
      //   "<"
      // );

      // scrollSunTl.to(
      //   "#zoom",
      //   {
      //     height: "10vh",
      //     fontSize: "10vh",
      //     lineHeight: "10vh",
      //     duration: 1,
      //   },
      //   ">"
      // );

      scrollSunTl.addLabel("phase3");

      // scrollSunTl.to(
      //   "#zoom",
      //   {
      //     top: "10%",
      //     duration: 3,
      //   },
      //   ">"
      // );

      scrollSunTl.to(
        "#biggerWhiteCircle",
        {
          width: 100 / 4 + "vw",
          height: 100 / 4 + "vw",
          // left: (100 - 100 / 4) / 2 + "vw",
          opacity: "1",
          // top: 100 / 12 + "vh",
          duration: "3",
        },
        "<"
      );

      scrollSunTl.to(
        "#biggerWhiteCircleDiv",
        {
          top: 0 + "vh",
          duration: "3",
        },
        "<"
      );

      scrollSunTl.to(
        "#smallerWhiteCircle",
        {
          width: 100 / 4 - 2 + "vw",
          height: 100 / 4 - 2 + "vw",
          // left: (100 - 100 / 4) / 2 + 0.5 + "vw",
          opacity: "1",
          // top: (1 / 12) * height + (0.5 * width) / 100 + "px",
          duration: "3",
        },
        "<"
      );

      scrollSunTl.to(
        "#smallerWhiteCircleDiv",
        {
          top: 2 + "vh",
          duration: "3",
        },
        "<"
      );

      scrollSunTl.to(
        "h2#aero",
        {
          x: "-10px",
          opacity: "1",
        },
        ">"
      );

      scrollSunTl.to(
        "#faire",
        {
          x: "-10px",
          opacity: "1",
        },
        ">"
      );

      scrollSunTl.to(
        "#vingt",
        {
          x: "10px",
          opacity: "1",
        },
        "<+=1"
      );

      scrollSunTl.to(
        "#postes",
        {
          x: "10px",
          opacity: "1",
        },
        "<+=1"
      );

      scrollSunTl.to(
        "#disponibles",
        {
          x: "10px",
          opacity: "1",
        },
        "<+=1"
      );

      scrollSunTl.to(
        "#secteurs",

        {
          x: "-40px",
          opacity: "1",
        },
        "<+=1"
      );
    });

    return () => ctx.revert();
  });

  return (
    <>
      <div
        id="entete"
        style={{
          width: "100vw",
          position: "fixed",
          backgroundColor: "red",
          top: "0px",
          height: "70px",
          zIndex: "100",
        }}
      />
      <h1>Yo</h1>
      <div
        className="block"
        style={{
          height: "200vh",
          overflow: "hidden",
        }}
      ></div>
      <div
        id="container_move"
        className=""
        style={{
          backgroundColor: "teal",
          height: "100vh",
          overflow: "hidden",
          position: "absolute",
          width: "100%",
        }}
      >
        <span>AA</span>
        <div
          id="backgroundCircleDiv"
          style={{
            width: "100vw",
            height: "100vw",
            top: initZoomTop,
            position: "absolute",
          }}
        >
          <div
            id="biggerWhiteCircleDiv"
            style={{
              width: "100vw",
              position: "absolute",
              top: "-10vh",
            }}
          >
            <div
              id="biggerWhiteCircle"
              style={{
                borderRadius: "50%",
                background: "rgba(255, 255, 0, 0)",
                borderWidth: "2px",
                borderColor: "red",
                width: "70vh",
                height: "70vh",
                margin: "auto",
                opacity: "1",
              }}
            />
          </div>
          <div
            id="smallerWhiteCircleDiv"
            style={{
              width: "100vw",
              position: "absolute",
              top: "-10vh",
            }}
          >
            <div
              id="smallerWhiteCircle"
              style={{
                borderRadius: "50%",
                background: "rgba(255, 255, 0, 0)",
                borderWidth: "2px",
                borderColor: "red",
                width: "60vh",
                height: "60vh",
                position: "relative",
                opacity: "1",
                margin: "auto",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
          }}
          className="mx-auto w-full"
        >
          <Ttexte />
        </div>
        <div
          id="zoombgCircleDiv"
          style={{
            width: "100vw",
            position: "relative",
            top: initZoomTop,
          }}
        >
          <span
            className="text-center"
            id="zoom"
            style={{
              borderColor: "white",
              // width: "1px",
              // height: "1px",
              position: "absolute",
              // top: initZoomTop,
              fontSize: "100px",
              // bottom: "60%",
              margin: "0 auto",
              left: 0,
              right: 0,
            }}
          >
            ZOOM
          </span>
          <div
            id="backgroundCircle"
            style={{
              borderRadius: "50%",
              backgroundColor: "yellow",
              position: "absolute",
              width: "10vw",
              height: "10vw",

              left: "50%",
              right: "50%",
              // top: 100 / 12 + "vh",
              margin: "0 auto",
              // display: "block",
            }}
          />
        </div>
      </div>
      {/* </div> */}
      <div className="block"></div>
    </>
  );
}
