import {
  ArrowBigDownDash,
  ArrowBigRight,
  CheckCheckIcon,
  CheckIcon,
} from "lucide-react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 py-12 px-6 border-t border-white/10">
        <div className="flex flex-col items-center justify-center">

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-12 mb-16 rounded-2xl  bg-gradient-to-l from-purple-500 to-purple-900">
          <div className="md:w-[70%] ">
            <p className="text-3xl font-semibold text-white">
              Explore Adora Enterprise plan
            </p>
            <p className="text-md font-normal text-white mt-2">
              Our experienced video designers, enhanced by AI tools, are
              dedicated to creating a wide range of short video ads customized
              for your brand’s requirements. Enjoy unlimited video ad requests
              at a fixed monthly rate.
            </p>
          </div>
          <div className="md:w-[30%] w-full mt-4 flex items-center justify-center">
            <motion.button
              whileHover="hover"

              className="bg-white w-full md:w-fit flex items-center justify-center gap-2  text-purple-700 px-8 py-3 rounded-lg"
            >
              let's talk
              <motion.span
                variants={{ hover: { x: 8 } }}
                transition={{ type: "ease", stiffness: 300 }}
              >
                <FaArrowRightLong className="-rotate-45" />
              </motion.span>
            </motion.button>
          </div>
        </div>

      <div className="container mx-auto md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 md:px-10 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Templates", "Updates"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Help Center", "Community", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 Adora. All rights reserved.</p>
        </div>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
