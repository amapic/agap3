import { useRef, useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import gsap from "gsap";
function RightScrollMenu() {
  const [visible, setVisible] = useState(1);
  const [hover, setHover] = useState(false);
  const [classs, setClasss] = useState("");
  const ref = useRef(null);
  const prout = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", (hover) => {
      let scrolledFromTop2 = document
        .querySelector("#screen1")
        .getBoundingClientRect();
      // console.log(window.innerHeight, scrolledFromTop2.y);
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight
      ) {
        setVisible(0);
      } else {
        setClasss(scrolledFromTop2.y < -2300 ? "opa-0" : "opa-1");
      }
    });

    // let ctx = gsap.context(() => {
    //   var scrollSunTl = gsap.timeline();
    //   // scrollSunTl.to("#rightscroll", {
    //   //   x: "-40vh",
    //   //   duration: 10,
    //   // });
    gsap.to("#rightscroll", {
    //   ease: "none",
    //   left: "40vh",
    //   // y: "0px",
    //   duration: 1,
    //   // delay: i * "0.02",
    // });
    // });
    // return () => ctx.revert();

    // function percentToPixel(_elem, _perc){
    //   return (_elem.parent().outerWidth()/100)* parseFloat(_perc);
    // }
  }, []);

  return (
    <div
      //ref={ref}
      ref={(el) => (ref.current = el)}
      id="rightscroll"
      style={{
        zIndex: 10000,
        right: "0px",
        top: "33%",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={
        "w-1/6 h-1/3 flex fixed right-3 top-1/3 flex-col gap-3 x-0 " + classs
      }
    >
      <div
        className="h-full px-2 pt-2 rounded-lg bg-dark-blue cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 4,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-white">
          {/* {hover ? "Voir le projet 1" : "dh"} */}
          Projet 1
        </span>
        <img src="../../sunflower.jpg" />
      </div>
      <div
        className="h-full px-2 pt-2 rounded-lg bg-dark-blue cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 7,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-white">Voir le projet 2</span>
        <img src="../../sunflower.jpg" />
      </div>
      <div
        className="h-full p-2 rounded-lg bg-light-blue cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 10,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-white">Voir le projet 3</span>
        <img src="../../sunflower.jpg" />
      </div>
    </div>
  );
}

export default RightScrollMenu;
