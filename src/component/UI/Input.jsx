import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex justify-end items-center mb-[0.5rem]">
        <label className=" font-bold mr-[1rem]" htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} className="w-[3rem] rounded-[5px] test pl-[0.5rem]" {...props.input} />
    </div>
  )
})
