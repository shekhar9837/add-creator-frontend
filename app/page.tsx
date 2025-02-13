'use client'
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import VideoCards from "@/components/VideoCards";
import {videos} from "@/constant/heropageVideos"


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

       

        {/* Features Section - Cyberpunk Gradient */}
        <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Features that empower your creativity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Design",
                  description: "Create professional designs in seconds with our advanced AI technology",
                },
                {
                  title: "Smart Templates",
                  description: "Access thousands of customizable templates for any project",
                },
                {
                  title: "Real-time Collaboration",
                  description: "Work together seamlessly with your team in real-time",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 rounded-2xl hover-lift"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Midnight Gradient */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Simple, transparent pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  features: ["Basic templates", "5 exports per month", "Community support"],
                },
                {
                  name: "Pro",
                  price: "$29/month",
                  features: ["All templates", "Unlimited exports", "Priority support"],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: ["Custom templates", "API access", "Dedicated support"],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 rounded-2xl hover-lift"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6 text-white">{plan.price}</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
