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
        <footer className="bg-gradient-to-b from-black to-gray-900 py-12 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-white">Product</h4>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Templates", "Updates"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2">
                  {["About", "Careers", "Blog", "Legal"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Resources</h4>
                <ul className="space-y-2">
                  {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect</h4>
                <ul className="space-y-2">
                  {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>&copy; 2024 Creatify. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
