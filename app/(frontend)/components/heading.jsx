import React from 'react'

const Heading = ({color,title,subtitle}) => {
  return (
    <div className={`flex flex-1 ${color} flex-col gap-2 text-white py-2 px-4 `} >
          <h1 className='text-3xl capitalize font-semibold'>{title}</h1>
          <p className='text-sm font-light'>{subtitle}</p>

    </div>
  )
}

export default Heading