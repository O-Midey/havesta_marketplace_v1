import React from "react";
import pricetag from "../assets/pricetag.svg";
import refundable from "../assets/refundable.svg";
import delivery from "../assets/delivery.svg";

const Features = () => {
  const features = [
    {
      id: 0,
      img: pricetag,
      title: "Best Prices & Deals",
      content: "Don’t miss our daily amazing deals and prices",
    },
    {
      id: 1,
      img: refundable,
      title: "Refundable ",
      content: "If your items are damaged, we will refund.",
    },
    {
      id: 2,
      img: delivery,
      title: "Free delivery",
      content: "Do purchase over ₦50k and get free delivery within Lagos",
    },
  ];
  return (
    <div className="flex flex-col py-16 px-8">
      <div className="flex justify-between m-auto max-w-6xl  w-full ">
        {features.map((feature) => (
          <div className="flex items-center gap-3  w-64" key={feature.id}>
            <img src={feature.img} alt="" className={`w-12`} />
            <div>
              <h1 className=" font-semibold">{feature.title}</h1>
              <p className=" text-[#878787] text-sm max-w-xs">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
