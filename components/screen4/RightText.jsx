import * as React from "react";

export default function RightText() {
  return (
    <div
      id="screen4PartieDroite"
      className="relative container-main h-screen-1\/2 rg:h-full rg:w-1/2 py-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2"
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span>A propos</span>
        </h2>

        
        <h3 className="text-2xl mb-8">
          Après avoir travaillé 7 années dans l'informatique, je me suis formé
          avec React.js, Vue.js et la représentation scientifique pendant 2
          années.
        </h3>

        <div className="mce w-full xl:w-2/3">
          <p>
            Je suis prêt à présent à travailler. Je souhaite travailler sur des
            projets ambitieux muni d'un design soigneux
          </p>
        </div>
      </div>
    </div>
  );
}
