import { Input } from "../UI/Input"
export const MealItemsForm = (props) => {
  return (
    <form className=" text-right ">
        <Input label="Amount" input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}/>
        <button className="btn hover:bg-[#641e03] active:bg-[#641e03] cursor-pointer bg-[#8a2b06] text-white rounded-[20px] font-bold py-[0.25rem] px-[2rem]">+ Add</button>
    </form>
  )
}
