import React, { useRef } from "react";

import logo from "../assets/Burger-King.png";

export const Nav = () => {
  const menuRef = useRef(null);
  const botonBarsRef = useRef(null);
  const botonCruzRef = useRef(null);

  const mostrarMenu = () => {
    menuRef.current.classList.toggle("hidden");
    botonBarsRef.current.classList.toggle("hidden");
    botonCruzRef.current.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="fixed z-50 w-dvw">
        <div className="flex items-center justify-between px-3 py-2 bg-orange-100 md:justify-start">
          <div className="w-12 h-12 ml-4">
            <img src={logo} alt="" />
          </div>
          <ul className="hidden list-none md:flex">
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-burgerking-300 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Pedi tu combo favorito
            </li>
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-orange-950 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Menu
            </li>
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-orange-950 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Cupones
            </li>
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-orange-950 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Restaurantes
            </li>
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-orange-950 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Novedades
            </li>
            <li className="px-2 py-1 mx-3 text-sm font-semibold cursor-pointer text-orange-950 hover:bg-burgerking-200 hover:rounded-3xl hover:text-burgerking-400">
              Delivery
            </li>
          </ul>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => mostrarMenu()}
          >
            <svg
              ref={botonBarsRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              ref={botonCruzRef}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <ul
          className="hidden pt-4 list-none bg-orange-100 border-t md:hidden h-lvh border-slate-300"
          ref={menuRef}
        >
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Pedi tu combo favorito
          </li>
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Menu
          </li>
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Cupones
          </li>
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Restaurantes
          </li>
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Novedades
          </li>
          <li className="px-2 py-1 mx-2 text-sm font-semibold text-orange-950 hover:bg-yellow-50 hover:rounded-3xl hover:text-orange-600">
            Delivery
          </li>
        </ul>
      </nav>
    </>
  );
};
