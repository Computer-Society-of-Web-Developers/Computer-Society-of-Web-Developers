
"use client"
import React from "react";
import Link from "next/link"
import NetworkSecure from "@/components/NetworkSecure";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function page() {

  return <NetworkSecure element={
    <div className=".body">
    <HeroSection/>
    <About/>
    <Contact/>
      {/* <div className="block text-center text-2xl font-bold">Welcome to CSWD</div>
      <ul className="mt-4">
        <li>
          <Link href={"/api"} className="block text-center text-blue-500">Check the API route</Link>
        </li>
      </ul> */}
    </div>
  } />

}
