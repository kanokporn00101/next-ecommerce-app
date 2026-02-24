import React from 'react'
import CategoryCard from '@/components/CategoryCard'

const categories = [  
  {
    id: 1,
    categoryName: "Pizza",
    description: "เลือกพิซซ่าหน้าที่คุณชอบ",
    imageUrl: "/pizza.jpg"
  },
  {
    id: 2,
    categoryName: "Melts",
    description: "ชีสเยิ้มๆ ไส้ล้นทะลัก",
    imageUrl: "/melts.jpg"
  },
  {
    id: 3,
    categoryName: "Salad",
    description: "เมนูคนรักสุขภาพ",
    imageUrl: "/salad.jpg"
  },
  {
    id: 4,
    categoryName: "Steak",
    description: "เนื้อชุ่มฉ่ำ",
    imageUrl: "/steak.jpg"
  },
  {
    id: 5,
    categoryName: "Spaghetti",
    description: "เส้นเหนียวนุ่ม",
    imageUrl: "/spaghetti.jpg"
  },
  {
    id: 6,
    categoryName: "Slider",
    description: "Hut's Slider' พิซซ่าในฟอร์แมตใหม่ ที่มาพร้อมกับความอร่อยแบบจัดเต็ม",
    imageUrl: "/slider.jpg"
  },
  {
    id: 7,
    categoryName: "Appetizers",
    description: "เมนูเรียกน้ำย่อย",
    imageUrl: "/appetizers.jpg"
  },
  {
    id: 8,
    categoryName: "Wings",
    description: "ปีกไก่รสเด็ด",
    imageUrl: "/wings.jpg"
  },
  {
    id: 9,
    categoryName: "Drink & Dessert",
    description: "เครื่องดื่มและของหวาน",
    imageUrl: "/drinks.jpg"
  }


]

export default function Category() {
  return (
    <div className='m-10 flex flex-wrap gap-5 justify-center'>
      {
        categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))
      }
    </div>
  );
}
