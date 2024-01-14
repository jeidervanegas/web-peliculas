import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hook/useFetch';
import imageDefault from '../img/default.jpg'

export const SingleMovie = () => {
  const { id } = useParams();
 //hacemos el fetch
 const { isLoading, error, data } = useFetch(`&i=${id}`)

  if(isLoading) {
    return <p className='text-white'>Loading...</p>
  }

  console.log(data);
  const { Poster, Title, Plot, Released, Runtime, Type, Year } = data;

  let image = Poster === 'N/A' ? imageDefault : Poster

  return (
    <div className=' mb-10'>
      {!isLoading ?
        <section className=' w-11/12 md:w-2/4 m-auto pt-40 '>
          <article className='bg-gray-100 flex flex-col md:flex-row gap-6 p-3 rounded-lg min-h-[500px] '>
            <img className='rounded-lg  object-cover'src={image} alt='iamgen de la pelicula' />
            <div className=''>
              <h3 className='text-2xl font-bold text-gray-700 mb-6'>{Title}</h3>
              <div className='leading-7'>
                <p>{Plot}</p>
                <p><strong>Released:</strong>{Released}</p>
                <p><strong>Runtime:</strong>{Runtime}</p>
                <p><strong>Type:</strong>{Type}</p>
                <p><strong>year:</strong>{Year}</p>
              </div>
            </div>
          </article>
        </section>
        :''
    }
    </div>
  )
}
