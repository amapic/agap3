import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function RightText_() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();
      // console.log("color", node.children[0].material.color);
      ScrollTrigger.create({
        trigger: "#main8",
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
      id="screen8PartieDroite"
      className="relative container-main w-full h-screen-1/2 rg:h-full rg:w-1/2 py-6  rg:py-10 pr-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2 rg:text-start text-center"
      // rg:w-1/2
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span className="">Création d'un effet de profondeur sur une surface en 3D</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          {/* agap<span className="text-yellow">2</span> */}
        </p>

        <div className="mce w-full">
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
                id="tech18"
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
            <li  className="px-6 git2 text-center rg:text-start">
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
            <li  className="px-6 git2 text-center rg:text-start">
              <span
                id="tech28"
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

      </div>

      
    </div>
    // </div>
  );
}
