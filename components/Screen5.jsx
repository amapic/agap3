import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ttimeline2 from "./screen5/timeline2";
import useWindowDimensions from "./useWindowDimensions";
import Ttexte from "./screen5/ttexte";
export default function Home() {
  const zoom = useRef(null);
  let hauteurDefilementStep1 = "+=900";
  let hauteurDefilementStep2 = "+=300";
  const { height, width } = useWindowDimensions();
  var h = height;
  var w = width;
  let initZoomTop = "50%";
  let initFontSizeZoom = "150px";
  useEffect(() => {
    const element = zoom.current;
    let ctx = gsap.context(() => {
      ttimeline2(height, width, initFontSizeZoom);
    });
    return () => ctx.revert();
  });
  const widthBiggerCircle = useRef("0px");
  const widthSmallerCircle = useRef("0px");
  const divStyle = {
    top: "calc(10vh + 40px)",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: "2px",
    borderColor: "#ffe26e",
    width: "400px",
    height: "400px",
    left: 0,
    right: 0,
    position: "absolute",
    opacity: "0",
    margin: "0 auto",
    zIndex: "2",
  };
  useEffect(() => {
    widthBiggerCircle.current = Math.round((1200 / 4) * 1.4, 2) + "px";
    widthSmallerCircle.current = Math.round((1200 / 4 - 30) * 1.4, 2) + "px";
  });
  return (
    <>
      <div
        id="container_move5"
        className=""
        style={{
          backgroundColor: "white",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          zIndex: "1",
        }}
      >
        <div
          id="biggerWhiteCircle2"
          style={{
            top: "10vh",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderWidth: "2px",
            borderColor: "#ffe26e",
            width: "480px",
            height: "480px",
            left: 0,
            right: 0,
            opacity: "0",
            margin: "0 auto",
            position: "absolute",
            zIndex: "2",
          }}
        />
        <div id="smallerWhiteCircle2" style={divStyle} />
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
        <img
          id="plane"
          src="/avion-test2-2.png.webp"
          style={{
            width: "40vw",
            position: "fixed",
            top: "40vh",
            left: "0",
            right: "0",
            margin: "0 auto",
            opacity: "0",
            zIndex: "11",
          }}
        />
        <div
          id="zoombgCircleDiv"
          style={{
            width: "100vw",
            position: "relative",
            top: initZoomTop,
          }}
        >
          <span
            id="zoom"
            style={{
              zIndex: "10",
            }}
            className="home-zoom__zoom js-zoom-zoom absolute text-yellow font-bold tracking-tighter -z-1 backface-hidden"
          >
            {}
            <p className="js-zoom-zoom-p backface-hidden">
              z
              <span className="inline-block">
                o<span className="js-zoom-o">o</span>
              </span>
              m
            </p>
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
