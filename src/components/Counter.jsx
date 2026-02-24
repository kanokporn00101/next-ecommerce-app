"use client"
import { useState } from 'react'
import React from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <button onClick={()=>setCount(count-1)} className="bg-red-700 text-white px-2 py-1 rounded-lg">-</button>
    {count}
    <button onClick={()=>setCount(count+1)} className="bg-red-700 text-white px-2 py-1 rounded-lg">+</button>
    </div>
  )
}
