import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";

const ProductPreview = () => {
  return (
    <div className="px-6 md:px-6 flex items-center justify-center flex-col  bg-black">
      <div className="text-white mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-center capitalize">
          generate high permorming videos with one single click{" "}
        </h1>
        <p className=" text-sm md:text-md text-center mt-4">
          Simply enter a product link or upload your own visuals and
          descriptions, and Creatify will do the rest.
          </p>
          <p className="text-sm md:text-md  text-center mt-4">
          Don't let limited marketing resources hold you back from success.{" "}
        </p>
      </div>

      <div className="relative max-w-4xl">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    </div>
  );
};

export default ProductPreview;
