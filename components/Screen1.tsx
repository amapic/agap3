import React, { useRef, useEffect, useState, Suspense } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
const ModelVtk = dynamic(() => import("./vtk/vtk"), {
  loading: () => <p>Loading...</p>,
});

gsap.registerPlugin(MotionPathPlugin);
import Image from "next/image";
function VSCode(): React.ReactElement {
  useEffect(() => {
    let elements = Array.prototype.slice.call(
      document.getElementById("code_contain").children
    );
    elements.forEach((element, i) => {
      if (i > 6) {
        gsap.to(element, 0, {
          x: 100 * Math.cos(-Math.PI / 2) + "vh",
          y: 100 * Math.sin(Math.PI / 2) + "vw",
          ease: "none",
        });
      }
    });
    elements.forEach((element, i) => {
      var rect = element.getBoundingClientRect();
      var tl:GSAPTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      if (i == 2 || i == 12) {
        tl.to(element, 10 + 2 * Math.random(), {
          motionPath: {
            path: [
              { x: "-40vw", y: "10vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 3 || i == 6 || i == 13) {
        tl.to(element, 10 + 2 * Math.random(), {
          motionPath: {
            path: [
              { x: "-10vw", y: "30vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 4 || i == 8 || i == 1 || i == 14) {
        tl.to(element, 15 + 4 * Math.random(), {
          motionPath: {
            path: [
              { x: "10vw", y: "30vh" },
              { x: "-10vw", y: "10vh" },
              { x: "-10vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 9 || i == 7) {
        tl.to(element, 30 + 4 * Math.random(), {
          motionPath: {
            path: [
              { x: "10vw", y: "10vh" },
              { x: "0vw", y: "10vh" },
              { x: "-50vw", y: "20vh" },
              { x: "-50vw", y: "-10vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 5 || i == 10 || i == 16) {
        tl.to(element, 15 + 4 * Math.random(), {
          motionPath: {
            path: [
              { x: "10vw", y: "10vh" },
              { x: "-10vw", y: "10vh" },
              { x: "-10vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 11 || i == 15) {
        tl.to(element, 20 + 4 * Math.random(), {
          motionPath: {
            path: [
              { x: "-50vw", y: "10vh" },
              { x: "60vw", y: "-10vh" },
              { x: "-50vw", y: "-20vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
      }
      if (i == 0 || i == 6 || i == 17) {
        tl.to(element, 10 + 4 * Math.random(), {
          motionPath: {
            path: [
              { x: "10vw", y: "10vh" },
              { x: "-10vw", y: "70vh" },
              { x: "0vh", y: "0vw" },
            ],
          },
          ease: "none",
        });
        tl.play();
      }
    });
  }, []);
  return (
    <div
      id="code_contain"
      className="flex flex-col z-2 text-base relative h-3/5 pl-6  md:bottom-0 md:h-full md:right-0 md:w-1/2 md:pl-32 md:pt-12"
    >
      <div className="">
        <span className="vscode_rose">{"import "}</span>
        <span>React</span> <span className="vscode_rose">{"from"}</span>
        <span className="vscode_orange"> "react"</span>
      </div>
      <div className="">
        <span>
          interface <span className="vscode_jaune">IPost</span>{" "}
          <span className="vscode_yellow">{"{"}</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          id<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">number</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          userId?<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">number</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          title<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">string</span>
        </span>
      </div>
      <div className="">
        <span className="code_space">
          body<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">string</span>
        </span>
      </div>
      <div>
        <span className="vscode_jaune">{"}"}</span>
      </div>
      {}
      <div>
        const App
        <span className="vscode_blanc">=</span>
        <span className="vscode_yellow">{"()"}</span>
        {"=>"}
        <span className="vscode_jaune">{"{"}</span>
      </div>
      <div>
        {}
        <span className="code_space">
          const defaultPosts<span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">IPost</span>
          <span className="vscode_jaune">[]</span> ={" "}
          <span className="vscode_jaune">[]</span>;
        </span>
      </div>
      <div className="mini:overflow-x-hidden ">
        <span className="code_space">
          const <span className="vscode_rose">{"["}</span> posts,
          <span className="vscode_jaune">setPosts</span>{" "}
          <span className="vscode_rose">{"]"}</span>
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_rose">{"["}</span>
          <span className="vscode_vert">IPost</span>
          []
          <span className="vscode_blanc">,</span> {"("}posts
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_vert">IPost</span>
          <span className="vscode_jaune">[]</span>
          {") => "}
          <span className="vscode_vert">void</span>
          <span className="vscode_rose">{"]"}</span>
          {" = "}
          <span className="vscode_vert">React</span>
          <span className="vscode_blanc">.</span>
          <span className="vscode_yellow">useState</span>
          <span className="vscode_rose">{"("}</span>
        </span>
      </div>
      <div>
        <span className="code_space ">
          <span className="code_space">defaultPosts</span>
        </span>
      </div>
      <div>
        <span className="code_space vscode_rose">{")"}</span>;
      </div>
      <div className="hidden md:block">
        {}
        <span className="code_space">
          const <span className="vscode_rose">{"["}</span> loading,{" "}
          <span className="vscode_jaune">setLoading</span>{" "}
          <span className="vscode_rose">{"]"}</span>
          <span className="vscode_blanc">:</span>{" "}
          <span className="vscode_rose">{"["}</span>
        </span>
      </div>
      <div className="code_space hidden md:block">
        <span className="vscode_vert code_space">boolean</span>,
      </div>
      <div className="code_space hidden md:block">
        <span className="code_space">
          {"(loading)"}
          <span className="vscode_blanc">{" : "}</span>
          <span className="vscode_vert">boolean</span>
          {" => "}
          <span className="vscode_vert">void</span>
        </span>
      </div>
      <div className="code_space hidden md:block">
        <span className="vscode_rose">{"]"}</span>
        <span className="vscode_blanc">{" = "}</span>
        <span className="vscode_vert">React</span>
        <span className="vscode_yellow">useState</span>
        <span className="vscode_blanc">.</span>
        <span className="vscode_blanc">{"<"}</span>
        <span className="vscode_vert">boolean</span>
        <span className="vscode_blanc">{">"}</span>
        <span className="vscode_rose">{"("}</span>
        true
        <span className="vscode_rose">{")"}</span>
      </div>
      <div className="code_space">
        <span className="vscode_rose">{"return ("}</span>
      </div>
      <div className="code_space">
        <span className="code_space">{"<div className="}</span>
        <span className="vscode_orange">{'"App"'}</span>
        {">"}
      </div>
      <div className="overflow-x-hidden code_space">
        <span className="code_space">
          <span className="code_space">
            <span>{"{loading"}</span>
            <span className="vscode_blanc">{" && "}</span>
            <span className="">{"<button onClick="}</span>
            <span className="vscode_jaune">{"{"}</span>
            <span className="vscode_jaune">{"handleCancelClick"}</span>
            <span className="vscode_jaune">{"}"}</span>
            {">"}
            <span className="vscode_blanc">{"Cancel"}</span>
            <span className="">{"</button>}"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">{"<ul className"}</span>
          <span className="vscode_blanc">{"="}</span>
          <span className="vscode_orange">{'"posts"'}</span>
          {">"}
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              {"{posts"}
              <span className="vscode_jaune_pal">.map</span>
              <span className="vscode_jaune">{"("}</span>
              <span className="vscode_rose">{"("}</span>
              post
              <span className="vscode_rose">{")"}</span>
              {"=>"}
              <span className="vscode_rose">{"("}</span>
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">{"<li key={post.id}>"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              <span className="code_space">{"<h3>{post.title}</h3>  "}</span>
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">{"</li>"}</span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">
            <span className="code_space">
              <span className="vscode_rose">{")"}</span>
              <span className="vscode_jaune">{")"}</span>
              {"}"}
            </span>
          </span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">
          <span className="code_space">{"</ul>"}</span>
        </span>
      </div>
      <div className="code_space">
        <span className="code_space">{"</div>"}</span>
      </div>
      <div className="code_space">
        <span className="vscode_rose">{")"}</span>
      </div>
      <div className="">
        <span className="vscode_jaune">{"}"}</span>
      </div>
      {}
      {}
    </div>
  );
}
export default function Screen1(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const clicked = useRef<boolean>(false);
  const animated = useRef<boolean>(false);
  const mouse_pos = useRef([]);
  const tutoriel = useRef<boolean>(true);

  const blueColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-blue-fonce"
  );

  const DarkColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-noir-fonce"
  );
  useEffect(() => {
    var tl2 = gsap.timeline({ repeat: -1 });
    tl2.to(
      "#shrink_button",
      0.2,
      {
        scale: 1.5,
      },
      3
    );
    tl2.to("#shrink_button", 0.2, {
      scale: 1,
    });
    tl2.to("#shrink_button", 1, {
      rotation: 360,
      transformOrigin: "center center",
    });
    tl2.play();
    document
      .querySelector(".home-cover")
      .addEventListener("mouseenter", (e) => {
        gsap.to("#texte_cursorr", {
          ease: "none",
          visibility: "visible",
        });
      });
    document
      .querySelector(".home-cover")
      .addEventListener("mousemove", (e: MouseEvent) => {
        if (!clicked.current && ref.current && !animated.current) {
          ref.current.style.setProperty(
            "clip-path",
            "circle(200px at " + e.pageX + "px " + e.pageY + "px)"
          );
          gsap.killTweensOf("#div_clip_path");
        }
        mouse_pos.current = [e.pageX, e.pageY];
      });
    document.querySelector(".home-cover").addEventListener("mouseleave", () => {
      if (!clicked.current && !animated.current) {
        gsap.to("#div_clip_path", {
          duration: 1,
          ease: "power2",
          clipPath: "circle(200px at 72vw 50%)",
        });
      }

      gsap.to("#texte_cursorr", {
        ease: "none",
        visibility: "hidden",
      });
    });
    function redresseCode2(event) {
      let myElement: HTMLElement = document.getElementById("code_contain");
      let i: number = 0;
      for (const child of myElement.children) {
        i = i + 1;
        gsap.killTweensOf(child);
        gsap.to(child, 0.3, {
          ease: "none",
          x: "0px",
          y: "0px",
          // @ts-ignore
          delay: i * "0.02",
        });
      }
    }
    document
      .querySelector("#shrink_button")
      .addEventListener("click", (event) => {
        if (clicked.current) {
          let textCursor = document.querySelector("#texte_cursorr");
          textCursor.classList.add("blur");
          setTimeout(() => {
            document.querySelector("#texte_cursorr").innerHTML = "";
          }, 1000);

          tutoriel.current = false;
          event.stopPropagation();

          var clipPath = ref.current.style.getPropertyValue("clip-path");
          if (clipPath) {
            gsap.killTweensOf("#div_clip_path");
            gsap.to("#shrink_button", { duration: 1, opacity: 0 });
            let height = window.innerHeight,
              width = window.innerWidth;
            let dim = "vw";
            if (height > width) {
              dim = "vh";
            }
            let clipPath1: string = clipPath.split("at")[0];
            clipPath1 =
              "circle(15" +
              dim +
              " at " +
              mouse_pos.current[0] +
              "px " +
              mouse_pos.current[1] +
              "px)";
            setTimeout(() => {
              clicked.current = false;
            }, 500);
            var tl = gsap.timeline();
            tl.to(
              "#div_clip_path",
              {
                duration: 1,
                ease: "power2",
                clipPath: clipPath1,
              },
              0
            );
          }
        }
      });
    document.querySelector(".home-cover").addEventListener("click", (event) => {
      if (clicked.current && tutoriel.current) {
        document.querySelector("#texte_cursorr").innerHTML =
          "Appuyez sur le cercle bleu pour refermer le voile";
      }
      if (!clicked.current) {
        gsap.to("#shrink_button", { duration: 1, opacity: 1 });

        let textCursor = document.querySelector("#texte_cursorr");
        if (tutoriel.current) {
          textCursor.classList.add("blur");
          setTimeout(() => {
            textCursor.classList.remove("blur");
            document.querySelector("#texte_cursorr").innerHTML =
              "Maintenez la souris appuyée pour faire pivoter l'objet";
            textCursor.classList.add("deblur");
          }, 1000);
        } else {
          textCursor.innerHTML = "";
        }

        var clipPath = ref.current.style.getPropertyValue("clip-path");
        if (clipPath) {
          let height: number = window.innerHeight,
            width = window.innerWidth;
          let dim: string = "vw";
          if (height > width) {
            dim = "vh";
          }
          let clipPath1: string = clipPath.split("at")[0];
          clipPath1 = "circle(100" + dim + " at " + clipPath1[1];
          let clipPath2: string = clipPath.split("at")[0];
          clipPath2 = "circle(15" + dim + " at " + clipPath2[1];
          clicked.current = true;
          var tl = gsap.timeline();
          tl.to(
            "#div_clip_path",
            {
              duration: 0.2,
              ease: "power1.out",
              clipPath: clipPath2,
            },
            0.2
          );
          tl.to(
            "#div_clip_path",
            {
              duration: 0.2,
              ease: "power1.out",
              clipPath: clipPath2.replace("circle(15", "circle(10"),
            },
            ">"
          );
          tl.to(
            "#div_clip_path",
            {
              duration: 5,
              ease: "power2",
              clipPath: clipPath1,
            },
            ">"
          );
        }
      }
    });
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      function q(x) {
        return document.querySelectorAll(x);
      }
      // gsap.from(
      //   q(
      //     "#div_clip_path .home-cover__content .line:nth-child(1) .word:nth-child(1)"
      //   ),
      //   {
      //     y: "-30px",
      //     duration: "1",
      //     ease: "linear",
      //   },
      //   0
      // );
      // let div = document.getElementById("screen1");
      let wwidth: number = window.screen.width;
      for (let step = 0; step < 10; step++) {
        let paragraph = document.createElement("p");
        paragraph.classList.add("ccode");
        paragraph.classList.add("my-1");
        paragraph.textContent = "Hello, world!";
        paragraph.style.top = (50 + step * 50).toString() + "px";
        paragraph.style.left = (wwidth / 5).toString() + "px";
        paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
      }
      for (let step = 0; step < 10; step++) {
        let paragraph = document.createElement("p");
        paragraph.classList.add("ccode");
        paragraph.classList.add("my-1");
        paragraph.textContent = "Hello, world!";
        paragraph.style.top = (50 + step * 50).toString() + "px";
        // @ts-ignore
        paragraph.style.left = 2 * (wwidth / 5).toString() + "px";
        paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
      }
      for (let step = 0; step < 10; step++) {
        let paragraph = document.createElement("p");
        paragraph.classList.add("ccode");
        paragraph.classList.add("my-1");
        paragraph.textContent = "Hello, world!";
        paragraph.style.top = (50 + step * 50).toString() + "px";
        // @ts-ignore
        paragraph.style.left = 3 * (wwidth / 5).toString() + "px";
        paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
      }
      for (let step = 0; step < 10; step++) {
        let paragraph = document.createElement("p");
        paragraph.classList.add("ccode");
        paragraph.classList.add("my-1");
        paragraph.textContent = "Hello, world!";
        paragraph.style.top = (50 + step * 50).toString() + "px";
        // @ts-ignore
        paragraph.style.left = 4 * (wwidth / 5).toString() + "px";
        paragraph.style.rotate = (15 * Math.random()).toString() + "deg";
      }
    });
    return () => ctx.revert();
  });
  useEffect(() => {
    function clickEffect(e) {
      var d = document.createElement("div");
      d.className = "clickEffect";
      d.style.top = mouse_pos.current[1] + "px";
      d.style.left = mouse_pos.current[0] + "px";
      document.body.appendChild(d);

      // d.addEventListener("mousemove",
      // function () {
      // d.style.top = mouse_pos.current[1] + "px";
      // d.style.left = mouse_pos.current[0] + "px";
      // }.bind(this)
      // )
      // (e) => {
      // if (d!=null){
      // d.style.top = mouse_pos.current[1] + "px";
      // d.style.left = mouse_pos.current[0] + "px";
      // }
      // });

      d.addEventListener(
        "animationend",
        function () {
          // d.parentElement.removeChild(d);
        }.bind(this)
      );
    }
    // document.addEventListener("click", clickEffect);

    // d.addEventListener("mousemove",
    // function () {
    // d.style.top = mouse_pos.current[1] + "px";
    // d.style.left = mouse_pos.current[0] + "px";
  }, []);
  return (
    <>
      <div
        id="screen1"
        style={{
          backgroundColor: "rgb(0,0,0)",
        }}
        className={"home-cover relative w-full h-screen z-100"}
      >
        <div className="bg_grey home-cover__wrapper relative w-full cursor-pointer overflow-hidden js-cover">
          <div
            id="div_clip_path"
            className="w-full h-full home-cover__hover absolute top-0 left-0 z-30 backface-hidden "
            ref={ref}
          >
            <header
              id="header_1"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-white)",
                visibility: "hidden",
              }}
              data-text-color="white"
            >
              <div className=" header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a
                    id="AP_Hidden"
                    className="font-weight600 text-2xl header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5"
                  >
                    Amaury PICHAT
                  </a>
                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill={DarkColor}
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>
                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li
                      role="menu"
                      className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1"
                    >
                      <a
                        href="https://www.linkedin.com/in/amaurypichat/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://github.com/amaurypichat"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Github
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://amaurypichat.fr/cv/cv_Amaury_PICHAT.pdf"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        CV
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <ModelVtk />
            <div id="shrink_button">
              <img src="/shrink.png" alt="reduirefond" />
            </div>
          </div>
          <div className="w-full h-full " id="part2">
            {}
            <header
              id="header_part2"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              data-text-color="brown"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-brown)",
                visibility: "hidden",
              }}
            >
              <div className="header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a className="font-weight600 text-2xl header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5">
                    Amaury PICHAT
                  </a>
                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>
                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.linkedin.com/in/amaurypichat/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://github.com/amaurypichat"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Github
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://amaurypichat.fr/cv/cv_Amaury_PICHAT.pdf"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                         CV 
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div
              id="main_content_zone1_not_hidden"
              className="home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0 z-10"
            >
              <h1 className="font-black flex flex-wrap items-start w-full">
                <div
                  className="w-max-content md:w-1/2 text-2xl md:text-3xl  text-blue tracking-normal md:text-right pr-6 md:pr-12 js-tosplit"
                  data-cartapus="visible"
                >
                  <div className="line">
                    <div className="word ">{}</div>
                    {/* <div className="word">Spécialiste Web 3D</div> */}
                    <div className="word">Spécialiste front-end</div>
                  </div>
                  <div className="line">
                    {/* <div className="word">et visualisation scientifique</div> */}
                    <div className="word">avec React.js et Next.js</div>
                  </div>
                  <div className="line">
                    <div className="word text-xl md:text-2xl xl:text-3-5xl">
                      06 88 91 80 19
                    </div>
                  </div>
                  <div className="line text-xl md:text-2xl xl:text-3-5xl">
                    <div className="word pb-2">amaury.pichat@gmail.com</div>
                  </div>
                </div>
                <div
                  className="home-cover__you absolute md:relative md:right-0 md:top-0 md:-mt-4 lg:-mt-8 md:ml-auto pl-12 md:pr-10 lg:pr-24 xl:pr-40 md:pl-12 w-auto text-5xl md:text-6xl xl:text-9xl text-yellow js-tosplit"
                  data-cartapus="visible"
                >
                  <div className="line">
                    <div className="word">{}</div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
