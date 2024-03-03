import React from "react";
// import SpaceProjectNav from "./spaceProjectNav";
import mars from "../Spaceimgs/destination/image-mars.png";
export default function SpaceDestin() {
  const Planets = [
    { planet: "MOON" },
    { planet: "MARS" },
    { planet: "EUROPA" },
    { planet: "TITAN" },
  ];

  return (
    <div className="bgmain2 overflow-hidden pt-20">
      <div>
        <div>
          <h1 className="text-3xl text-white  pt-10 lg:pl-80 flex justify-center lg:block  ">
            <span className="pr-3 text-[#4c5059]">01</span>PICK YOUR DESTINATION
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="LeftSection flex justify-center pt-20">
            <img src={mars} alt="" className="" />
          </div>
          <div className="rightSection flex items-center pt-20  text-white flex-col lg:text-left text-center">
            <div className="row list-none  lg:w-1/2 ">
              <ul className="flex gap-12 ">
                {Planets.map((plan, i) => (
                  <li className=" cursor-pointer text-[#68697e] border-b-2 border-transparent hover:border-slate-300 transition-all duration-500 hover:text-slate-300 leading-10">
                    {plan.planet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h1 className="text-9xl pt-10">MARS</h1>
              <p className=" text-[#68697e] pt-12 lg:pr-48 pb-12 max-w-[40rem] leading-loose border-b-2 border-white">
                Dont forget to pack your hiking boots. Youll need them to tackle
                Olympus Mons, the tallest planetary mountain in our solar
                system. It's two and a half times the size of Everest!
              </p>
            </div>
            <div className="secRow grid grid-cols-2  gap-16">
              <div className="col-span-1 pt-6">
                <p className="text-[#666778]">AVG. DISTANCE</p>
                <h2 className="text-4xl pt-2">225 MIL. KM</h2>
              </div>
              <div className="pt-6">
                <p className="text-[#666778]">EST, TRAVEL TINE</p>
                <h2 className="text-4xl pt-2">9 MONTHS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
