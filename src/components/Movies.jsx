import React, { useContext } from 'react'
import { DataContext } from '../context/DataUser'
import { ItemMovie } from './ItemMovie'

export const Movies = () => {

    const { data, isLoading } = useContext(DataContext)
    console.log(data);
    
  return (
    <section className='w-11/12 m-auto'>
      <article className='grid grid-cold-1 md:grid-cols-4 gap-10'>
        {!isLoading ?
        data.map(item => (
            <ItemMovie
                key={item.imdbID}
                id={item.imdbID}
                poster={item.Poster}
                title={item.Title}
                type={item.Type}
                year={item.Year}
            />
        ))
        : ''
    }
        </article>
    </section>
  )
}
