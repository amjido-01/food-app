import { useRef, useState } from "react"
import { Input } from "../UI/Input"

export const MealItemsForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
     {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className=" text-right" onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}/>
        <button className="btn hover:bg-[#641e03] active:bg-[#641e03] cursor-pointer bg-[#8a2b06] text-white rounded-[20px] font-bold py-[0.25rem] px-[2rem]">+ Add</button>
        {amountIsValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  )
}
