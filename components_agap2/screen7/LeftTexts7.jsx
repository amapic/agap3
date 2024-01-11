import * as React from "react";

export default function Ttext1() {
  return (
    <div
      id="texte_haut"
      style={{
        width: "300px",
        zIndex: "20",
        top: "15vh",
        left: "25vh",
        position: "absolute",
        size: "40px",
      }}
    >
      <div className="w-full h-full relative">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-50 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              7
            </div>
            <div
              className="ml-1 w-50 text2 text-white
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              années d'expérience
            </div>
          </div>
          <div
            className="w-100 text3 text-white
        opacity-0 backface-hidden
        "
          >
            {/* {" "} */}
            dans l'informatique
          </div>
        </div>
        <div
          id="cercle1"
          className="opacity-0"
          style={{
            bottom: "-5vh",
            left: "20%",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "50",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext2() {
  return (
    <div
      id="texte_droite"
      style={{
        width: "130px",
        zIndex: "20",
        top: "50vh",
        right: "2vw",
        position: "absolute",
        size: "40px",
        textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-100 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              1 an
            </div>
            {/* <div className="w-50 text2 blueLetter">M€</div> */}
          </div>
          <div
            className="w-100 text3 text-white 
        font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
        "
          >
            de formation
          </div>
        </div>
        <div
          id="cercle2"
          className="opacity-0"
          style={{
            top: "0vh",
            left: "-5vh",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "10",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext37() {
  function followlink() {
    window.open("https://amaurypichat.fr/siteWeb1/index.html", "_blank");
  }
  return (
    <div
      id="texte_bas_37"
      style={{
        // width: "300px",
        zIndex: "30",
        top: "80vh",
        left: "15vw",
        position: "absolute",
        size: "40px",
        // textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col justify-start">
          {/* <div className="flex flex-row"> */}
          <div
            className="w-50 text1 
        text-green font-bold text-2xl md:text-2-5xl xl:text-3xl opacity-1 backface-hidden border-2 p-2
        "
          >
            <ul>
              <li className="effet_perso" onClick={followlink}>
                <a href="https://amaurypichat.fr/siteWeb1/index.html">
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

//les timeline se passe les unes après les autres

