import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen p-96'>
      <Skeleton variant='rounded' />
    </div>
  )
}

export default Loading