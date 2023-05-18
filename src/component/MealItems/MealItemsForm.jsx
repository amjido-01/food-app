// import { Input } from "../UI/Input"
export const MealItemsForm = () => {
  return (
    <form className=" text-right ">
        {/* <Input label="Amount" Input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }}/> */}
        <div className="flex items-center mb-[0.5rem]">
          <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" min="1" max="5" step="1" defaultValue="1" className="w-[3rem] rounded-[5px] test pl-[0.5rem]" />
        </div>
        <button className="btn hover:bg-[#641e03] active:bg-[#641e03] cursor-pointer bg-[#8a2b06] text-white rounded-[20px] font-bold py-[0.25rem] px-[2rem]">+ Add</button>
    </form>
  )
}
