import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { SphereGeometry } from "three";
gsap.registerPlugin(ScrollTrigger);

const Planete = (props, ref) => {
  // const { nodes } = useLoader(GLTFLoader, "/low_poly_earth.gltf");

  var ColorYellow = "#ffcd00";

  var ColorBlue = "#0226aa";

  const refLoc = useRef(null);

  // const oldScrollY = useRef(0);
  const rotationSpeed = useRef(0.005);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const controlDirection = (e) => {
    rotationSpeed.current = 0.3;
  };

  // var cumulDelta = useRef(0);
  useFrame(({ clock }) => {
    if (rotationSpeed.current >= 0.005) {
      rotationSpeed.current -= 0.005;
    } else {
      rotationSpeed.current = 0.005;
    }
    if (refLoc.current) {
      refLoc.current.rotation.y += rotationSpeed.current;
    }
  });

  return (
    <group ref={refLoc}>
      <group ref={ref}>
        <mesh scale={[0.01, 0.01, 0.01]} geometry={nodes.mesh_0_1.geometry}>
          <meshStandardMaterial color={ColorYellow} opacity={1} />
        </mesh>
        <mesh scale={[0.01, 0.01, 0.01]}>
          <meshStandardMaterial color={ColorBlue} opacity={1} />
          <sphereGeometry args={[0.96, 32, 16]} />
        </mesh>
      </group>
    </group>
  );
};

const PC = (props, ref) => {
  const A = useLoader(FBXLoader, "/Comp_and_Floppy.fbx");

  var ColorYellow = "#ffcd00";

  var ColorBlue = "#0226aa";

  var ColorGreen = "rgb(78,201,176)";

  const refLoc = useRef(null);
  const refFloppy1 = useRef(null);
  const refFloppy2 = useRef(null);

  // const oldScrollY = useRef(0);
  const rotationSpeed = useRef(0.005);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const controlDirection = (e) => {
    // rotationSpeed.current = 0.03;
  };

  // var cumulDelta = useRef(0);
  useFrame(({ clock }) => {
    if (refFloppy1.current) {
      if (
        refFloppy1.current.position.x == 0.001
        // ||
        // ref.current.rotation.y != Math.PI / 4 - Math.PI / 2 - Math.PI / 16
      ) {
        // console.log("rr");
        if (rotationSpeed.current >= 0.005) {
          rotationSpeed.current -= 0.005;
        } else {
          rotationSpeed.current = 0.005;
        }
        if (refLoc.current) {
          refLoc.current.rotation.y += rotationSpeed.current;
        }
      }
    }
    // rotationSpeed.current = 0.005;
    // refLoc.current.rotation.y = 6;
    // refLoc.current.rotation.y= 0.005;
    // if (rotationSpeed.current >= 0.009) {
    //   rotationSpeed.current -= 0.009;
    // } else {
    //   rotationSpeed.current = 0.009;
    // }
    // if (refLoc.current) {
    // refLoc.current.rotation.y += rotationSpeed.current;
    // }
  });

  return (
    // <></>
    <group ref={refLoc}>
      <group
        ref={ref}
        scale={[0.0001, 0.0001, 0.0001]}
        rotation={[0, Math.PI / 4 - Math.PI / 2 - Math.PI / 16, 0]}
      >
        <mesh
          ref={refFloppy1}
          position={[1, 0, -0.2]}
          scale={[0.005, 0.005, 0.005]}
          geometry={A.children[1].geometry}
        >
          <meshStandardMaterial color={ColorGreen} opacity={1} />
        </mesh>
        <mesh
          ref={refFloppy2}
          position={[1.5, 0, 0.5]}
          scale={[0.005, 0.005, 0.005]}
          geometry={A.children[1].geometry}
        >
          <meshStandardMaterial color={ColorGreen} opacity={1} />
        </mesh>
        <mesh scale={[0.005, 0.005, 0.005]} geometry={A.children[2].geometry}>
          <meshStandardMaterial color={ColorYellow} opacity={1} />
        </mesh>

        <mesh scale={[0.01, 0.01, 0.01]}>
          <meshStandardMaterial color={ColorBlue} opacity={1} />
          <sphereGeometry args={[0.96, 32, 16]} />
        </mesh>
      </group>
    </group>
  );
};

const PlaneteBis = forwardRef(PC); //erreur si forward ref mis directement au début de <Planete />

const CanvasPlanete = () => {
  // let ColorYellow = window
  //   .getComputedStyle(document.documentElement)
  //   .getPropertyValue("--color-yellow");

  // console.log(ColorYellow);

  useEffect(() => {
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();
      // console.log("color", node.children[0].material.color);
      ScrollTrigger.create({
        trigger: "#main6",
        // endTrigger: ".screen6",
        start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "bottom-=10% bottom",
        // end: "+=200",
        toggleActions: "play pause resume reset",
        // markers: true,
        scrub: 3,
        animation: scrollSunTl,
        // pin: "#canvas",
      });

      scrollSunTl.fromTo(
        "#canvas6",
        {
          x: "-50vw",
        },
        {
          x: "5vw",
        }
        // { x: "0vw" }
      );
    });
    return () => ctx.revert();
  });
  // const ref = useCallback((node) => {
  //   if (node === null) {
  //     // DOM node referenced by ref has been unmounted
  //   } else {
  //     // console.log("EE", node.children[1].position);
  //     // DOM node referenced by ref has changed and exists

  //   }
  // }, []); // adjust deps

  return (
    <div
      id="main6"
      className="z-20"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas6"
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "absolute",
          left: "0vh",
          width: "40vw",
          zIndex: "50",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div
        className="relative h-full"> */}
        <a href="https://amaurypichat.fr/slide/" className="img_site">
          <img
            // className="img_site"
            style={{
              backgroundSize: "contain",
            }}
            src="./../../SiteExemple.jpg"
          ></img>
        </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CanvasPlanete;
