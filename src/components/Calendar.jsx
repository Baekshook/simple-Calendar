import React from 'react'
import Date from './Date'

export default function Calender() {
  return (
    <div className='bg-white w-1/2 rounded-lg shadow-2xl p-8'>
        <div className='pb-8 text-4xl font-bold'>2023, 04</div>
        <Date />
    </div>
  )
}
