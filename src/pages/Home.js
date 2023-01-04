import React, { useEffect, useState } from 'react'
import HomePgae from '../components/HomePgae'
import HomeProduct from '../components/HomeProduct'

const Home = () => {
  const [products, setProducts] = useState([])
  const [searchTilte, setSearchTitle] = useState('')
  const [loading, setLoading] = useState(false)
  // product data loading all
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? (
        <>
          <div className='text-red-500 text-6xl'>loading..</div>
        </>
      ) : (
        <>
          <div className='m-3 text-center'>
            <input
              type='text'
              placeholder='Type here'
              onChange={(e) => setSearchTitle(e.target.value)}
              className='input input-bordered w-full max-w-xs'
            />
            <button className='btn ml-3 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-800 p-3  hover:bg-purple-700 focus:shadow-outline focus:outline-none'>
              Search
            </button>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {' '}
            {/* Search Functionality  */}
            {products
              .filter((value) => {
                if (searchTilte === '') {
                  return value
                } else if (
                  value.title
                    .toLowerCase()
                    .includes(searchTilte.toLocaleLowerCase())
                ) {
                  return value
                }
              })
              .map((product) => (
                <HomeProduct key={product.id} product={product}></HomeProduct>
              ))}
          </div>
          {/* Hero Section  */}

          <HomePgae />
        </>
      )}
    </div>
  )
}

export default Home
