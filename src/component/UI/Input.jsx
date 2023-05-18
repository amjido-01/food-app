export const Input = (props) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
        <label className=" font-bold mr-[1rem]" htmlFor={props.input.id}>{props.label}</label>
        <input className="w-[3rem] rounded-[5px] test pl-[0.5rem]" {...props.input} />
    </div>
  )
}
