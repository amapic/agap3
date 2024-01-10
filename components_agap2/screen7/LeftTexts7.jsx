import * as React from "react";

export default function Ttext1() {
  return (
    <div
      id="texte_haut"
      style={{
        width: "300px",
        zIndex: "20",
        top: "15vh",
        left: "25vh",
        position: "absolute",
        size: "40px",
      }}
    >
      <div className="w-full h-full relative">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-50 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              7
            </div>
            <div
              className="ml-1 w-50 text2 text-white
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              années d'expérience
            </div>
          </div>
          <div
            className="w-100 text3 text-white
        opacity-0 backface-hidden
        "
          >
            {/* {" "} */}
            dans l'informatique
          </div>
        </div>
        <div
          id="cercle1"
          className="opacity-0"
          style={{
            bottom: "-5vh",
            left: "20%",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "50",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext2() {
  return (
    <div
      id="texte_droite"
      style={{
        width: "130px",
        zIndex: "20",
        top: "50vh",
        right: "2vw",
        position: "absolute",
        size: "40px",
        textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-100 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              1 an
            </div>
            {/* <div className="w-50 text2 blueLetter">M€</div> */}
          </div>
          <div
            className="w-100 text3 text-white 
        font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
        "
          >
            de formation
          </div>
        </div>
        <div
          id="cercle2"
          className="opacity-0"
          style={{
            top: "0vh",
            left: "-5vh",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "10",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext37() {
  function followlink() {
    window.open("https://amaurypichat.fr/siteWeb1/index.html", "_blank");
  }
  return (
    <div
      id="texte_bas_37"
      style={{
        // width: "300px",
        zIndex: "30",
        top: "80vh",
        left: "15vw",
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
              <li className="effet_perso" onClick={followlink}>
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

//les timeline se passe les unes après les autres
export function Timeline1(scrollSunTl, q) {
  let ColorWhite = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-white"
  );

  // console.log("white", ColorWhite);

  scrollSunTl.fromTo(
    q("#texte_haut .text1"),
    {
      y: 20,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        // fontColor: "red",
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_haut .text2"),
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        color: ColorWhite,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_haut .text3"),
    {
      y: 70,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        color: ColorWhite,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.to(
    q("#cercle1"),

    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      width: "24px",
      height: "24px",
      x: "-12px",
      y: "-12px",
    }
  );

  return scrollSunTl;
}

export function Timeline2(scrollSunTl, q) {
  scrollSunTl.fromTo(
    q("#texte_droite .text1"),
    {
      y: 20,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_droite .text2"),
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_droite .text3"),
    {
      y: 70,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: -35,
    }
  );

  scrollSunTl.to(
    q("#cercle2"),

    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      // x: "-24px",
      width: "24px",
      height: "24px",
      x: "-12px",
      y: "-12px",
    }
  );

  return scrollSunTl;
}

export function Timeline3(scrollSunTl, q) {
  // scrollSunTl.fromTo(
  //   q("#texte_bas_37 .text1"),
  //   {
  //     opacity: 0
  //   },
  //   {
  //     scrollTrigger: {
  //       trigger: "#screen7",
  //       // endTrigger: ".screen6",
  //       start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
  //       end: "top+=90% bottom",
  //       // end: "+=200",
  //       toggleActions: "play none none reset",
  //       // markers: true,
  //       scrub: 1,
  //     },

  //     opacity: 1,
  //     // y: 0,
  //   }
  // );

  // scrollSunTl.fromTo(
  //   q("#texte_bas37 .text2"),
  //   {
  //     y: 40,
  //   },
  //   {
  //     scrollTrigger: {
  //       trigger: "#screen4",
  //       // endTrigger: ".screen6",
  //       start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
  //       end: "top+=91% bottom",
  //       // end: "+=200",
  //       toggleActions: "play none none reset",
  //       // markers: true,
  //       scrub: 1,
  //     },

  //     opacity: 1,
  //     y: 0,
  //   }
  // );

  // scrollSunTl.fromTo(
  //   q("#texte_bas37 .text3"),
  //   {
  //     y: 70,
  //   },
  //   {
  //     scrollTrigger: {
  //       trigger: "#screen4",
  //       // endTrigger: ".screen6",
  //       start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
  //       end: "top+=91% bottom",
  //       // end: "+=200",
  //       toggleActions: "play none none reset",
  //       // markers: true,
  //       scrub: 1,
  //     },

  //     opacity: 1,
  //     y: 0,
  //   }
  // );

  // scrollSunTl.to(
  //   q("#cercle3"),

  //   {
  //     scrollTrigger: {
  //       trigger: "#screen4",
  //       // endTrigger: ".screen6",
  //       start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
  //       end: "top+=91% bottom",
  //       // end: "+=200",
  //       toggleActions: "play none none reset",
  //       // markers: true,
  //       scrub: 1,
  //     },

  //     opacity: 1,
  //     width: "24px",
  //     height: "24px",
  //     x: "-12px",
  //     y: "-12px",
  //   }
  // );

  return scrollSunTl;
}
