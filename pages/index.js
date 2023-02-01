import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/header";
import Screen5 from "@/components/screen5";
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
        <Screen1 />
        {/* <Screen5 /> */}
      {/* </div> */}
    </>
  );
}
