import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
// import { OrbitControls } from "@react-three/drei";
// import { OrbitControls } from "three-stdlib";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import { Canvas, useFrame, useLoader } from "react-three-fiber";
const Cube = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

const Aa = () => {
  // const fbx = useLoader(GLTFLoader, "/low_poly_earth.glb");
  const gltf = useLoader(GLTFLoader, "/low_poly_earth.gltf");
  // const fbx = useLoader(FBXLoader, "/low_poly_earth.fbx");
  return (
    <primitive
      // object={fbx}
      // object={fbx.scene}
      object={gltf.scene}
    />
  );
};

const Planete = forwardRef((props, ref) => {
  const { nodes } = useLoader(GLTFLoader, "/low_poly_earth.gltf");
  // const { ref1, ref2 } = ref;
  const rref = useRef(null);
  
  useFrame(() => {
    if (rref.current) {
      rref.current.rotation.y += 0.01;
    }
  });

  return (
    // <group ref={rref}>
      <group ref={ref}>
        <mesh scale={[2, 2, 2]} geometry={nodes.mesh_0.geometry}>
          <meshStandardMaterial color="#ff1" opacity={0.5} />
        </mesh>
        <mesh scale={[2, 2, 2]} geometry={nodes.mesh_0_1.geometry}>
          <meshStandardMaterial color="#ff0" opacity={1} />
        </mesh>
      </group>
    </group>
  );
});

const Scene = () => {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);

  // const { nodes } = useLoader(GLTFLoader, "/low_poly_earth.gltf");

  const ref1 = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      // DOM node referenced by ref has changed and exists
      console.log("rr");
      let ctx = gsap.context(() => {
        var scrollSunTl = gsap.timeline();

        scrollSunTl.to(node.rotation, {
          scrollTrigger: {
            trigger: "#main",
            // endTrigger: ".screen6",
            start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
            end: "bottom-=10% bottom",
            // end: "+=200",
            toggleActions: "play none none reset",
            markers: true,
            scrub: 2,
            pin: "#canvas",
          },
          x: 0,
          y: 3 * Math.PI,
          z: 0,
        });
      });

      return () => ctx.revert();
    }
  }, []); // adjust deps

  const ref2 = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
      // console.log("aa", node);
    } else {
      // DOM node referenced by ref has changed and exists
      // let ctx = gsap.context(() => {
      //   var scrollSunTl2 = gsap.timeline();
      //   scrollSunTl2.to(node.rotation, {
      //     scrollTrigger: {
      //       trigger: "#main",
      //       // endTrigger: ".screen6",
      //       start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
      //       end: "bottom-=10% bottom",
      //       // end: "+=200",
      //       toggleActions: "play none none reset",
      //       markers: true,
      //       scrub: 1,
      //       pin: "#canvas",
      //     },
      //     x: 0,
      //     y: Math.PI,
      //     z: 0,
      //   });
      // });
      // return () => ctx.revert();
    }
  }, []); // adjust deps

  const ref = {
    ref1: ref1,
    ref2: ref2,
  };

  return (
    <div
      id="main"
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
          width: "100%",
        }}
      >
        <Canvas>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Planete ref={ref} />

          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
