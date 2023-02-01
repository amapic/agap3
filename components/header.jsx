import { useEffect } from "react";

export default function Header() {
  return (
    <header className="flex flex-row header text-white justify-between">
        <div className="flex items-center h-full ">
          <div
            className="bg-white flex items-center h-full justify-center rg:px-8 mr-2 sm:mr-5"
            style={{
              width: "170px",
            }}
          >
            <img
              src="./logo.svg"
              style={{
                width: "129px",
                height: "40px",
              }}
            />
          </div>
          <div>espace</div>
          <div>truc</div>
        </div>

        <nav className="flex justify-between items-center bg-blue px-4"
        style={{
          width:"40%"
        }}
        >
          <ul className="flex justify-start items-center">
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                agap2
              </a>
            </li>
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Métiers
              </a>
            </li>
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Esprit
              </a>
            </li>
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Carrière
              </a>
            </li>
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Blog
              </a>
            </li>
            <li className="header_menu_el text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Presse
              </a>
            </li>
            <li className="header_menu_el  text-white font-semibold pt-2 pb-3 mx-1 text-lg lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Contact
              </a>
            </li>
            <li className="border rounded-l-full text-white rounded-r-full header_menu_el font-semibold mx-1 text-lg  lg:text-lg rg:text-base">
              <a
                href="https://www.agap2.fr/agap2/"
                className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
              >
                Offres d'emplois
              </a>
            </li>
          </ul>
          <ul className="text-white">
            <li>FR</li>
            <li>EN</li>
          </ul>
        </nav>
    </header>
  );
}
