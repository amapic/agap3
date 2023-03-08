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

import Header from "@/components/header2";
import Screen1 from "@/components/Screen1";
import Screen1_2 from "@/components/Screen1_2";
import Screen4 from "@/components/Screen4";
import Screen5 from "@/components/Screen5";
export default function Home() {
  // head body ???
  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
        // smooth={true}
      >
        <Header />
        {/* <Screen1_2 /> */}
        <Screen4 />
        {/* <Screen5 /> */}
      </div>
      {/* </div> */}
    </>
  );
}
