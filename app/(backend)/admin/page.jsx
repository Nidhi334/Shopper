import React from 'react'
import StaticCard from './_components/static-card'

const page = () => {
  return (
    <div className='grid grid-cols-4 gap-3'>
      <StaticCard  bg="light-green" title="Total Products" no={5}/>
      <StaticCard  bg="cyan" title="Total Orders" no={5}/>
      <StaticCard  bg="pink" title="Total Categories" no={5}/>
      <StaticCard  bg="yellow" title="Total Products" no={5}/>

    </div>
  )
}

export default page