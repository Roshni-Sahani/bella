import React from "react";
import phnimg2 from "../assets/images/png/phnimg2.png";
import phnimg3 from "../assets/images/png/phnimg3.png";
import phnimg4 from "../assets/images/png/phnimg4.png";
import repphn1 from "../assets/images/png/repphn1.png";

const Create = () => {
  return (
    <div className="sm:pt-[200px] pt-[35px] md:mt-[300px]">
      <div className="max-w-[1140px] px-3 mx-auto">
        <p className="text-center leading-[36px] font-bold md:text-[44px] text-[40px]  pt-[50px]">
          How the app works
        </p>
        <div className="flex flex-wrap flex-row items-center">
          <div className="lg:w-6/12 px-3 w-full flex justify-center lg:justify-start">
            <img src={phnimg2} alt="phnimg2" className="hidden lg:block" />
            <img
              src={repphn1}
              alt="repphn1"
              className="block lg:hidden mt-10 lg:mt-0"
            />
          </div>
          <div className="lg:w-6/12 px-3 w-full">
            <p className="text-[#FA4A0C] md:text-[24px] text-[20px] font-bold leading-[36px] pt-2 text-center lg:text-start">
              Create an account
            </p>
            <p className="text-[#252B42] md:text-[40px] text-[35px] leading-[57px] font-bold text-center lg:text-start">
              Create/login to an existing account to get started
            </p>
            <p className="font-medium text-[#737373] md:text-[24px] text-[20px] pt-2 text-center lg:text-start">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-row items-center flex-col-reverse">
          <div className="lg:w-6/12 px-3 w-full">
            <p className="text-[#FA4A0C] text-[24px] font-bold leading-[36px] pt-2 text-center lg:text-start">
              Explore varieties
            </p>
            <p className="text-[#252B42] text-[40px] leading-[57px] font-bold text-center lg:text-start pt-3">
              Shop for your favorites meal as e dey hot.
            </p>
            <p className="font-medium text-[#737373] text-[24px] pt-2 text-center lg:text-start pt-3">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <div className="lg:w-6/12 px-3 w-full flex justify-center lg:justify-start">
            <img src={phnimg3} alt="phnimg3" className="hidden lg:block" />
            <img src={repphn1} alt="repphn1" className="block lg:hidden" />
          </div>
        </div>
        <div className="flex flex-wrap flex-row items-center">
          <div className="lg:w-6/12 px-3 w-full flex justify-center lg:justify-start">
            <img src={phnimg4} alt="phnimg2" className="hidden lg:block" />
            <img src={repphn1} alt="repphn1" className="block lg:hidden" />
          </div>
          <div className="lg:w-6/12 px-3 w-full">
            <p className="text-[#FA4A0C] md:text-[24px] text-[20px] font-bold leading-[36px] pt-2 text-center lg:text-start">
              Checkout
            </p>
            <p className="text-[#252B42] md:text-[40px] text-[35px] leading-[57px] font-bold text-center lg:text-start">
              When you done check out and get it delivered.
            </p>
            <p className="font-medium text-[#737373] md:text-[24px] text-[20px] pt-2 text-center lg:text-start pb-10 lg:pb-0">
              When you done check out and get it delivered with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
