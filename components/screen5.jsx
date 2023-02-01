import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Screen5() {
  const zoom = useRef(null);

  // useEffect(() => {
  //   const element = zoom.current;
  //   // gsap.fromTo()
  //   // gsap.fromTo(
  //   //   element.querySelector(".text_zoom"),
  //   //   {
  //   //     fontSize: "10px",
  //   //   },
  //   //   {
  //   //     fontSize: "30px",
  //   //     scrollTrigger: {
  //   //       trigger: element.querySelector(".screen5"),
  //   //       start: "top top",
  //   //       end: "bottom center",
  //   //       scrub: true,
  //   //       pin:true,
  //   //       markers: true
  //   //     },
  //   //   }
  //   // );
  // }, []);

  return (
    <div
      style={{
        height: "300vh",
        backgroundColor: "yellow",
        position: "relative",
        top: "100vh"
      }}
      className="screen5"
      ref={zoom}
    >
      <div
      className="zoom_container"
      >
        <div
          
          className="text_zoom"
          style={{
            position: "absolute",
            top: "50vh",
            left: "50vw",
          }}
        >
          ZOOM
        </div>
      </div>
    </div>
  );
}
