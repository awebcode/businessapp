"use client";
import ThemeButton from "@/app/components/navbar/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function DashboardNavbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-slate-100 dark:bg-slate-800  fixed top-0 left-0 right-0 z-50 overflow-hidden z">
        <div className="justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5  md:block">
              {/* LOGO */}
              <Link className="dark:text-white" href="/">
                <h2 className="text-2xl  font-bold uppercase dark:text-white">
                  Animated Layout
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-2 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-4  dark:text-white text-sm  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-500 hover:text-white  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-500 hover:text-white  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/pin-3d"
                    onClick={() => setNavbar(!navbar)}
                  >
                    3d pin
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/radar"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Radar
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/grid-dot"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Grid Dot BG
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/hoverlight"
                    onClick={() => setNavbar(!navbar)}
                  >
                    HoverLight
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    className="dark:text-white"
                    href="/grid-color"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Grid color
                  </Link>
                </li>
                <li className="pb-4  dark:text-white text-sm  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <ThemeButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNavbar;
