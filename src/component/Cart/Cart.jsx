import { Model } from "../UI/Model";
export const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  const cartItemsList = cartItems.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <Model onClick={props.onHideCart}>
      <ul className=" list-none m-0 p-0 max-h-[20rem] overflow-auto">
        {cartItemsList}
      </ul>
      <div className="flex justify-between items-center font-bold text-[1.5rem] my-[1rem] mx-0">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className=" text-right">
        <button
          onClick={props.onHideCart}
          style={{ border: "1px solid #8a2b06" }}
          className="text-[#8a2b06] hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white active:text-white active:border-[#5a1a01] active:bg-[#5a1a01] cursor-pointer bg-transparent py-[0.5rem] px-[2rem] ml-[1rem] rounded-[25px]"
        >
          Close
        </button>
        <button
          style={{ border: "1px solid #8a2b06" }}
          className="text-white hover:border-[#5a1a01] hover:bg-[#5a1a01] active:border-[#5a1a01] active:bg-[#5a1a01] cursor-pointer bg-[#8a2b06] py-[0.5rem] px-[2rem] ml-[1rem] rounded-[25px]"
        >
          Order
        </button>
      </div>
    </Model>
  );
};
