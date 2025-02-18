'use client'
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import VideoCards from "@/components/VideoCards";
import {videos} from "@/constant/heropageVideos"
import CompatibilityComponent from "@/components/CompatibilityComponent";
import ProductPreview from "@/components/ProductPreview";
import { Features } from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* <Navbar/> */}
      <main>

        <HeroPage/>

<        ProductPreview
/>
       

        {/* Features Section - Cyberpunk Gradient */}
       <Features/>

        {/* Pricing Section - Midnight Gradient */}
        <Pricing/>


        {/* Footer - Dark Night Gradient */}
       <Footer/>
      </main>
    </div>
  );
}
