import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Product = () => {
  const productDetails = useLoaderData()
  console.log(productDetails)
  const { image, title, description, price, category } = productDetails
  return (
    <div>
      <div class='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 m-6'>
        <img class='object-cover w-full h-64' src={image} alt='Article' />

        <div class='p-6'>
          <div>
            <span class='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
              {title}
            </span>
            <Link
              to='/'
              class='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline'
              tabindex='0'
              role='link'
            >
              {category}
            </Link>
            <p class='mt-2 text-sm text-gray-100 dark:text-gray-100'>
              {description}
            </p>
            <p className='text-gray-100'>
              <b>Price:</b>
              {price}$
            </p>
          </div>

          <div class='mt-4'>
            <div class='flex items-center'>
              <div class='flex items-center'>
                <img
                  class='object-cover h-10 rounded-full'
                  src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
                  alt='Avatar'
                />

                <Link
                  to='/'
                  class='mx-2 font-semibold text-gray-700 dark:text-gray-200'
                  tabindex='0'
                  role='link'
                >
                  Jone Doe
                </Link>
              </div>
              <span class='mx-1 text-xs text-gray-600 dark:text-gray-300'>
                03 Jan 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
