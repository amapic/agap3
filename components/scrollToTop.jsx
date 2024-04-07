import { useRef, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function ScrollToTopFab() {
  const [visible, setVisible] = useState(0);
  const contentRef = useRef(null);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolledFromTop2 = document
        .querySelector("#screen1")
        .getBoundingClientRect();

      setVisible(scrolledFromTop2.y < -window.innerHeight * 4 ? 1 : 0);
    });
  }, []);

  const style = {
    position: "fixed",
    padding: "1rem 2rem",
    fontSize: "20px",
    bottom: "40px",
    right: "10px",

    color: "#fff",
    textAlign: "center",
    opacity: visible,
    zIndex: 10000,
  };

  return (
    <button
      ref={contentRef}
      id="scrollbutton"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      style={style}
      className="br-2 bg-light-blue"
      role="button"
      title="go to top"
    >
      <span></span>
      <img className="w-4 h-4" src="/top_arrow.png" alt="go top" />
      {/* {"\u1f51d"} */}
    </button>
  );
}

export default ScrollToTopFab;
