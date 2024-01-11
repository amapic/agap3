import * as React from "react";



export function Ttext38() {
  return (
    <div
      id="texte_bas_38"
      style={{
        // width: "300px",
        zIndex: "20",
        top: "80vh",
        left: "15vw",
        position: "absolute",
        size: "40px",
        // textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          {/* <div className="flex flex-row"> */}
          <div
            className="w-50 text1 text-green 
        font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-0 backface-hidden border-2 p-2
        "
          >
            <ul>
              <li className="effet_perso">
                <a href="https://amaurypichat.fr/siteWeb1/index.html">
                  Voir la réalisation
                </a>
              </li>
            </ul>
          </div>
          {/* <div
            className="w-50 text2 text-white
        font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
        "
          >
            sites
          </div>
          <div
            className="w-100 text3 text-white
        "
          >
            développés
          </div> */}
        </div>
        {/* <div
          id="cercle3"
          className="opacity-0"
          style={{
            top: "-5vh",
            left: "0vh",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "10",
          }}
        ></div> */}
      </div>
    </div>
  );
}


export function Timeline3(scrollSunTl, q) {
  scrollSunTl.fromTo(
    q("#texte_bas_38 .text1"),
    {
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: "#screen8",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      // y: 0,
    }
  );


  return scrollSunTl;
}
