import React from "react";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import CartContext from "../../store/cart-context";
import { useEffect, useState } from "react";

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnHighLight, setBtnHighLight] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighLight(true);

    const timer = setTimeout(() => {
      setBtnHighLight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx]);
  return (
    <button
      onClick={props.onClick}
      className={`${
        btnHighLight ? "bump" : ""
      } cursor-pointer border-0 bg-[#4d1601] text-white flex py-[10px] px-[2rem] justify-around items-center rounded-[25px] font-bold active:bg-[#2c0d00] hover:bg-[#2c0d00]`}
    >
      <span>
        <HiShoppingCart className="w-[1.35rem] h-[18px] mr-[0.4rem]" />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] rounded-[25px] ml-[1rem] font-bold hover:bg-[#92320c] active:bg-[#92320c] px-[0.70rem] py-[0.25rem] ">
        {numberOfCartItems}
      </span>
    </button>
  );
};
