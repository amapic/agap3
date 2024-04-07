import { useRef, useEffect, useState } from "react";
import {
  animateScroll as scroll,
} from "react-scroll";
function RightScrollMenu({ activeProject }) {
  const [visible, setVisible] = useState(1);
  const [hover, setHover] = useState(false);
  const [classs, setClasss] = useState("");
  const [projectNumberVisible, setprojectNumberVisible] = useState(0);
  const ref = useRef(null);
  // const prout = useRef(false);

  

  useEffect(() => {
    window.addEventListener("scroll", (hover) => {
      let scrolledFromTop2 = document
        .querySelector("#screen1")
        .getBoundingClientRect();
      
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight
      ) {
        setVisible(0);
      } else {
        
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (hover) => {
      let scrolledFromTop2 = document
        .querySelector("#screen1")
        .getBoundingClientRect();
      
      

      if (
        3 < -scrolledFromTop2.y / window.innerHeight &&
        -scrolledFromTop2.y / window.innerHeight < 7
      ) {
        setprojectNumberVisible(1);
      }

      if (
        4 > -scrolledFromTop2.y / window.innerHeight 
      ) {
        setprojectNumberVisible(0);
      }

      if (
        10 > -scrolledFromTop2.y / window.innerHeight &&
        -scrolledFromTop2.y / window.innerHeight > 6
      ) {
        setprojectNumberVisible(2);
      }

      if (
        9 < -scrolledFromTop2.y / window.innerHeight &&
        -scrolledFromTop2.y / window.innerHeight < 12
      ) {
        setprojectNumberVisible(3);
      }

      if (
        12 < -scrolledFromTop2.y / window.innerHeight 
      ) {
        setprojectNumberVisible(4);
      }
    });
  }, []);

  return (
    <div
      ref={ref}
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
        "w-auto h-1/3 b-2 flex fixed right-3 top-1/3 flex-col gap-3 x-0 " + classs
      }
    >
      <div
        className={
          "h-full p-2  cursor-pointer " +
          (projectNumberVisible == 1 ? "bg-light-blue" : "bg-dark-blue")
        }
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 4,
            left: 0,
            behavior: "smooth",
          });
        }}
        style={{
          borderTopLeftRadius:"10px",
        }}
      >
        <div
          className="text-white text-center "
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            alignItems: "center",
            height: "60px",
            lineHeight: "20px",
            textAlign: "center",
            
          }}
        >
          {/* {hover ? "Projet 1" : "dh"} */}
          Projet 1
        </div>
      </div>
      <div
        className={
            "h-full p-2  cursor-pointer " +
            (projectNumberVisible == 2 ? "bg-light-blue" : "bg-dark-blue")
          }
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 7,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <div
          className="text-white text-center"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            alignItems: "center",
            height: "60px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          Projet 2
        </div>
      </div>
      <div
        className={
            "h-full p-2 cursor-pointer " +
            (projectNumberVisible == 3 ? "bg-light-blue" : "bg-dark-blue")
          }
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 10,
            left: 0,
            behavior: "smooth",
          });
        }}
        style={{
          borderBottomLeftRadius:"10px",
        }}
      >
        <div
          className="text-white text-center"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            alignItems: "center",
            height: "60px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          Projet 3
        </div>
      </div>
    </div>
  );
}

export default RightScrollMenu;
