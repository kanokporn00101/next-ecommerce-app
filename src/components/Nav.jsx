import Link from "next/link";
import { FaApple, FaCartArrowDown, FaCartShopping, FaPizzaSlice } from "react-icons/fa6"
import { GiFullPizza } from "react-icons/gi";

export default function Nav() {
  return (
    <nav className="bg-white shadow">
      <div className="px-5 py-2 flex justify-between">

        <div className="flex items-start space-y-2 gap-3">
          < FaPizzaSlice size={30} className="text-red-700" />
          <span className="text-2xl text-red-700 font-semibold">CT Shopping</span>
        </div>

        <ul className="flex items-center gap-8">
            <Link aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-2xl font-medium text-red-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/categories">Category</Link>
            <Link className="inline-block rounded-lg px-2 py-1 text-2xl font-medium text-red-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/product">Product</Link>
            <Link className="inline-block rounded-lg px-2 py-1 text-2xl font-medium text-red-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/order">Order</Link>
            <Link className="inline-block rounded-lg px-2 py-1 text-2xl font-medium text-red-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/contact">Contact</Link>
            <Link className="inline-block rounded-lg px-2 py-1 text-2xl font-medium text-red-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/about">About</Link>
        </ul>

        <div className="px-5 flex items-end gap-4">
          <form>
            <input
              type="search"
              placeholder="Search..."
              className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>

          <div className="relative">
            <Link href="/cart">
             <FaCartShopping size={25} className="text-gray-700" />
             </Link>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              99
            </span>
          </div>

        <Link href="/login">
          <button className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-900">
            Login
          </button>
        </Link>

        </div>
      </div>
    </nav>
  )
}
