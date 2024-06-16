import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";

const Header = () => {
  const [set, setshow] = useState(true);
  function menu() {
    setshow(!set);
    if (set === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="max-w-[1140px] px-3 mx-auto">
      <div className="flex justify-between py-[20px]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </div>
        <ul
          className={`flex items-center lg:gap-[104px]  gap-5 duration-700 mobileView ${
            set ? "right-[-100%]" : "right-0 "
          }`}
        >
          <li>
            <a
              href=""
              className="hover:text-[#FA4A0C] relative after:absolute after:w-0 after:h-[1.5px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#FA4A0C]  text-base font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-[#FA4A0C] relative after:absolute after:w-0 after:h-[1.5px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#FA4A0C]  text-base font-semibold"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-[#FA4A0C] relative after:absolute after:w-0 after:h-[1.5px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#FA4A0C]  text-base font-semibold"
            >
              Faq
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-[#FA4A0C] relative after:absolute after:w-0 after:h-[1.5px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#FA4A0C]  text-base font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
        <label className={`flex flex-col lg:hidden  z-20`} onClick={menu}>
          <span className="w-8] h-[4px] bg-[#FA4A0C] rounded-full mt-2 flex"></span>
          <span className="w-8 h-[4px] bg-[#FA4A0C] rounded-full mt-2 flex"></span>
          <span className="w-8 h-[4px] bg-[#FA4A0C] rounded-full mt-2 flex"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
