import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ttimeline2(width, height, initFontSizeZoom) {
  // scrollSunTl,
  // hauteurDefilementStep1,
  // hauteurDefilementStep2

  let tailleMaxZoom = (width * 2) / 12;
  let topZoom = 40; //vh
  var scrollSunTl = gsap.timeline();

  ScrollTrigger.create({
    animation: scrollSunTl,
    start: "center center", // which means "when the top of the trigger hits 40px above the bottom of the viewport
    end: "+=900 center",
    toggleActions: "play none none reset",
    scrub: 1,
    pin: "#container_move",
    snap: {
      snapTo: "labelsDirectional", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "none", // the ease of the snap animation ("power3" by default)
    },
  });

  scrollSunTl.addLabel("un", 0);

  scrollSunTl.to(
    //commence à un, termine à 3
    "#entete",
    {
      top: "0vh",
      duration: "0.1",
    },
    "un"
  );

  scrollSunTl.to(
    "#zoombgCircleDiv",
    {
      top: topZoom + "vh",
      duration: "0.5",
    },
    "un"
  );

  scrollSunTl.to(
    "#backgroundCircle",
    {
      top: topZoom + "vh",
      duration: "0.5",
    },
    "un"
  );

  scrollSunTl.to(
    "#zoom",
    {
      fontSize: "150px",
      color: "#ffeea9",
      duration: "1", //?
    },
    "un"
  );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "#aab6e2",
      duration: "1", //?
    },
    "un"
  );

  scrollSunTl.fromTo(
    "#backgroundCircle",
    {
      transform: "scale(1)",
      transformOrigin: "center",
    },
    {
      transform: "scale(600)",
      transformOrigin: "center",
      duration: "1",
    },
    "un"
  );

  scrollSunTl.addLabel("deux", 2);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      transform: "scale(900)",
      transformOrigin: "center",
      duration: "1",
    },
    "deux"
  );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: "1", //?
    },
    "un"
  );

  scrollSunTl.addLabel("trois", 3);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      // top: topZoom + "vh",
      transform: "scale(2000)",
      transformOrigin: "center",
      // opacity: "1",
      duration: "2",
    },
    "trois"
  );

  scrollSunTl.to(
    "#zoom",
    {
      fontSize: initFontSizeZoom,
      color: "#ffda40",
      duration: "2",
    },
    ">"
  );

  scrollSunTl.addLabel("quatre", 4);

  // scrollSunTl.to(
  //   //commence à un, termine à 3
  //   "#backgroundCircle",
  //   {
  //     // top: topZoom + "vh",
  //     transform: "scale(5)",
  //     transformOrigin: "center",
  //     opacity: "1",
  //     duration: "1",
  //   },
  //   "<"
  // );

  //cercle qui a grossi, lettre aussi

  // scrollSunTl.to(
  //   //commence à un, termine à 3
  //   "#backgroundCircleDiv",
  //   {
  //     top: topZoom + "vh",
  //     duration: "0.1",
  //   }
  // );

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     // top: 2 * topZoom + "vh",
  //     height: tailleMaxZoom + "px",
  //     fontSize: tailleMaxZoom + "px",
  //     lineHeight: tailleMaxZoom + "px",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // scrollSunTl.to(
  //   "#backgroundCircle",
  //   {
  //     transform: "scale(0.34)", //=> prochaine étape 0.61
  //     transformOrigin: "center",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // scrollSunTl.addLabel("deux");

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     top: "40%",
  //     duration: 2,
  //   },
  //   "<"
  // );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: 2,
    },
    "<"
  );

  scrollSunTl.addLabel("phase2");
  // scrollSunTl.to(
  //   "h2#aero",
  //   {
  //     top: "40%",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // scrollSunTl.to(
  //   "#backgroundCircle",
  //   {
  //     // width: "100vw",
  //     // height: "100vh",
  //     transform: "scale(50)",
  //     transformOrigin: "center",
  //     duration: 1,
  //   }
  //   // "<"
  // );

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     height: "15vh",
  //     fontSize: "15vh",
  //     lineHeight: "15vh",
  //     duration: 1,
  //   },
  //   "<"
  // );

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     height: "10vh",
  //     fontSize: "10vh",
  //     lineHeight: "10vh",
  //     duration: 1,
  //   },
  //   ">"
  // );

  scrollSunTl.addLabel("phase3");

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     top: "10%",
  //     duration: 3,
  //   },
  //   ">"
  // );

  scrollSunTl.to(
    "#biggerWhiteCircle",
    {
      top: "13vw",
      width: 100 / 4 + "vw",
      height: 100 / 4 + "vw",
      opacity: "1",
      duration: "3",
    },
    "<"
  );

  // scrollSunTl.to(
  //   "#biggerWhiteCircleDiv",
  //   {
  //     top: 0 + "vh",
  //     duration: "3",
  //   },
  //   "<"
  // );

  scrollSunTl.to(
    "#smallerWhiteCircle",
    {
      top: "14vw",
      width: 100 / 4 - 2 + "vw",
      height: 100 / 4 - 2 + "vw",
      opacity: "1",
      duration: "3",
    },
    "<"
  );

  // scrollSunTl.to(
  //   "#smallerWhiteCircleDiv",
  //   {
  //     top: 2 + "vh",
  //     duration: "3",
  //   },
  //   "<"
  // );

  scrollSunTl.to(
    "h2#aero",
    {
      x: "-10px",
      opacity: "1",
    },
    ">"
  );

  scrollSunTl.to(
    "#faire",
    {
      x: "-10px",
      opacity: "1",
    },
    ">"
  );

  scrollSunTl.to(
    "#vingt",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#postes",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#disponibles",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#secteurs",

    {
      x: "-40px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.addLabel("fin");

  return scrollSunTl;
}
