import { useRef } from "react";
import NavItems from "./NavItems";

export default function Menu() {
  const menu = useRef()

  function toggleMenu() {
    menu.current.classList.toggle('hidden')
    menu.current.classList.toggle('w-full')
    menu.current.classList.toggle('h-screen')
  }

  return (
    <>
      <ul
        ref={menu}
        className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

        <li className="md:hidden z-90 fixed top-4 right-6">
          <button
            className="text-right text-white text-4xl"
            onClick={toggleMenu}>
            {/*Multiplication symbol*/}
            &times;
          </button>
        </li>

        <NavItems />
      </ul>


      <div className="flex items-center md:hidden">
        <button
          className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
          onClick={toggleMenu}>
          {/*Hamburger icon (trigram for heaven)*/}
          &#9776;
        </button>
      </div>
    </>
  )
}
