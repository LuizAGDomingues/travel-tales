import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full flex items-center justify- mx-24 my-24'>
        <Skeleton variant="rounded" width={210} height={118} />
        <Skeleton variant="circular" width={210} height={118} />
      </div>
      <div className='w-full flex items-center justify-center mt-44 mb-20'>
        <Skeleton variant="rounded" width={1500} height={800} />
      </div>
    </div>
  )
}

export default Loading