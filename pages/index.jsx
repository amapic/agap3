import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useEffect, Suspense, useState, lazy, useRef } from "react";
import pMinDelay from "p-min-delay";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
import store from "@components/store";
import { useSelector, Provider } from "react-redux";

import Loading from "@components/LoadingScreen";

const Screen4 = dynamic(() => import("@components/Screen4"), {});

const Screen6 = dynamic(() => import("@components/Screen6"), {});

const Screen7 = dynamic(() => import("@components/Screen7"), {});

const Screen8 = dynamic(() => import("@components/Screen8"), {});

const Screen9 = dynamic(() => import("@components/Screen9"), {});

const Screen10 = lazy(() => pMinDelay(import("@components/Screen10"), 1));

const Screen11 = lazy(() => pMinDelay(import("@components/Screen11"), 1));

const ScreenBIM = lazy(() => pMinDelay(import("@components/ScreenBIM"), 1));

const Screen1 = dynamic(() => import("@components/Screen1"), {});

// const ScrollToTopFab = React.lazy(() => import("@components/scrollToTop"));

const RightScrollMenu = React.lazy(() => import("@components/ScrollMenu"));

const Formulaire = React.lazy(() => import("@components/sendemail"));

function Home() {
  let cursorWidth = "40";

  useEffect(() => {
    let ctx = gsap.context(() => {
      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#screen4",
      //     start: "top top+=50%",
      //     end: "bottom bottom+=50%",
      //     toggleActions: "play none none reset",
      //   },
      // });
      // let tl6 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#screen6",
      //     start: "top top+=50%",
      //     end: "bottom bottom+=50%",
      //     toggleActions: "play none none reset",
      //   },
      // });
    });

    const setX = gsap.quickTo("#mousemove", "x", {
      duration: 0.5,
      ease: "power2",
    });

    const setY = gsap.quickTo("#mousemove", "y", {
      duration: 0.5,
      ease: "power2",
    });

    document.addEventListener("pointermove", (e) => {
      setX(e.clientX - cursorWidth / 2);
      setY(e.clientY - cursorWidth / 2);
    });

    return () => ctx.revert();
  }, [cursorWidth]);

  return (
    <>
      <Head>
        <title>Amaury PICHAT</title>
      </Head>

      <>
        <div
          id="mousemove"
          style={{
            backgroundColor: "transparent",
            width: cursorWidth + "px",
            height: cursorWidth + "px",
            position: "fixed",
            top: "0",
            left: "0",
            pointerEvents: "none",
            borderRadius: "999px",
            backgroundColor: "rgba(100,100,100,0.3)",
            zIndex: "1000",
          }}
        >
          <span
            id="texte_cursorr"
            style={{
              top: cursorWidth + "px",
              left: cursorWidth + "px",
              color: "white",
              overflowx: "visible",
              fontSize: "18px",
              position: "absolute",
              width: 3 * cursorWidth + "px",
              // filter: blur("3.5px")
            }}
          >
            Cliquez
          </span>
        </div>
        <Screen1 />

        <Suspense>
          <Screen4 />
        </Suspense>

        <Suspense>
          <Screen6 />
        </Suspense>

        <Suspense>
          <ScreenBIM />
        </Suspense>

        <Suspense>
          <Screen7 />
        </Suspense>

        <Suspense>
          <Screen8 />
        </Suspense>

        <Suspense>
          <Screen10 />
        </Suspense>

        <Suspense>
          <Screen11 />
        </Suspense>

        <Suspense>
          <Screen9 />
        </Suspense>

        {/* <RightScrollMenu /> */}
        <Formulaire />
      </>
    </>
  );
}

export function Home2() {
  const count = useSelector((state) => state.counter.value);
  const ref = useRef();

  useEffect(() => {
    // A remettre
    // var ll = document.getElementsByTagName("header");
    // for (var i = 0; i < ll.length; i++) {
    //   ll[i].style.visibility = "hidden";
    // }
  }, []);

  useEffect(() => {
    if (count > 0) {
      ref.current.style.visibility = "visible";
      ref.current.style.heigth = "";
      var headers = document.getElementsByTagName("header");

      for (var i = 0; i < headers.length; i++) {
        headers[i].style.visibility = "visible";
      }
    }
  }, [count]);

  return (
    <>
      {/* {count} */}
      {count == 0 && <Loading />}
      <div
        ref={ref}
        style={{
          visibility: "hidden",
          height: "100vh",
        }}
      >
        <Home />
      </div>
    </>
  );
}

export function SuspenseHome() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <Home2 />
        </Provider>
      </Suspense>
    </>
  );
}

export default dynamic(() => Promise.resolve(SuspenseHome), { ssr: false });
