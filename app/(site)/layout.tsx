import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PreFooterSection from "@/components/PreFooterSection";
import { FadeIn } from "@/transitions";
import "../globals.css";
import { Metadata } from "next";
import { defaultMetadata } from "@/constants";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <FadeIn>{children}</FadeIn>
        </main>
        <footer>
          <PreFooterSection />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
