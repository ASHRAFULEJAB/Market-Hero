import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const HomeProduct = ({product}) => {
  
  console.log(product)
  const { id, title, image, price, description } = product
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-2xl'>
        <figure className='px-10 pt-10'>
          <img src={image} alt='Shoes' className=' fluid rounded-xl h-28  ' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{title.slice(0,15)+ '...'}</h2>
          <p>
            <b>Price:</b>
            {price}$
          </p>
          <div className='card-actions'>
            <Link to={`/product/${id}`}>
              <button className='btn btn-primary'>See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProduct
