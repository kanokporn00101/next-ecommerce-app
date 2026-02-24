"use client"
import ProductCard from '@/components/ProductCard'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductById() {
    const [product, setProduct] = useState({})
    const params = useParams() 
    const { id } = params
    useEffect(() => {
      async function getProduct() {
        const data = await fetch(`https://dummyjson.com/products/${id}`)
                            .then(result => result.json())
        setProduct(data)
      }
      getProduct()
    }, [])
    
  return (
     <div className='m-10 h-150 flex flex-wrap justify-center '>
         <ProductCard {...product} />
    </div>
  )
}
