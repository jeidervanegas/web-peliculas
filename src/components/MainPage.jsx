import React from 'react'
import { FormSearch } from './FormSearch'
import { Movies } from './Movies'

export const MainPage = () => {
  return (
    <div className='bg-blue-950 min-h-screen'>
        <FormSearch/>
        <Movies/>
    </div>
  )
}
