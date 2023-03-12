import { useRef, useState, forwardRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { MeshBasicMaterial, PlaneGeometry } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { ScrollControls, useScroll, Html } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

import { useRouter } from "next/router";

import { name } from "package.json";

// import { create } from "zustand";

// const useTextStore = create((set) => ({
//   text: null,
//   setText: (newText) =>
//     set((state) => ({
//       text: newText,
//     })),
// }));

import { gsap } from "gsap";

function PictureSlide({ i }) {
  // const { text, setText } = useTextStore((state) => state);
  const ref = useRef();
  const data = useScroll();
  const map = useLoader(TextureLoader, `homepage/${i + 1}.png`);
  const vec = new THREE.Vector3();
  const [hover, setHover] = useState([1, 1, 1]);
  const rrandom = useRef(0);

  const adresses = [
    "http://46.101.250.41:4000",
    "http://46.101.250.41:3000/agap2",
  ];

  rrandom.current = rrandom.current = 0 ? Math.random() : rrandom.current;

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const { scale } = useSpring({
    scale: hover ? [1.1, 1.1, 1] : [1, 1, 1],
  });

  const { rotation } = useSpring({
    rotation: hover ? [0, -0.2, 0] : [0, 0, 0],
  });

  useFrame(({ gl, scene, camera }) => {
    ref.current.position.y = data.offset * 5 * 2 - i * 2;
  });

  return (
    <>
      <animated.mesh
        scale={scale}
        rotation={rotation}
        ref={ref}
        position={[rrandom.current + 1, -i * 2, 0]}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
          setHover(true);
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "auto";
          setHover(false);
        }}
        onClick={() => {
          // window.open(adresses[i]);
        }}
      >
        <planeGeometry args={[1 * 2, 0.55 * 2, 16, 16]} />
        <meshBasicMaterial map={map} />
      </animated.mesh>
    </>
  );
}

function Scene() {
  const clickk = () => {
    alert("sdgwsd");
    ref2.current = "sdfgxfg";
  };

  const zoom = useRef(null);

  return (
    <>
      {/* <group> */}
      <PictureSlide i={0} onClick={clickk} />
      <PictureSlide i={1} />
      {/* <PictureSlide i={2} /> */}
      {/* <PictureSlide i={3} /> */}
      {/* <PictureSlide i={4} /> */}
      {/* <PictureSlide i={5} /> */}
      {/* </group> */}
    </>
  );
}

export default function App() {
  function scrolll(e) {
    console.log(e);
  }

  const ref2 = useRef("rr");
  // const { text, setText } = useTextStore((state) => state);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
          position: [0, 0, 2],
        }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor("#000", 1);
        }}
      >
        <ScrollControls pages={1}>
          <ambientLight intensity={0.5} />
          <pointLight color="white" intensity={1} position={[10, 10, 10]} />
          <Scene ref2={ref2} />
        </ScrollControls>
      </Canvas>
      <div
        style={{
          backgroundColor: "black",
          position: "fixed",
          top: "40vh",
          left: "0vw",
          color: "red",
          zIndex: "10",
          fontSize: "40px",
        }}
      >
        dghdg
      </div>
    </div>
  );
}
