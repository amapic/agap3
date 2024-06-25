import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function RightText_():React.ReactElement {
  useEffect(() => {
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();

      ScrollTrigger.create({
        trigger: "#main8",

        start: "top+=10% top",
        end: "bottom-=10% bottom",

        toggleActions: "play pause resume reset",

        scrub: 3,
        animation: scrollSunTl,
      });
    });
    return () => ctx.revert();
  });
  return (
    <div
      id="screen8PartieDroite"
      className="relative container-main w-full h-screen-1/2 rg:h-full rg:w-1/2 py-6  rg:py-10 pr-10  rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2 rg:text-start text-center"
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden rg:text-start">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span className="">Planisphère réalisé entièrement en 3D</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold"></p>

        <div className="mce w-full">
          <p>
            Ce projet réalisé en 3D me permet de maitriser des technologies
            <br />
            donnant de nouvelles possibilités en terme d'ergonomie et de
            créativité
          </p>
        </div>
        <h3 className="text-3xl mt-8 hidden">
          Technologies utilisées:
          <ul>
            <li className="px-6">
              <span id="tech18" className="px-6 git1" style={{}}></span>-
              React.js
            </li>
            <li className="px-6 git2">
              <span id="tech27" className="px-6" style={{}}></span>- Three.js
            </li>
          </ul>
        </h3>
        <h3 className="text-3xl mt-8 ">
          Technologies utilisées:
          <ul className="mt-8 md:ml-24">
            <li className="px-6 min-h-32">
              <span className="borderComp borderComp1 left-12 text-start">
                {" "}
                React.js
              </span>
            </li>
            <li className="px-6 git2 min-h-32">
              <span className="borderComp borderComp2 right-12 text-start">
                {" "}
                Three.js
              </span>
            </li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
