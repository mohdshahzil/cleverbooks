import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" dark ">
      <body className={`${inter.className} bg-white`}>
        {" "}
        <div className=" max-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="  relative z-20 bg-clip-text   bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            <main className="dark   mx-auto max-w-7xl">{children}</main>
          </p>
        </div>
        <section className="curved hidden md:block"></section>
        <section className="curved-mobile block md:hidden"></section>
      </body>
    </html>
  );
}
