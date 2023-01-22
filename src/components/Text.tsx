import React from 'react'
import { clsx } from 'clsx';

interface TextProps {
  title?: boolean
  text: string
  className?: string
}

function Text({ title = false, text, className }: TextProps) {
  return (
    <>
      { title ? 
        <h1 className='text-8xl font-poppins'>{text}</h1>
        : 
        <span className={clsx('font-poppins text-3xl', className)}>{text}</span>
      }
    </>
  )
}

export default Text