import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PreFooterSection from "@/components/PreFooterSection";
import { FadeIn } from "@/transitions";
import "../globals.css";
import { Metadata } from "next";
import { defaultMetadata } from "@/constants";
import { FaWhatsapp } from "react-icons/fa6";
import Script from "next/script";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16880947333" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16880947333');
            `}
      </Script>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <FadeIn>{children}</FadeIn>
          <FadeIn delay={2}>
            <a
              href="//wa.me/+919901897130?text=Hi"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2.5 rounded-full shadow-md shadow-dark-300 cursor-pointer"
            >
              <FaWhatsapp className=" text-white text-3xl" />
            </a>
          </FadeIn>
        </main>
        <footer>
          <PreFooterSection />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
