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

export default function Home() {
  useEffect(() => {
    // let q = gsap.utils.selector(".accordion-menu");
    let openMenu = null;
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".accordion-menu").forEach((menu, i) => {
        // menus.forEach((menu) => {
        
        let box = menu.parentNode.querySelector(".accordion-content"),
          // let box = q(".accordion-content"),
          items = box.querySelectorAll("li"),
          isOpen = false,
          compteur = i;
        // console.log(menu.onclick)
        // if (undefined == menu.onclick) {
            console.log("dfh");
          // console.log("ee", box);
          // console.log("ee", items);
          gsap.set(items, { y: "-30vh" });

          menu.open = () => {
            if (!isOpen) {
              // alert("dh");
              isOpen = true;
              // openMenu && openMenu.close();
              openMenu = menu;
              gsap.to(box, {
                height: "75vh",
                duration: 1,
                ease: "elastic",
                overwrite: true,
              });
              gsap.to(items, {
                y: "25vh",
                overwrite: true,
                duration: 1.5,
                stagger: 0.1,
                ease: "elastic",
              });
            }
          };

          menu.close = () => {
            if (isOpen) {
              console.log("rr", compteur);
              isOpen = false;
              openMenu = null;
              gsap.to(box, {
                height: 0,
                overwrite: true,
                onComplete: () => gsap.set(items, { y: -30, overwrite: true }),
              });
            }
          };

          menu.addEventListener("click", () => {
            //   console.log("gsfg");
              isOpen ? menu.close() : menu.open();
          });
        // }
    //   });
        });
    });

    return () => ctx.revert();

    // const menus = gsap.utils.toArray(".accordion-menu");
    // let openMenu;

    // let q = gsap.utils.selector(".accordion-menu");

    // menus.forEach((menu) => {
    //   //   let box = menu.parentNode.querySelector(".accordion-content"),
    //   let box = q(".accordion-content"),
    //     items = box.querySelectorAll("li"),
    //     isOpen = false;

    //   gsap.set(items, { y: -30 });

    //   menu.open = () => {
    //     if (!isOpen) {
    //       isOpen = true;
    //       openMenu && openMenu.close();
    //       openMenu = menu;
    //       gsap.to(box, {
    //         height: "auto",
    //         duration: 1,
    //         ease: "elastic",
    //         overwrite: true,
    //       });
    //       gsap.to(items, {
    //         y: 0,
    //         overwrite: true,
    //         duration: 1.5,
    //         stagger: 0.1,
    //         ease: "elastic",
    //       });
    //     }
    //   };

    //   menu.close = () => {
    //     if (isOpen) {
    //       isOpen = false;
    //       openMenu = null;
    //       gsap.to(box, {
    //         height: 0,
    //         overwrite: true,
    //         onComplete: () => gsap.set(items, { y: -30, overwrite: true }),
    //       });
    //     }
    //   };

    //   menu.addEventListener("click", () =>
    //     isOpen ? menu.close() : menu.open()
    //   );
    // });
  }, []);
  return (
    <>
      <ul className="accordion">
        <li className="accordion-group">
          <div className="accordion-menu">Alfa</div>
          <ul className="accordion-content">
            <li>Pellentesque</li>
            <li>Tristique</li>
            <li>Vestibulum</li>
            <li>Mauris</li>
            <li>Habitant</li>
          </ul>
        </li>
        <li className="accordion-group">
          <div className="accordion-menu">Bravo</div>
          <ul className="accordion-content">
            <li>Pellentesque</li>
            <li>Tristique</li>
            <li>Vestibulum</li>
            <li>Mauris</li>
            <li>Habitant</li>
          </ul>
        </li>
        <li className="accordion-group">
          <div className="accordion-menu">Charlie</div>
          <ul className="accordion-content">
            <li>Pellentesque</li>
            <li>Tristique</li>
            <li>Vestibulum</li>
            <li>Mauris</li>
            <li>Habitant</li>
          </ul>
        </li>
        <li className="accordion-group">
          <div className="accordion-menu">Delta</div>
          <ul className="accordion-content">
            <li>Pellentesque</li>
            <li>Tristique</li>
            <li>Vestibulum</li>
            <li>Mauris</li>
            <li>Habitant</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Home), {
//   ssr: false,
// });
