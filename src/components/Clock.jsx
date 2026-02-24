"use client"
import React, { useEffect, useState } from 'react'

export default function Clock() {

  const [clock, setClock] = useState(new Date())
  useEffect(() => {
   const c = setInterval(() => {
      setClock(new Date())
    }, 1000);
    return () => clearInterval(c)
  }, [])
   return ( 

    <p className="text-xl">{ clock.toLocaleString() }</p>
    )
}
