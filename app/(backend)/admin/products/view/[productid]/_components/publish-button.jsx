"use client"

import { Button } from '@material-tailwind/react'
import React from 'react'

const PublishButton = ({className}) => {
  return (
    <div>
        <Button disabled={true} className={className}>Publish Product</Button>
    </div>
  )
}

export default PublishButton