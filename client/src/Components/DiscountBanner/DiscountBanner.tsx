import React from "react";

const DiscountBanner = () => {
  return (
    <div className="text-center  bg-black">
      <p className=" [font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
        <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0]">
          Sign up and get 20% off to your first order.{" "}
        </span>
        <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium underline">
          Sign Up Now
        </span>
      </p>
    </div>
  );
};

export default DiscountBanner;
