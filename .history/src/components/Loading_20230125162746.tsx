import { Skeleton } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div>
      <div></div>
      <div>
        <Skeleton />
      </div>
    </div>
  )
}

export default Loading