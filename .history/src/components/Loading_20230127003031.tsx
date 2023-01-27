import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen'>
      <Skeleton />
    </div>
  )
}

export default Loading