import * as React from "react";

// export function TimelineDroite(scrollSunTl, q) {
//   let ColorWhite = getComputedStyle(document.documentElement).getPropertyValue(
//     "--color-white"
//   );

//   scrollSunTl.fromTo(
//     q("#screen4PartieDroite"),
//     {
//       y: "25vh",
//     },
//     {
//       scrollTrigger: {
//         trigger: "#screen4",
//         start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
//         end: "top+=90% bottom",
//         toggleActions: "play none none reset",
//         // markers: true,
//         scrub: 1,
//       },

//       y: 0,
//     }
//   );

//   return scrollSunTl;
// }

export default function RightText() {
  return (
    // <div id="screen4PartieDroite">
    <div
      id="screen4PartieDroite"
      className="relative container-main h-screen-1\/2 rg:h-full rg:w-1/2 py-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2"
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span>A propos</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          {/* agap<span className="text-yellow">2</span> */}
        </p>
        <h3 className="text-3xl mb-8">
          Après avoir travaillé 7 années dans l'informatique, je me suis formé
          en React.js pendant 1 an.
        </h3>

        <div className="mce w-full xl:w-2/3">
          <p>
            Je suis prêt à présent à travailler avec React.js. Je souhaite
            travailler sur des projets ambitieux muni d'un design soigneux
          </p>
        </div>


      </div>

     
    </div>
    // </div>
  );
}
