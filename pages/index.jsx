import Head from "next/head";
// import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
import { useMediaQuery } from "react-responsive";
import Header from "@/components_agap2/header2";
import Screen1 from "@/components_agap2/Screen1";
import Screen4 from "@/components_agap2/Screen4";
import Screen5 from "@/components_agap2/Screen5";
import Screen6 from "@/components_agap2/Screen6";
import Screen7 from "@/components_agap2/Screen7";
// import Navv, { Carousel } from "@/components_agap2/Nav";
// import {
//   BrowserView,
//   MobileView,
//   isBrowser,
//   isMobile,
// } from "react-device-detect";
function Home() {
  let cursorWidth = "40";
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#screen4",
          start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "bottom bottom+=50%",
          // markers: true,
          toggleActions: "play none none reset",
        },
      });

      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: "#screen6",
          start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "bottom bottom+=50%",
          // markers: true,
          toggleActions: "play none none reset",
        },
      });

      // let tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#container_move5",
      //     start: "top top+=50%", // which means "when the top of the trigger hits 40px above the bottom of the viewport
      //     end: "bottom bottom",
      //     // markers: true,
      //     toggleActions: "play none none reset",
      //   },
      // });

      // tl.to(".pathnav", {
      //   stroke: "#ffcd00",
      //   ease: "none",
      //   // backgroundColor: "#ffcd00",
      // });

      // tl2.to(".pathnav", {
      //   stroke: "#fff",
      //   ease: "none",
      //   // backgroundColor: "#fff",
      // });
    });

    // let circleToHover = null || document.querySelector(".circleToHover");

    // let ctx = gsap.context((self) => {
    //   // use any arbitrary string as a name; it'll be added to the Context object, so in this case you can call ctx.onClick() later...
    //   self.add("onClick", (e) => {
    //     gsap.to(".circleToHover", { borderColor: "pink" }); // <-- gets added to the Context!
    //   });
    // }, root);

    // circleToHover.addEventListener("click", (e) => ctx.onClick(e));

    const setX = gsap.quickTo("#mousemove", "x", {
      duration: 0.5,
      ease: "power2",
    });

    const setY = gsap.quickTo("#mousemove", "y", {
      duration: 0.5,
      ease: "power2",
    });

    document.addEventListener("pointermove", (e) => {
      setX(e.clientX - cursorWidth / 2);
      setY(e.clientY - cursorWidth / 2);
    });

    return () => ctx.revert();
  }, [cursorWidth]);

  // const [_isMobile, setMobile] = useState(false);

  // useEffect(() => {
  //   setMobile(isMobile);
  // }, [setMobile]);

  // console.log("mobile", _isMobile);

  return (
    <>
      <Head>
        <title>Portfolio A.PICHAT</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* <div
        style={{
          overflow: "hidden",
          display: _isMobile ? "none" : "block",
        }}
      > */}
      {/* <Navv /> */}
      {/* <Carousel /> */}
      {/* {!isTabletOrMobile && ( */}
        <>
          <div
            id="mousemove"
            style={{
              backgroundColor: "transparent",
              width: cursorWidth + "px",
              height: cursorWidth + "px",
              position: "fixed",
              top: "0",
              left: "0",
              pointerEvents: "none",
              borderRadius: "999px",
              // borderColor: "red",
              // border: "12px solid",
              backgroundColor: "rgba(100,100,100,0.3)",
              zIndex: "1000",
            }}
          ></div>
          <Header />
          <Screen1 />
          {/* <Screen4 /> */}
          <Screen6 />
          <Screen7 />
          {/* <Screen5 /> */}
          {/* <Screen5 /> */}
        </>
      {/* )} */}
      {/* {isTabletOrMobile && (
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            width: "100wh",
            color: "black",
            textAlign: "center",
            lineHeight: "25vh",
            // display: _isMobile ? "block" : "none",
          }}
        >
          Site non prévu pour Smartphone
        </div>
      )} */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
