"use client";

import Link from "next/link";
import Logo from "./branding/logo";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FadeIn } from "@/transitions";
import { FadeInLeft } from "@/transitions/FadeInLeft";

const Navbar = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  function closeMenu() {
    setIsShowingMenu(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    }

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", closeMenu);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  const navItemsSection = (
    <div className="flex flex-col gap-y-3 md:flex-row justify-center items-center text-center md:text-start">
      <FadeInLeft delay={0.3}>
        <Link href="/about-us" passHref onClick={closeMenu}>
          <div className="text-gray-800 text-sm font-medium hover:text-gray-600 px-3 py-2 rounded-md">
            About Us
          </div>
        </Link>
      </FadeInLeft>
      <FadeInLeft delay={0.6}>
        <Link href="/portfolio" passHref onClick={closeMenu}>
          <div className="text-gray-800 text-sm font-medium hover:text-gray-600 px-3 py-2 rounded-md">
            Portfolio
          </div>
        </Link>
      </FadeInLeft>
      <FadeInLeft delay={0.9}>
        <Link href="/contact-us" passHref onClick={closeMenu}>
          <div className="text-gray-800 text-sm font-medium hover:text-gray-600 px-3 py-2 rounded-md">
            Contact Us
          </div>
        </Link>
      </FadeInLeft>
    </div>
  );

  return (
    <nav>
      <div className="bg-white shadow-md z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between md:justify-start gap-x-5 items-center h-16">
            <Link href="/" passHref>
              <FadeInLeft delay={0.2}>
                <Logo />
              </FadeInLeft>
            </Link>
            <div className="hidden md:block">{navItemsSection}</div>
            <HiMenuAlt3
              className="block md:hidden text-2xl cursor-pointer"
              onClick={() => {
                setIsShowingMenu(!isShowingMenu);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          isShowingMenu ? "h-fit py-3" : "h-0 py-0"
        } absolute bg-tertiary top-16 flex flex-col w-full transition-all shadow-md`}
      >
        {isShowingMenu && <FadeIn className="z-10">{navItemsSection}</FadeIn>}
      </div>
    </nav>
  );
};

export default Navbar;
