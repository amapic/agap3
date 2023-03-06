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

  let initZoomTop = "50%";
  let initFontSizeZoom = "150px";
  useEffect(() => {
    const element = zoom.current;
    // console.log((1 / 12) * height + (0.5 * width) / 100 + "px");
    let ctx = gsap.context(() => {
      ttimeline2(height, width, initFontSizeZoom);
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
          position: "relative",
          width: "100%",
          zIndex: "1",
        }}
      >
        <span>AA</span>
        {/* <div
          id="backgroundCircleDiv"
          style={{
            width: "100vw",
            height: "100vw",
            top: initZoomTop,
            position: "absolute",
          }}
        > */}
        {/* <div
            id="biggerWhiteCircleDiv"
            style={{
              width: "100vw",
              position: "absolute",
              top: "-10vh",
            }}
          > */}
        <div
          id="biggerWhiteCircle"
          style={{
            top: "10vh",
            borderRadius: "50%",
            background: "rgba(255, 255, 0, 0)",
            borderWidth: "2px",
            borderColor: "red",
            width: "32vh",
            height: "32vh",
            margin: "auto",
            opacity: "1",
            left: 0,
            right: 0,
            margin: "0 auto",
            position: "absolute",
            zIndex: "2",
          }}
        />
        {/* </div> */}
        {/* <div
            id="smallerWhiteCircleDiv"
            style={{
              width: "100vw",
              position: "absolute",
              top: "-10vh",
            }}
          > */}
        <div
          id="smallerWhiteCircle"
          style={{
            top: "12vh",
            borderRadius: "50%",
            background: "rgba(255, 255, 0, 0)",
            borderWidth: "2px",
            borderColor: "red",
            width: "30vh",
            height: "30vh",
            left: 0,
            right: 0,
            position: "absolute",
            opacity: "1",
            margin: "0 auto",
            zIndex: "2",
          }}
        />
        {/* </div> */}
        {/* </div> */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            zIndex: "3",
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
              position: "absolute",
              fontSize: initFontSizeZoom,
              margin: "0 auto",
              left: 0,
              right: 0,
              zIndex: "10",
            }}
          >
            ZOOM2
          </span>
        </div>
        <div
          id="backgroundCircle"
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffcd00",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "1",
            top: initZoomTop,
            left: 0,
            right: 0,
            margin: "0 auto",
            opacity: "1",
          }}
        />
      </div>
      <div className="block"></div>
    </>
  );
}
