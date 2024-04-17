import { Archivo_Black, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});
