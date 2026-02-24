import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';

export default function Cart() {
  return (
    <div className="flex flex-col justify-center items-center h-160">
        <FaCartShopping size={100} />
          <p className="text-8xl">Cart</p>
    </div>
  )
}
