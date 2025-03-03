import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Logo from "./branding/logo";

export default function Footer() {
  const year = new Date().getFullYear(); // Dynamic year for copyright
  return (
    <footer className="max-w-6xl mx-auto py-8 px-6">
      <div className="md:flex md:justify-between md:items-center">
        <div className="mb-6 lg:mb-0">
          <Link href="/" passHref>
            <Logo />
          </Link>
          <div className="my-4 flex flex-col gap-y-0">
            <p className="font-bold">Contact:</p>
            <a href="mailto:info@studiorenee.co.in">
              info@studiorenee.co.in
            </a>
            <a href="tel:9901897130"> +91 9901897130</a>
          </div>
          <div className="mb-4">
            <p className="font-bold">Address:</p>
            <p>
              Studio Renée <br />
              No. 89/2, 2nd floor <br />
              East Anjaneya Temple Road, Basavanagudi <br />
              Bengaluru 560004
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="//instagram.com/studio_renee_/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="//facebook.com/studiorenee2022/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="//linkedin.com/company/studio-renée/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/">
            <p className="font-semibold">Home</p>
          </Link>
          <Link href="/portfolio">
            <p className="font-semibold">Portfolio</p>
          </Link>
          <Link href="/about-us">
            <p className="font-semibold">About Us</p>
          </Link>
          <Link href="/contact-us">
            <p className="font-semibold">Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="border-t border-tertiary items-start md:items-center md:space-x-3 md:space-y-0 space-y-2 text-center py-4 mt-4 flex flex-col md:flex-row md:justify-between">
        <p className="text-gray-600 text-sm">
          © {year} Studio Reneé. All rights reserved.
        </p>
        <div className="text-gray-600 items-start md:items-center md:space-x-3 md:space-y-0 space-y-2 text-sm flex flex-col md:flex-row">
          <Link href="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
