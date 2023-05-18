export const Input = (props) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
        <label htmlFor={props.Input.id}>{props.label}</label>
        <input className="w-[3rem] rounded-[5px] test pl-[0.5rem]"id={props.Input.id} {...props.input} />
    </div>
  )
}
