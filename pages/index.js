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

import Header from "@/components/header";
// import Screen5 from "@/components/screen5";
import Screen1 from "@/components/screen1";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <div
        style={{
          position: "relative",
        }}
      > */}
      <div
        style={{
          overflow: "hidden",
        }}
        smooth={true}
      >
        <Screen1 />
        {/* <Screen5 /> */}
      </div>
      {/* </div> */}
    </>
  );
}
