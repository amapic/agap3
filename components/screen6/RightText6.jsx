import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from 'next/image';
import svgIcon from '/public/rotation.svg'

export default function RightText6() {
  useEffect(() => {
	  
	  if (document){
	  // const svgatorObject = document.getElementById('animated-svg');
	  // const svgatorDocument = svgatorObject.contentDocument || svgatorObject.contentWindow.document;
	  // const svgatorElement = svgatorDocument.getElementById('eowg6fd2XzB1');
	  // svgatorElement?.svgatorPlayer?.play();
	  // svgatorElement?.svgatorPlayer?.ready(player => player.play());
	  // alert("fxdf")
	  }
	  
    let ctx = gsap.context(() => {
      var scrollSunTl = gsap.timeline();
      
      ScrollTrigger.create({
        trigger: "#main6",
        
        start: "top+=10% top", 
        end: "bottom-=10% bottom",
        
        toggleActions: "play pause resume reset",
        
        scrub: 3,
        animation: scrollSunTl,
        
      });
      
      
    });
    return () => ctx.revert();
  });
  return (
    
    <div
      id="screen6PartieDroite"
      className="relative container-main w-full h-screen-1/2 rg:h-full rg:w-1/2 py-6  rg:py-10 pr-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2 rg:text-start text-center"
      
    >
		 {/* <object id ="animated-svg" type="image/svg+xml" data="animated.svg"></object> */}
      <div className="js-home-gl-text home-numbers__wrap backface-hidden rg:text-start">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span className="">Site d'entreprise responsive</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          {/* agap<span className="text-yellow">2</span> */}
        </p>

        <div className="mce w-full">
          <p>
            J'ai réalisé ce projet afin de valider mes compétences de base
            concernant React.js
            <br />
            Il comprend des animations mettant en valeur son contenu
          </p>
        </div>
        <h3 className="text-3xl mt-8 ">
          Technologies utilisées:
          <ul className="md:ml-24">
            <li
              
              className="px-6 py-1 min-h-32"
            >
              <br />
              <span className="borderComp borderComp1 left-12 text-start">
                {/* {" "} */}
                React.js
              </span>
            </li>
            <li className="px-6 git2 min-h-32">
              <span className="borderComp borderComp2 right-12 text-start">
                {" "}
                GSAP
              </span>
            </li>
            <li className="px-6 git2 min-h-32">
              <span className="borderComp borderComp3 left-12 text-start">
                {" "}
                Next.js
              </span>
            </li>
          </ul>
        </h3>
      </div>
    </div>
    
  );
}
