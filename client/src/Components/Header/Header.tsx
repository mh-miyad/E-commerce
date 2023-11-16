import Image from "next/image";
import React from "react";
import banner from "../../../public/headerImage.png";
import star1 from "../../../public/start1.png";
import star2 from "../../../public/star2.png";
import logo1 from "../../../public/logo.png";
import logo2 from "../../../public/log-2.png";
import logo3 from "../../../public/logo-3.png";
import logo4 from "../../../public/logo-4.png";
import logo5 from "../../../public/logo-5.png";
const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#F2F0F1] lg: items-center">
        <div className="  px-3 pt-5   ">
          <p className="pb-4 text-center md:text-start  font-extrabold w-72 mx-auto lg:w-full   text-gray-800 text-4xl lg:text-7xl md:mx-0">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className=" text-center md:text-start text-neutral-400 text-sm/6 lg:pr-10 lg:text-xl lg:text-start ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className=" w-full md:w-52  px-10 font-bold tracking-[5px] mx-auto my-4 bg-black  text-white py-3 rounded-full shadow-md  shadow-black/40 uppercase">
            {" "}
            <span className="animate-pulse">Shop Now</span>
          </button>

          <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-10 items-center">
            <p className="text-center">
              <span className="text-xl md:text-3xl lg:text-5xl">200+</span>
              <br />
              <span>international brand</span>
            </p>
            <p className="text-center">
              <span className="text-xl md:text-3xl lg:text-5xl">6440+</span>
              <br />
              <span>High-Quality Products</span>
            </p>
            <p className="text-center">
              <span className="text-xl md:text-3xl lg:text-5xl">30,00+</span>
              <br />
              <span>Happy Customers</span>
            </p>
          </div>
        </div>
        <div className=" relative ">
          <Image
            src={banner}
            width={1080}
            quality={100}
            height={720}
            alt="banner image"
            className=" relative mx-auto  "
          />
          <Image
            src={star1}
            width={40}
            quality={100}
            height={40}
            alt="banner image"
            className=" absolute left-5 top-32   md:left-12    "
          />
          <Image
            src={star2}
            width={80}
            quality={100}
            height={80}
            alt="banner image"
            className=" absolute right-5 top-10 md:top-20 md:right-10 "
          />
        </div>
      </div>
      <div className="flex-wrap justify-around  py-4 gap-4 bg-black flex">
        <Image
          src={logo1}
          width={80}
          quality={100}
          height={80}
          alt="banner image"
          className=" object-contain  "
        />
        <Image
          src={logo2}
          width={80}
          quality={100}
          height={80}
          alt="banner image"
          className="  object-contain "
        />
        <Image
          src={logo3}
          width={80}
          quality={100}
          height={80}
          alt="banner image"
          className=" object-contain  "
        />
        <Image
          src={logo4}
          width={80}
          quality={100}
          height={80}
          alt="banner image"
          className=" object-contain  "
        />
        <Image
          src={logo5}
          width={80}
          quality={100}
          height={80}
          alt="banner image"
          className="object-contain  "
        />
      </div>
    </>
  );
};

export default Header;
