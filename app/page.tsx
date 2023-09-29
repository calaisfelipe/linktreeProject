"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import gradient from "@/public/img/gradient.svg";
import LinkTree from "@/components/LinkTree";
import Footer from "@/components/Footer";
import ParticleContainer from "@/components/fire";

const arrColorWeight = ["extralight", "light", "medium", "bold"];

export default function Home() {
  const [bgcolor, setBgcolor] = useState("extralight");

  useEffect(() => {
    let color = 0;

    setInterval(() => {
      if (color >= 3) {
        color = 0;
      }

      setBgcolor(arrColorWeight[color]);
      color++;
    }, 3000);
  }, []);

  return (
    <>
    
    <main className="fixed h-screen inset-0 bg-black flex flex-col items-center bg-opacity-30 z-10 pt-3">
      <div
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-75 z-10",
          {
            "bg-teal-300": bgcolor === "extralight",
            "bg-teal-400": bgcolor === "light",
            "bg-teal-500": bgcolor === "medium",
            "bg-teal-600": bgcolor === "bold",
          }
        )}
      />
      <Image
        height={1200}
        width={1200}
        alt="background"
        src={gradient}
        className="fixed inset-0 w-screen h-screen object-cover z-10"
      />
      <ParticleContainer />
      <div
        className={cn(
          "bg-teal-400 fixed inset-0 transition-opacity duration-[1500ms]",
          !bgcolor ? "opacity-100" : "opacity-0"
        )}
      />
      <LinkTree />
      <Footer />
    </main>
    </>
  );
}
