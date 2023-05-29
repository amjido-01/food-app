import React from "react";
import { useContext } from "react";
import { MealItemsForm } from "./MealItemsForm";
import CartContext from "../../store/cart-context";

export const MealItems = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div
      className="flex justify-between m-[1rem] pb-[1rem] items-center"
      style={{ borderBottom: "1px solid #ccc" }}
    >
      <li className=" ">
        <h3 className="meal-name font-semibold md:font-bold">{props.name}</h3>
        <div className=" italic">{props.description}</div>
        <div className="mt-[2px] md:mt-[0.25rem] font-bold text-[#ad5502] text-[1.25rem]">
          {props.price}
        </div>
      </li>
      <div className="">
        <MealItemsForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};
