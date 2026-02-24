import React from 'react'
import Button from './Button'

export default function ProductCard(props) {
  const {id, title, price, productDetail , thumbnail} = props
  return (
    <div className='w-80 h-70 rounded-lg border-2 border-gray-200 shadow-xl shadow-gray-300 bg-white p-5 flex flex-col items-center gap-2'> 
        <img src={thumbnail} alt="categories" width={100} height={100} />
        <p className='mt-2 text-lg font-bold text-center'>{title}</p>
        <p className='text-sm text-center'>{productDetail}</p>
    <div className='w-full flex justify-around items-baseline mt-2'>
        <p className='text-red-700 text-xl font-bold'>{price}</p>
        <Button url={`/product/${id}`} text={"สั่งซื้อ"} />
    </div>
    </div>
  )
}
