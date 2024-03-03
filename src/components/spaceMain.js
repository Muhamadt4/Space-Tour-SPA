import React from "react";
import explore from "../Spaceimgs/shared/explore.png";
export default function SpaceMain() {
  return (
    <div className="overflow-hidden ">
      <div className="bgmain pt-20">
        <div className="text-[#d6daf9] lg:pt-[250px] pt-[90px] lg:pl-[180px] lg:relative ">
          <div className="lg:block lg:float-left flex flex-col items-center justify-center lg:text-left text-center">
            <h2 className="lg:text-[1lvw] text-[2.5lvw]">
              SO, YOU WANT io TRAVEL TO
            </h2>
            <h1 className="lg:text-[7lvw] text-[24lvw] ">Space</h1>
            <p className=" pt-12 lg:max-w-lg max-w-sm font-semibold">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and nothover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex justify-center pt-20 lg:block">
            <img
              src={explore}
              className="rounded-[50%] lg:float-right lg:mr-[20%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
