// import {Fab,Box,Zoom}
import { useRef, useEffect, useState } from "react";
import {
  // Link,
  // Button,
  // Element,
  // Events,
  animateScroll as scroll,
  // scrollSpy,
} from "react-scroll";
// import Box from "@material-ui/core/Box"
function ScrollToTopFab() {
  const [visible, setVisible] = useState(0);
  const contentRef = useRef(null);
  // const handleScroll = (e) => {};

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolledFromTop2 = document
        .querySelector("#screen1")
        .getBoundingClientRect();
      setVisible(scrolledFromTop2.y < -window.innerHeight*4 ? 1 : 0);
    });
  }, []);

  const style = {
    position: "fixed",
    padding: "1rem 2rem",
    fontSize: "20px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#0C9",
    color: "#fff",
    textAlign: "center",
    opacity: visible,
    zIndex: 10000,
  };

  return (
    <button
      ref={contentRef}
      id="scrollbutton"
      // onClick={()=>{scroll.scrollToTop();alert("rr")}}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      style={style}
    >
      <span></span>
      <img className="w-4 h-4" src="/top_arrow.png" />
      {/* {"\u1f51d"} */}
    </button>
  );
}

export default ScrollToTopFab;
