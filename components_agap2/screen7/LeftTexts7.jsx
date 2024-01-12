import React ,{useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Ttext37() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(max-width: 999px)",
          // isLarge: "(min-width: 769px) and (max-width: 1300px)",
          // isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          // console.log("color", node.children[0].material.color);
          ScrollTrigger.create({
            trigger: "#main7",
            // endTrigger: ".screen6",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            // end: "+=200",
            toggleActions: "play pause resume reset",
            // markers: true,
            scrub: 3,
            animation: scrollSunTl,
            // pin: "#canvas",
          });

          scrollSunTl.fromTo(
            "#texte_bas_37",
            {
              top: "40vh",
              margin:"0 30vw 0 30vw",
              width:"40vw",
              opacity:"0"
              // alignSelf: "center",
              // padding:"auto"
              // position:"fixed"
            },
            {
              top: "40vh",
              margin:"0 30vw 0 30vw",
              width:"40vw",
              opacity:"1"
              // alignSelf: "center",
              // padding:"auto",
              // width:"50%"
              // position:"fixed"
            }
          );
        }
      );
      mm.add(
        // mm.add(
        {
          isSmall: "(min-width: 1000px)",
          // isLarge: "(min-width: 769px) and (max-width: 1300px)",
          // isXLarge: "(min-width: 1301px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          // console.log("color", node.children[0].material.color);
          ScrollTrigger.create({
            trigger: "#main7",
            // endTrigger: ".screen6",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            // end: "+=200",
            toggleActions: "play pause resume reset",
            // markers: true,
            scrub: 3,
            animation: scrollSunTl,
            // pin: "#canvas",
          });
          scrollSunTl.fromTo(
            "#texte_bas_37",
            {
              top: "80vh",
              left: "15vw",
              // position:"fixed"
            },
            {
              bottom: "80vh",
              left: "15vw",
              // position:"fixed"
            }
          );
        }
      );
    });
    return () => ctx.revert();
  });

  function followlink() {
    window.open("https://amaurypichat.fr/siteWeb1/index.html", "_blank");
  }
  return (
    <div
      id="texte_bas_37"
      className="flex justify-center"
      style={{
        // width: "300px",
        zIndex: "30",
        // top: "80vh",
        // left: "15vw",
        position: "absolute",
        size: "40px",
        // textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col justify-start">
          {/* <div className="flex flex-row"> */}
          <div
            className="w-50 text1 
        text-green font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-1 backface-hidden border-2 p-2
        "
          >
            <ul>
              <li className="effet_perso flex justify-center" onClick={followlink}>
                <a href="https://amaurypichat.fr/siteWeb1/index.html">
                  Voir la réalisation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//les timeline se passe les unes après les autres
