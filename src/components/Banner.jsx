import React from "react";
import appstore from "../assets/App Store.svg";
import playstore from "../assets/Play Store.svg";
import phones from "../assets/phones.svg";
import pattern from "../assets/pattern.png";
const Banner = () => {
  return (
    <div className="relative border-2 flex flex-col py-10 px-16 relatve">
      {/* Pattern Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${pattern})`, // Use the imported pattern
          backgroundRepeat: "repeat",
          backgroundSize: "20%",
        }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-200 opacity-70"></div>
      <div className="m-auto flex items-center max-w-7xl w-full justify-center relative z-10">
        {/* text area */}
        <div className="">
          <h1 className="text-[#000000] font-bold text-5xl max-w-lg mb-6 ">
            Shop Faster With Havesta App
          </h1>
          <p className="font-semibold text-lg max-w-sm leading-relaxed mb-10">
            Get fresh farm produce delivered in minutes from a variety of
            trusted vendors{" "}
          </p>

          {/* stores */}
          <div className="flex  gap-4 ">
            <img
              src={appstore}
              alt=""
              className="cursor-pointer transform transition duration-300 hover:scale-110"
            />
            <img
              src={playstore}
              alt=""
              className="cursor-pointer transform transition duration-300 hover:scale-110"
            />
          </div>
        </div>

        {/* phones */}
        <div className=" w-[40%]">
          <img src={phones} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
