import { Link } from 'react-router-dom'
import imageDefault from '../img/default.jpg'

export const ItemMovie = ({poster, title, type, year, id}) => {

    let image = poster ==='N/A' ? imageDefault : poster

  return (
    <Link to={`/movies/${id}`}>
        <div className='  rounded-xl  '>
            <img className='md:h-[460px] w-full object-cover rounded-lg shadow-lg' src={image} alt="" />
            <div className=''>
              {/* <p className='flex justify-between w-11/12 m-auto py-2 text-gray-200'><span>{type}</span><span>{year}</span></p> */}
              <h2 className='text-center py-3 text-xl text-white '>{title}</h2>
            </div>
        </div>
    </Link>
  )
}
