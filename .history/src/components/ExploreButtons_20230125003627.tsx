import { Button } from '@mui/material'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
import Text from './Text'


interface ExploreButtonProps extends Button {
  icon: ReactNode
  text: string
}

function ExploreButtonsIconStart({ icon, text }: ExploreButtonProps) {
  return (
    <Button 
      {...props}
      variant="outlined"
      startIcon={icon}
      style={{textTransform: 'none', border: 'none', marginTop: '2.25rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', borderRadius: '10px'}}
      className='py-4 px-6 text-black'
    >
      <Text text={text}/>
    </Button>
  )
}

function ExploreButtonsIconEnd({ icon, text }: ExploreButtonProps) {
  return (
    <Button 
      variant="outlined"
      endIcon={icon}
      style={{textTransform: 'none', border: 'none', marginTop: '2.25rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', borderRadius: '10px'}}
      className='py-4 px-6 text-black w-[45rem]'
    >
      <Text text={text}/>
    </Button>
  )
}

interface ExploreButtonsIconBoth extends HTMLButtonElement {
  iconStart: ReactNode
  iconEnd: ReactNode
  text: string
  link?: string
}

function ExploreButtonsIconBoth({ iconStart, iconEnd, text, className, link = '' }: ExploreButtonsIconBoth) {
  return (
    <Button 
      variant="outlined"
      href={link}
      target='_blank'
      startIcon={iconStart}
      endIcon={iconEnd}
      style={{textTransform: 'none', border: 'none', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', borderRadius: '100px'}}
      className={clsx('py-4 px-6 text-black w-[31rem]', className)}
    >
      <Text text={text}/>
    </Button>
  )
}

export const ExploreButtons = {
  IconStart: ExploreButtonsIconStart,
  IconEnd: ExploreButtonsIconEnd,
  IconBoth: ExploreButtonsIconBoth
}