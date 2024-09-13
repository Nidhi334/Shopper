"use client"

import { Card, CardBody } from '@material-tailwind/react'
import React from 'react'

const StaticCard = ({title,no,bg}) => {
  return (
    <Card color={bg} variant='gradient'>
      <CardBody>
        <h5 className='text-3xl font-bold'>{no}+</h5>
        <p className='text-2xl font-semibold'>{title}</p>

      </CardBody>
    </Card>
  )
}

export default StaticCard