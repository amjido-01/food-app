import { useContext } from "react";
import { Model } from "../UI/Model";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // const cartItems = cartCtx;
  // const cartItemsList = cartItems.map((item) => (
  //   <li key={item.id}>{item.name}</li>
  // ));

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Model onClick={props.onHideCart}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-[1.5rem] my-[1rem] mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className=" text-right">
        <button
          onClick={props.onHideCart}
          style={{ border: "1px solid #8a2b06" }}
          className="text-[#8a2b06] hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white active:text-white active:border-[#5a1a01] active:bg-[#5a1a01] cursor-pointer bg-transparent py-[0.5rem] px-[2rem] ml-[1rem] rounded-[25px]"
        >
          Close
        </button>
        {hasItems && (
          <button
            style={{ border: "1px solid #8a2b06" }}
            className="text-white hover:border-[#5a1a01] hover:bg-[#5a1a01] active:border-[#5a1a01] active:bg-[#5a1a01] cursor-pointer bg-[#8a2b06] py-[0.5rem] px-[2rem] ml-[1rem] rounded-[25px]"
          >
            Order
          </button>
        )}
      </div>
    </Model>
  );
};
