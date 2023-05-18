import React from 'react'

export const Card = (props) => {
  return (
    <div className='p-[1rem] rounded-[14px] bg-white card'>
        {props.children}
    </div>
  )
}
