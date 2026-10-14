import type { Metadata } from "next";
import { Archivo_Black, Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const logo = Bodoni_Moda({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chinola",
});

export const metadata: Metadata = {
  title: "Chinola",
  description: "Moda femenina. Where glam meets grunge.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable} ${logo.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
