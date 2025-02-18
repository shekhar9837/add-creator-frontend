import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BiArrowFromLeft } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import VideoCards from "./VideoCards";
import { videos } from "@/constant/heropageVideos";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-32 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-6"
      >
        <p className="text-6xl inline-block font-bold leading-tight text-white ">
          <span className="block">Grow your Product</span>
          <span className="block">with AI-Powered Video Ads</span>
        </p>
        <p className="text-md text-gray-300 mb-8">
          Create and test marketing videos at scale to maximize your ROI.
        </p>
        <motion.button
          className="px-8 py-4 my-6 inline-flex gap-2 items-center bg-purple-700 text-white rounded-lg text-sm font-medium hover:bg-purple-800  transition-colors hover:shadow-lg"
          whileHover="hover"
        >
          Generate your first ad for free{" "}
          <motion.span
            variants={{ hover: { x: 4} }}
            transition={{ type: "ease", stiffness: 300 }}
          >
            <FaArrowTrendUp />
          </motion.span>
        </motion.button>


      </motion.div>
      {/* <div className="w-full max-w-7xl flex items-center justify-center"> */}
        
        <VideoCards videos={videos}/>
      {/* </div> */}
    </section>
  );
};

export default HeroPage;
