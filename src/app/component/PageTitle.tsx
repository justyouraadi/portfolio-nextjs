import React from 'react'

type Props = {
    heading:string;
}

export default function PageTitle({heading}: Props) {
  return (
    <div className='text-5xl font-bold pb-5 border-b' >{heading}</div>
  )
}