import React from "react";
import rocket from "../Spaceimgs/technology/image-launch-vehicle-portrait.jpg";

export default function SpaceTech() {
  return (
    <div className="bgmain3 relative pt-20">
      <div>
        <h1 className="text-3xl text-white  lg:pl-80 lg:pt-[60px] pt-10 pl-10 ">
          <span className="pr-3 text-[#4c5059]">03</span>SPACE LAUNCH 101
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        
        <div className="rightSection flex items-center lg:pt-10  text-white flex-col lg:text-left text-center">
          <div className=" pt-32">
            <h2 className=" text-2xl text-[#888c96]">THE TERMINOLOGY...</h2>
            <h1 className="text-6xl pt-10">LAUNCH VEHICLE</h1>
            <p className=" transition-all duration-500 z-20  pt-12 lg:pr-48 pb-12 max-w-[40rem] leading-loose font-semibold">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocketisthemost powerful
              in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <div className=" flex justify-center">
          <img src={rocket} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
