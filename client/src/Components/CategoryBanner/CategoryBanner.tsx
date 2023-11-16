import React from "react";
import Image from "next/image";
import casual from "../../../public/casual.png";
import gym from "../../../public/gym.png";
import formal from "../../../public/formal.png";
import party from "../../../public/party.png";

const CategoryBanner = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-3 p-10 drop-shadow-xl">
        <div
          className="w-96 h-36 bg-cover"
          style={{
            backgroundImage: `url(${party})`,
          }}
        ></div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Image src={formal} alt="formal" className="w-full h-auto" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Image src={casual} alt="casual" className="w-full h-auto" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Image src={party} alt="party" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CategoryBanner;
