import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import * as THREE from "three";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Planete = (props, ref) => {
  

  var ColorYellow = "#ffcd00";

  var ColorBlue = "#0226aa";

  const refLoc = useRef(null);

  
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

  
  const rotationSpeed = useRef(0.005);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const controlDirection = (e) => {
    
  };

  
  useFrame(({ clock }) => {
    if (refFloppy1.current) {
      if (
        refFloppy1.current.position.x == 0.001
        
        
      ) {
        
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
  
  
  

  

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isSmall: "(max-width: 999px)",
          
          
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          
          ScrollTrigger.create({
            trigger: "#main7",
            
            start: "top top", 
            end: "bottom-=10% bottom",
            
            toggleActions: "play pause resume reset",
            
            scrub: 3,
            animation: scrollSunTl,
            
          });



          scrollSunTl.fromTo(
            "#canvas7",
            {
              x: "-100vw",
              y: "-30vh",
              width: "100vw",
              padding:"0 20vw 0 20vw"
            },
            {
              x: "2vw",
              y: "-30vh",
              width: "100vw",
              padding:"0 20vw 0 20vw"
            }
          );
        }
      );
      mm.add(
        
        {
          isSmall: "(min-width: 1000px)",
          
          
        },
        (c) => {
          var scrollSunTl = gsap.timeline();
          
          ScrollTrigger.create({
            trigger: "#main7",
            
            start: "top top", 
            end: "bottom-=10% bottom",
            
            toggleActions: "play pause resume reset",
            
            scrub: 3,
            animation: scrollSunTl,
            
          });
          scrollSunTl.fromTo(
            "#canvas7",
            {
              x: "-50vw",
            },
            {
              x: "5vw",
            }
          );
        }
      );
    });
    return () => ctx.revert();
  });


  return (
    <div
      id="main7"
      className="z-20"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas7"
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
    
      <a href="https://amaurypichat.fr/slide/index.html">
          <img
            style={{
              backgroundSize: "contain",
            }}
            src="./../../sunflower2.jpg"
          ></img>
        </a>

      </div>
    </div>
  );
};

export default CanvasPlanete;
