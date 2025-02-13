import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-6"
      >
        <p className="text-6xl inline-block font-bold leading-tight  text-white">
          <span className="block">Grow your Product</span>
          <span className="block">with AI-Powered Video Ads</span>
        </p>
        <p className="text-md text-gray-300 mb-8">
          Create and test marketing videos at scale to maximize your ROI.
        </p>
        <button className="px-8 py-4 my-6 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-all hover:shadow-lg">
          Generate your first add for free
        </button>
      </motion.div>
    </section>
  );
};

export default HeroPage;
