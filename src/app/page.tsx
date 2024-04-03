
"use client"
import React from "react";
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
    </div>
  } />

}
