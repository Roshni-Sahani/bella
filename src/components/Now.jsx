import React from "react";

const Now = () => {
  return (
    <div className="bg2 h-[516px] flex flex-col justify-center">
      <p className="text-white sm:text-[40px] text-[35px] font-bold leading-[57px] text-center">
        Download the app now.
      </p>
      <p className="text-white text-center sm:text-[24px] text-[20px]">
        Available on your favorite store. Start your premium experience now
      </p>
      <div className="inline-block flex justify-center gap-[34px] pt-[50px]">
        <button className="text-white font-bold md:text-[24px] text-[20px] bg-[#FA4A0C] py-3 sm:px-[50px] px-6 rounded-[30px] shadow-[0px_10px_30px_0px_#B7322733] cursor-pointer">
          Playstore
        </button>
        <button className="text-white font-bold md:text-[24px] text-[20px] border-[white] border py- 3  sm:px-[50px] px-6   rounded-[30px] cursor-pointer">
          App store
        </button>
      </div>
    </div>
  );
};

export default Now;
