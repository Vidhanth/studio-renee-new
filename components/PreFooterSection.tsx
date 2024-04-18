"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Divider from "./Divider";
import { archivo } from "@/fonts";
import FadeAnimation from "./FadeAnimation";

export default function PreFooterSection() {
  const pathName = usePathname();

  if (pathName == "/contact-us") return <Divider />;

  return (
    <div className="text-white bg-pre-footer bg-cover">
      <div className="py-20 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col text-center md:text-start items-center md:items-start gap-y-3">
          <FadeAnimation animateOnVisibility={true}>
            <h1 className={`${archivo.className} text-5xl font-bold`}>
              Transform your space with us
            </h1>
          </FadeAnimation>
          <FadeAnimation animateOnVisibility={true} delay={0.2}>
            <p className="mb-2">
              Experience the perfect blend of design and functionality for your
              home or office.
            </p>
          </FadeAnimation>
          <FadeAnimation animateOnVisibility={true} delay={0.4}>
            <Link href="/contact-us">
              <button className="bg-primary text-white py-2 px-4 rounded-sm">
                Get In Touch
              </button>
            </Link>
          </FadeAnimation>
        </div>
      </div>
    </div>
  );
}
