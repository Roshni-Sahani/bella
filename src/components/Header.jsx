import React from "react";
import phnimg from "../assets/images/png/phnimg.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="bg-img h-screen flex justify-center flex-col ">
        <p className="text-white font-bold leading-[36px] text-center">
          Food app
        </p>
        <div className="flex justify-center">
          <p className="text-white md:text-[58px] sm:text-[50px] text-[39px] text-center max-w-[937px] font-bold">
            Why stay hungry when you can order form Bella Onojie
          </p>
        </div>
        <p className="text-white text-center font-medium leading-[38px] text-[24px] pt-[40px]">
          Download the bella onoje’s food app now on
        </p>
        <div className="inline-block flex justify-center gap-[34px] pt-[50px] cursor-pointer">
          <button className="text-white font-bold sm:text-[24px] text-[20px] bg-[#FA4A0C] py-3 sm:px-[50px] px-6 rounded-[30px] shadow-[0px_10px_30px_0px_#B7322733] cursor-pointer">
            Playstore
          </button>
          <button className="text-white font-bold sm:text-[24px] text-[20px] border-[white] border py-3 sm:px-[50px] px-6 rounded-[30px] cursor-pointer">
            App store
          </button>
        
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={phnimg}
          alt="phnimg"
          className="top-[70%] absolute max-w-[548px] sm:h-[640px] h-[550px] hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Header;
