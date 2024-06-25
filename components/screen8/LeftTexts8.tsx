import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Ttext37():React.ReactElement {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(max-width: 999px)",
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          ScrollTrigger.create({
            trigger: "#main8",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            toggleActions: "play pause resume reset",
            scrub: 3,
            animation: scrollSunTl,
          });

          scrollSunTl.fromTo(
            "#texte_bas_38",
            {
              top: "35vh",
              margin: "0 30vw 0 30vw",
              width: "40vw",
              opacity: "0",
           
            },
            {
              top: "35vh",
              margin: "0 30vw 0 30vw",
              width: "40vw",
              opacity: "1",
              
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
          ScrollTrigger.create({
            trigger: "#main8",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            toggleActions: "play pause resume reset",
            scrub: 3,
            animation: scrollSunTl,
          });
          scrollSunTl.fromTo(
            "#texte_bas_38",
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

  
  return (
    <div
      id="texte_bas_38"
      className="flex justify-center"
      style={{
        zIndex: "30",

        position: "absolute",
        fontSize: "40px",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col justify-start">
          <div
            className="w-50 text1 relative overflow-hidden
        text-green font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-1 backface-hidden border-2 p-2
        "
          >
            <ul>
              <li
                className="effet_perso flex justify-center text-center"
              >
                <a href="https://amaurypichat.fr/planet/index.html">
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
