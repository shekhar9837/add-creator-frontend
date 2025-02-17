import React from "react";

const ProductPreview = () => {
  return (
    <div className="flex items-center justify-center flex-col  bg-gradient-to-br from-gray-900 via-slate-900 to-neutral-900">
      <div className="text-white mb-16">
        <h1 className="text-4xl font-bold text-center">
          generate high permorming videos with one single click{" "}
        </h1>
        <p className=" text-center mt-4">
          Simply enter a product link or upload your own visuals and
          descriptions, and Creatify will do the rest.
          </p>
          <p className="text-center mt-4">
          Don't let limited marketing resources hold you back from success.{" "}
        </p>
      </div>

      <div>
        <iframe
        className="rounded-2xl"
          width="925"
          height="520"
          src="https://www.youtube.com/embed/4cCLgUtq_0E"
          title="NEW AI Video Ads and AI Ad Intelligence Generates HUGE Marketing ROI! Creatify 3.0 Launch!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductPreview;
