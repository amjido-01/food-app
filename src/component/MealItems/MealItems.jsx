import { MealItemsForm } from "./MealItemsForm";

export const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div className="flex justify-between m-[1rem] pb-[1rem]"  style={{ borderBottom: "1px solid #ccc" }}>
      <li
        className="  "
      >
        <h3 className="meal-name font-bold">{props.name}</h3>
        <div className=" italic">{props.description}</div>
        <div className="mt-[0.25rem] font-bold text-[#ad5502] text-[1.25rem]">
          {props.price}
        </div>
      </li>
      <div>
        <MealItemsForm id={props.id}/>
      </div>
    </div>
  );
};
