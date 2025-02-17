import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import CompatibilityComponent from "./CompatibilityComponent";

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuresList = [
    {
      title: "AI Video Ads",
      desc: "Directly transform any product URL into a captivating video commercial. With a few clicks, customize and render your ad, ready to turn viewers into buyers.",
      image: "/images/ai-video-ads.png", // Replace with actual image path
    },
    {
      title: "AI Avatar",
      desc: "Elevate your content with over 500+ realistic AI avatars, ensuring your brand's message is delivered with a personal touch that resonates.",
      image: "/images/ai-avatar.png",
    },
  ];

  const features1 = [
    {
      title: "Text-to-Speech",
      desc: "Give your ads a voice with 140+ natural-sounding AI voices, or craft your narrative from scratch with our script writer.",
    },
    {
      title: "AI Script Writer",
      desc: "From social posts to tutorials, generate compelling scripts effortlessly, turning your creative idea into a powerful narrative.",
    },
    {
      title: "Custom Avatar",
      desc: "Transform yourself into a custom AI avatar with 'Bring Your Own Avatar.' Maintain a consistent presence, save time, and streamline efforts to drive results.",
    },
    {
      title: "Batch Mode",
      desc: "Generate multiple ad variations by combining product URLs, scripts, templates, and AI avatars. Optimize performance and maximize ROI effortlessly.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900">
      <div className="container mx-auto px-12 w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Features that empower your creativity
        </h2>
        <div className="grid grid-rows-2   w-full mx-auto text-white">
          <div className="w-full  grid grid-cols-2  gap-2">
            {featuresList.map((item, key) => (
              <div className=" h-[14rem] p-8 relative rounded-2xl bg-neutral-950">
                {/* {item.image && (
                    <div className="mb-4"> */}
                {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg absolute"
                    /> */}
                {/* </div>
                )} */}
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full  grid grid-cols-4 gap-2">
            {features1.map((item, key) => (
              <div className="rounded-2xl h-full p-8  bg-neutral-950 ">
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <CompatibilityComponent/>

      </div>

    </section>
  );
};
