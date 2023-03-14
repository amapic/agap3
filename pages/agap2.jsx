import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { useLayoutEffect } from "react";

import { gsap } from "gsap";

import Header from "@/components/header2";
import Screen1 from "@/components/Screen1";
// import Screen1_2 from "@/components/Screen1_";
import Screen4 from "@/components/Screen4";
import Screen5 from "@/components/Screen5";
export default function Home() {
  // head body ???

  let cursorWidth = "40";

  useLayoutEffect(() => {
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
  }, []);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
      >
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
        <Screen4 />
        <Screen5 />
      </div>
      {/* </div> */}
    </>
  );
}
