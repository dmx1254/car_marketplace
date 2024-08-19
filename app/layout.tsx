import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Car marketplace",
  description: "Rent ot buy a breathtaking car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          merriweather.variable,
          "h-full flex flex-col items-center justify-center font-sans antialiased"
        )}
      >
        <div className="w-full sticky top-0 left-0 right-0 max-w-7xl py-4 px-2 bg-inherit z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
