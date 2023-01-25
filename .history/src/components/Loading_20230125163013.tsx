import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full flex items-center justify-end mx-24'>
        <Skeleton variant="rounded" width={210} height={118} />
        <Skeleton variant="circular" width={210} height={118} />
      </div>
      <div className='flex items-center justify-center'>
        <Skeleton variant="rounded" width={720} height={118} />
      </div>
    </div>
  )
}

export default Loading