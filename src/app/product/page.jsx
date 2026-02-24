"use client"
import ProductCard from '@/components/ProductCard'
import React from 'react'
import { useEffect,useState } from 'react'

const product = [
  {
    id: 1,
    productName: "ซีฟู้ด เอ็กซ์ตรีม",
    productDetail: "ชีส, กุ้ง, ปลาหมึก, หอยลาย, หอยแมลงภู่และซอสมะเขือเทศ",
    price:"฿439",
    imageUrl: "/seafood-extreme.jpg"
  },
  {
    id: 2,
    productName: "ซีฟู้ด พาราไดซ์",
    productDetail: "ชีส, กุ้ง, สับปะรด, หัวหอม, พริกหวาน และซอสสไปซี่บาร์บีคิว",
    price:"฿439",
    imageUrl: "/seafood-paradise.jpg"
  },
  {
    id: 3,
    productName: "เบคอน & ฮอกไกโด ชีส",
    productDetail: "ฮอกไกโด ชีส, แฮม, เบคอน, สับปะรดและซอสเทาซันด์ไอแลนด์",
    price:"฿379",
    imageUrl: "/bacon.jpg"
  },
  {
    id: 4,
    productName: "ชิกเก้น สุพรีม",
    productDetail: "ชีส, ไก่นิวออร์ลีนส์, ไก่รมควัน, ไส้กรอกไก่และซอสพิซซ่า",
    price:"฿379",
    imageUrl: "/chicken.jpg"
  },
  {
    id: 5,
    productName: "ฮาวายเอี้ยน",
    productDetail: "ชีส, สับปะรด, แฮมหมู, เบคอน และซอสพิซซ่า",
    price:"฿349",
    imageUrl: "/hawaiian.jpg"
  },
  {
    id: 6,
    productName: "เครซี่ เบคอน",
    productDetail: "ชีส, เบคอน สับปะรด แฮมหมู และซอสเทาซันด์ไอแลนด์",
    price:"฿349",
    imageUrl: "/crazy.jpg"
  },
  {
    id: 7,
    productName: "แฮม & ชีส",
    productDetail: "ชีส, แฮมหมู ชีสไดซ์ สับประรด และซอสเทาซันด์ไอซ์แลนด์",
    price:"฿299",
    imageUrl: "/ham.jpg"
  },
  {
    id: 8,
    productName: "กุ้ง เอ็กซ์ตรีม",
    productDetail: "ชีส, กุ้ง, สับปะรด และซอสเทาซันด์ไอแลนด์",
    price:"฿299",
    imageUrl: "/shrimp.jpg"
  },
  {
    id: 9,
    productName: "นิวออร์ลีนส์ & ซอสเซจ",
    productDetail: "ชีส, ไก่นิวออร์ลีนส์,  สับปะรดและซอสเทาซันด์ไอแลนด์",
    price:"฿299",
    imageUrl: "/new-orleans.jpg"
  },
  {
    id: 10,
    productName: "เวจจี้",
    productDetail: "ชีส, เห็ด, มะเขือเทศ, หัวหอม, พริกหวาน, สับปะรดและซอสพิซซ่า",
    price:"฿299",
    imageUrl: "/veggie.jpg"
  }
]

export default function Product() {
  const [products, setProducts] = useState([])
  useEffect(() => {
   async function getProducts() {
      const data = await fetch("https://dummyjson.com/products")
                        .then(result => result.json())
      setProducts(data.products)
    }

    getProducts()
  }, [])
  return (
    <div className='m-10 flex flex-wrap gap-5 justify-center'>
          {
            products.map((pro) => (
              <ProductCard key={pro.id} {...pro} />
            ))
          }
        </div>
  )
}
