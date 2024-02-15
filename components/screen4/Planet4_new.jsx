import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  const ref = useCallback((node) => {
    if (node === null) {
    } else {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(max-width: 999px)",
        },
        (c) => {
          let ctx = gsap.context(() => {
            var scrollSunTl = gsap.timeline();
            // console.log("color", node.children[0].material.color);
            ScrollTrigger.create({
              trigger: "#main",
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
              "#canvas",
              {
                x: "2vw",
                y: "-30vh",
                width: "100vw",
                padding: "0 10vw 0 10vw",
              },
              {
                x: "2vw",
                y: "-30vh",
                width: "100vw",
                padding: "0 10vw 0 10vw",
              }
            );

            scrollSunTl.to(
              node.position,
              {
                x: 0.3,
                y: 0.0,
                z: 0.0,
              }
              // "-=0.9"
            );

            scrollSunTl.to(
              node.scale,
              {
                x: 0.8,
                y: 0.8,
                z: 0.8,
              }
              // "-=0.9"
            );

            if (node.children[0]) {
              scrollSunTl.to(
                node.children[0].position,
                {
                  x: 0.001,
                  y: 0.001,
                  z: 0.001,
                },
                "20%"
              );
            }

            if (node.children[1]) {
              scrollSunTl.to(
                node.children[1].position,
                {
                  x: 0.001,
                  y: 0.001,
                  z: 0.001,
                },
                ">"
              );
            }
          });
        }
      );
      mm.add(
        {
          isSmall: "(min-width: 999px)",
        },
        (c) => {
          let ctx = gsap.context(() => {
            var scrollSunTl = gsap.timeline();
            // console.log("color", node.children[0].material.color);
            ScrollTrigger.create({
              trigger: "#main",
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

            scrollSunTl.to(
              node.scale,
              {
                x: 1,
                y: 1,
                z: 1,
              }
              // "-=0.9"
            );

            scrollSunTl.to(
              node.children[0].position,
              {
                x: 0.001,
                y: 0.001,
                z: 0.001,
              },
              "20%"
            );

            scrollSunTl.to(
              node.children[1].position,
              {
                x: 0.001,
                y: 0.001,
                z: 0.001,
              },
              ">"
            );
          });
        }
      );
      return () => ctx.revert();
    }
  }, []); // adjust deps

  return (
    // className="relative container-main w-full rg:w-1/2 py-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2"
    <div
      id="main"
      className="z-20"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas"
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
        <Canvas>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={45} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <PlaneteBis ref={ref} />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasPlanete;
