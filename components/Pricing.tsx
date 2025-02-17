import React, { useEffect, useState } from 'react'
import {motion} from "motion/react"

const Pricing = () => {
     const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        setIsVisible(true);
      }, []);

  return (
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
            className="glass-card p-8 rounded-2xl hover-lift border"
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
  )
}

export default Pricing