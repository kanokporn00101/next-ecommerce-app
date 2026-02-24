import React from 'react'
import Link from 'next/link'

export default function CategoryCard(props) {
  const {id, categoryName,  description , imageUrl} = props
  return (
    <Link href={`/categories/${id}`}>
    <div className=' w-90 h-70 shadow-lg shadow-gray-500 border border-gray-200 bg-white p-8 flex flex-col items-center text-center rounded-lg gap-3 cursor-pointer hover:shadow-2xl transition'> 
        <img src={imageUrl} alt="categories" width={150} height={200} />
        <h4 className='text-4xl font-bold text-red-700' >{categoryName}</h4>
        <p className='text-md'>{description}</p>
    </div>
    </Link>
  )
}
