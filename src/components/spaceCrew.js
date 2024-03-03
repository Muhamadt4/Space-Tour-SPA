import React from "react";
import girl from "../Spaceimgs/crew/image-anousheh-ansari.png";
export default function SpaceCrew() {
  return (
    <div className="bgmain3 relative pt-20">
      <div>
        <h1 className="text-3xl text-white  lg:pl-80 lg:pt-[60px] pt-10 pl-10 ">
          <span className="pr-3 text-[#4c5059]">02</span>MEET YOUR CREW
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="rightSection flex items-center lg:pt-10  text-white flex-col lg:text-left text-center">
          <div className=" pt-32 w-full lg:pl-32">
            <h2 className=" text-4xl text-[#888c96]">FLIGHT ENGINEER</h2>
            <h1 className="text-6xl pt-10">ANOUSHEH ANSARI</h1>
            <p className="absolute transition-all duration-500 z-20  bg-gradient-to-b from-transparent to-gray-400 sm:bg-none sm:text-[#b6b9c9] pt-12 lg:pr-48 pb-12 max-w-[40rem] leading-loose font-semibold">
              Anousheh Ansari is an Iranian American engineer and co- founder of
              Prodea Systems. Ansari was the fourth self- funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
        </div>
        <div className="LeftSection z-10 flex justify-center absolute bottom-0 right-0 lg:right-52">
          <img src={girl} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
