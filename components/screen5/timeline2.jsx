import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline(width, height, initFontSizeZoom) {
  let tailleMaxZoom = (width * 2) / 12;
  let topZoom = 40; 
  let topBigWhiteCircle = topZoom + 1;
  let topSmallWhiteCircle = topZoom + 2;
  var scrollSunTl = gsap.timeline();

  var h = window.innerHeight;
  var w = window.innerWidth;

  ScrollTrigger.create({
    animation: scrollSunTl,
    trigger: "#container_move5",
    start: "center center", 
    end: "+=900 center",
    toggleActions: "play none none reset",
    scrub: 1,
    pin: "#container_move5",
    snap: {
      snapTo: "labelsDirectional", 
      duration: { min: 0.2, max: 0.5 }, 
      delay: 0, 
      ease: "none", 
    },
  });

  scrollSunTl.addLabel("un", 0);

  
  
  
  
  
  
  
  
  

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
    "#zoom,.js-zoom-o",
    {
      fontSize: "230px",
      
      
      duration: "1",
    },
    "un"
  );

  scrollSunTl.to(
    "#zoom",
    {
      
      color: "#ffe26e",
      
      duration: "1",
    },
    "un"
  );

  
  
  
  
  
  
  
  
  
  

  scrollSunTl.to(
    "h2#aero",
    {
      color: "#aab6e2",
      duration: "1", 
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
      transform: "scale(300)",
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
    "#zoom,.js-zoom-o",
    {
      fontSize: "300px",
      
      
      duration: "1",
    },
    "deux"
  );

  scrollSunTl.to(
    "#zoom",
    {
      
      color: "white",
      
      
    },
    "deux"
  );

  
  
  
  
  
  
  
  
  
  

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: "1", 
    },
    "un"
  );

  scrollSunTl.addLabel("trois", 3);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      
      transform: "scale(1200)",
      transformOrigin: "center",
      
      duration: "1",
    },
    "trois"
  );

  scrollSunTl.addLabel("quatre", 4);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      
      transform: "scale(2500)",
      transformOrigin: "center",
      
      duration: "1",
    },
    "quatre"
  );

  scrollSunTl.addLabel("cinq", 5);

  scrollSunTl.to(
    "#zoom,.js-zoom-o",
    {
      fontSize: initFontSizeZoom,
      color: "#ffda40",
      duration: "1",
    },
    "cinq"
  );

  
  
  
  
  
  
  
  
  

  scrollSunTl.addLabel("six", 4);

  
  
  
  
  
  
  
  
  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  

  
  
  
  
  
  
  
  

  scrollSunTl.to(
    "#plane",
    {
      y: "-10vh",
      duration: 1,
      opacity: "1",
    },
    "six"
  );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: 2,
    },
    "six"
  );

  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  

  scrollSunTl.to(
    "#biggerWhiteCircle2",
    {
      
      opacity: "1",
      duration: "3",
      transform: "scale(0.7)",
      transformOrigin: "center",
    },
    "six"
  );

  scrollSunTl.to(
    "#smallerWhiteCircle2",
    {
      
      opacity: "1",
      duration: "3",
      transform: "scale(0.7)",
      transformOrigin: "center",
    },
    "six"
  );

  
  
  
  
  
  
  
  

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
