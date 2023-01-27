import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen'>
      <div className=''>
        <Skeleton variant='rounded' />
    </div>
  )
}

export default Loading