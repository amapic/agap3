import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function TimelineDroite(scrollSunTl, q) {
  let ColorWhite = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-white"
  );

  scrollSunTl.fromTo(
    q("#screen4PartieDroite"),
    {
      y: "25vh",
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      y: 0,
    }
  );

  return scrollSunTl;
}

export default function RightText7() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();
      // console.log("color", node.children[0].material.color);
      ScrollTrigger.create({
        trigger: "#main7",
        // endTrigger: ".screen6",
        start: "top+=10% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "bottom-=10% bottom",
        // end: "+=200",
        toggleActions: "play pause resume reset",
        // markers: true,
        scrub: 3,
        animation: scrollSunTl,
        // pin: "#canvas",
      });

      // gsap.to("#tech17", {
      //   scrollTrigger: "#tech17", // start the animation when ".box" enters the viewport (once)
      //   backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
      //   backgroundSize: "cover",
      //   markers: true,
      // });

      // gsap.to("#tech27", {
      //   scrollTrigger: "#tech27", // start the animation when ".box" enters the viewport (once)
      //   backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
      //   backgroundSize: "cover",
      //   markers: true,
      // });


    });
    return () => ctx.revert();
  });
  return (
    // <div id="screen4PartieDroite">
    <div
      id="screen7PartieDroite"
      className="relative container-main  w-1/2  py-10 pr-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2"
      // rg:w-1/2
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span>Création d'un effet de profondeur sur une surface en 3D</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          {/* agap<span className="text-yellow">2</span> */}
        </p>

        <div className="mce w-full ">
          <p>
            Techniquement poussé, ce projet m'a permis de maitriser des techniques ambitieuses comme Three.js et WebGl.
            <br />
            Le site surprend l'internaute en donnant une impression de profondeur inédite.
          </p>
        </div>
        <h3 className="text-3xl mt-8">
          Technologies utilisées:
          <ul>
            <li
              // <img classname="ttttick" src="../../tick.gif" />
              className="px-6"
            >
              <span
                id="tech17"
                className="px-6 git1"
                style={
                  {
                    // backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
                    // backgroundSize: "cover",
                  }
                }
              ></span>
              - React.js
            </li>
            <li  className="px-6 git2">
              <span
                id="tech27"
                className="px-6"
                style={
                  {
                    // backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
                    // backgroundSize: "cover",
                  }
                }
              ></span>
              - Three.js
            </li>
            <li  className="px-6 git2">
              <span
                id="tech27"
                className="px-6"
                style={
                  {
                    // backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
                    // backgroundSize: "cover",
                  }
                }
              ></span>
              - WebGL
            </li>
          </ul>
        </h3>

        {/* <a
          href="https://www.agap2.fr/agap2/"
          className="points-link mt-6 py-2 inline-block"
        >
          <div className="points flex items-stretch ml-1">
            <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
            <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
            <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
          </div>
        </a> */}
      </div>

      {/* <p
        className="back-title select-none w-fit-content pointer-events-none whitespace-no-wrap font-black text-huge tracking-tighter absolute leading-none -z-1 opacity-100 top-0 back-title--aligned text-white md:top-unset md:bottom-0"
        data-cartapus="visible"
      >
        agap2
      </p> */}
    </div>
    // </div>
  );
}
