import React ,{useEffect} from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Ttext36():React.ReactElement {
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
            trigger: "#main6",
            start: "top top", 
            end: "bottom-=10% bottom",
            toggleActions: "play pause resume reset",
            scrub: 3,
            animation: scrollSunTl,
          });

          scrollSunTl.fromTo(
            "#texte_bas_36",
            {
              top: "35vh",
              margin:"0 30vw 0 30vw",
              width:"40vw",
              opacity:"0"
       
            },
            {
              top: "35vh",
              margin:"0 30vw 0 30vw",
              width:"40vw",
              opacity:"1"
           
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
            trigger: "#main6",
            
            start: "top top", 
            end: "bottom-=10% bottom",
            
            toggleActions: "play pause resume reset",
            
            scrub: 3,
            animation: scrollSunTl,
            
          });
          scrollSunTl.fromTo(
            "#texte_bas_36",
            {
              top: "80vh",
              left: "15vw",
              
            },
            {
              bottom: "80vh",
              left: "15vw",
              
            }
          );
        }
      );
    });
    return () => ctx.revert();
  });

  
  return (
    <div
      id="texte_bas_36"
      className="flex justify-center"
      style={{
        
        zIndex: "30",
        
        
        position: "absolute",
        fontSize: "40px",
        
      }}
    >
      <div className="w-full h-full">
        <div className="flex  flex-col justify-start">
          <div
            className="w-50 text1 relative overflow-hidden
        text-green font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-1 backface-hidden border-2 p-2
        "
          >
            <ul className="">
              <li className="effet_perso flex justify-center text-center" >
                <a  href="https://amaurypichat/siteWeb1">
                  Voir la réalisation 
                </a>
				
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
