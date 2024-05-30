import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Html,
  ContactShadows,
} from "@react-three/drei";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PC = (ref) => {
  const A = useLoader(FBXLoader, "/Comp_and_Floppy.fbx");

  const ColorYellow = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-yellow");

  const ColorBlue = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-blue-fonce"
  );

  const ColorGreen = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-green");

  const refLoc = useRef(null);
  const refFloppy1 = useRef(null);
  const refFloppy2 = useRef(null);

  const rotationSpeed = useRef(0.005);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const controlDirection = (e) => {};

  useFrame(({ clock }) => {
    if (refFloppy1.current) {
      if (refFloppy1.current.position.x == 0.001) {
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

const PlaneteBis = forwardRef(PC);

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

            ScrollTrigger.create({
              trigger: "#main",

              start: "top top",
              end: "bottom-=10% bottom",

              toggleActions: "play pause resume reset",

              scrub: 3,
              animation: scrollSunTl,
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

            scrollSunTl.to(node.position, {
              x: 0.3,
              y: 0.0,
              z: 0.0,
            });

            scrollSunTl.to(node.scale, {
              x: 0.8,
              y: 0.8,
              z: 0.8,
            });

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

            ScrollTrigger.create({
              trigger: "#main",

              start: "top top",
              end: "bottom-=10% bottom",

              toggleActions: "play pause resume reset",

              scrub: 3,
              animation: scrollSunTl,
            });

            scrollSunTl.to(node.scale, {
              x: 1,
              y: 1,
              z: 1,
            });

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
  }, []);

  return (
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
          <ambientLight castshadow intensity={0.8} />
          {/* <OrbitControls /> */}
          <spotLight position={[2, 0, 0]} angle={90} intensity={2} castShadow />
          <spotLight
            position={[0, 0, 2.5]}
            angle={-1.5}
            intensity={2}
            castShadow
          />
          <spotLight
            position={[-2, 0, 0]}
            angle={90}
            intensity={2}
            castShadow
          />
          <pointLight castshadow position={[-10, -10, 0]} intensity={5} />
          {/* <axesHelper args={[2]}/> */}
          <PlaneteBis ref={ref} />
          <ContactShadows position={[0, -2, -0.16]} />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasPlanete;
