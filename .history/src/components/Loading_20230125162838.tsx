import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <Skeleton variant="rounded" width={210} height={118} />
      </div>
    </div>
  )
}

export default Loading