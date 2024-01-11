import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function RightText6() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // alert("fghd")
      var scrollSunTl = gsap.timeline();
      // // console.log("color", node.children[0].material.color);
      ScrollTrigger.create({
        trigger: "#screen6PartieDroite",
        // endTrigger: ".screen6",
        start: "top+=30% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "bottom-=10% bottom",
        // end: "+=200",
        // toggleActions: "play pause resume reset",
        markers: true,
        // scrub: 3,
        animation: scrollSunTl,
        // pin: "#canvas",
      });

      scrollSunTl.to(
        "#tech61",
        {
          x: "20px",
          duration: "0.3",
          ease:"power2.in"
        },
        ">"
      );

      scrollSunTl.addLabel("un", 0);

      scrollSunTl.to(
        "#tech61",
        {
          x: "0px",
          duration: "0.3",
          ease:"power2.in"
        },
        ">"
      );

      scrollSunTl.to(
        "#tech62",
        {
          x: "20px",
          duration: "0.3",
        },
        "<"
      );

      scrollSunTl.to(
        "#tech62",
        {
          x: "0px",
          duration: "0.3",
          ease: "bounce.out",
        },
        ">"
      );
    });
    return () => ctx.revert();
  });
  return (
    // <div id="screen4PartieDroite">
    <div
      id="screen6PartieDroite"
      className="relative container-main w-full rg:w-1/2 py-10 rg:py-16 rg:pl-8  xl:pl-40 order-1 rg:order-2 text-center rg:text-start"
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12  xl:mb-12"
          data-cartapus="visible"
        >
          <span className="text-center rg:text-start">Réalisation un : Site web institutionnel entièrement responsive</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          {/* agap<span className="text-yellow">2</span> */}
        </p>

        <div className="mce w-full rg:w-2/3 text-center rg:text-start">
          <p>
            J'ai réalisé ce projet afin de valider mes compétences 
            React.js
            <br />
            Le site s'adapte à toutes les tailles d'écran et comprend des
            animations mettant en valeur son contenu
          </p>
        </div>
        <h3 className="text-3xl mt-8 text-center rg:text-start">
          Technologies utilisées:
          <ul>
            <li
              id="tech61"
              // <img classname="ttttick" src="../../tick.gif" />
              className="px-6"
            >
              <span
                className="px-6 git1 text-center rg:text-start"
                style={
                  {
                    // backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
                    // backgroundSize: "cover",
                  }
                }
              ></span>
              - React.js
            </li>
            <li id="tech62" className="px-6 git2 text-center rg:text-start">
              <span
                
                className="px-6"
                style={
                  {
                    // backgroundImage: `url("../../ezgif.com-speed (2).gif")`,
                    // backgroundSize: "cover",
                  }
                }
              ></span>
              - GSAP
            </li>
          </ul>
        </h3>

      </div>

      
    </div>
    // </div>
  );
}
