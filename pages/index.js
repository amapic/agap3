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
import Screen1 from "@/components/Screen1";
import Screen4 from "@/components/Screen4";
export default function Home() {
  // head body ???
  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
        smooth={true}
      >
        <Screen1 />
        <Screen4 />
      </div>
      {/* </div> */}
    </>
  );
}
