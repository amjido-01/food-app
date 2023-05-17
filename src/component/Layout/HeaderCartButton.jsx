import React from "react";
import {HiShoppingCart} from "react-icons/hi"

export const HeaderCartButton = (props) => {
  return (
    <button className=" cursor-pointer border-0 bg-[#4d1601] text-white flex py-[10px] px-[2rem] justify-around items-center rounded-[25px] font-bold active:bg-[#2c0d00] hover:bg-[#2c0d00]">
      <span>
        <HiShoppingCart className="w-[1.35rem] h-[18px] mr-[0.4rem]"/>
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] rounded-[25px] ml-[1rem] font-bold hover:bg-[#92320c] active:bg-[#92320c] px-[0.70rem] py-[0.25rem] ">2</span>
    </button>
  );
};
