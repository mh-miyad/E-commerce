"use client";
import React from "react";
import { IoIosClose } from "react-icons/io";

const DiscountBanner = () => {
  return (
    <div className="text-xs py-2 text-white bg-black px-5 ">
      <div className=" flex  justify-between items-center">
        <p className="">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline underline-offset-4 font-medium">
            Sign Up Now
          </span>
        </p>
        <button className="" onClick={() => alert("click here ")}>
          <span>
            <IoIosClose className=" w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
