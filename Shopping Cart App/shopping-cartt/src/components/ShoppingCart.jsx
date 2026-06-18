import { ShoppingCartIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCart } from '../context/cartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../utilities/formatCurrency'

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const { allItems, setLocalStorage } = useCart()

  useEffect(() => {
    const inCartItems = allItems.filter((item) => item.inCart)
    setCartItems(inCartItems?.reverse())

    const price = inCartItems.reduce((accumulator, item) => {
      return (accumulator += item.price * item.quantity)
    }, 0)

    setTotalPrice(price)

    setLocalStorage()
  }, [allItems])
  return (
    <>
      {cartItems.length !== 0 && (
        <div
          className={`w-[300px] h-screen bg-gray-200 fixed top-0 z-30 border-l-4 border-red-200 rounded-tl-lg ${
            isOpen ? 'right-0' : '-right-[300px]'
          }`}
        >
          <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border border-gray-200 rounded-lg">
            <h1 className="text-xl text-gray-600">Shopping Cart</h1>
            <button
              className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center border-2 border-gray-200 rounded-full hover:bg-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="text-white" />
            </button>
          </div>
          <button
            className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3 z-20 grid place-items-center border-2 border-gray-200 rounded-full"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCartIcon className="text-xs text-white" />
            <span className="w-6 h-6 bg-pink-400 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white">
              {cartItems.length > 9 ? '9+' : cartItems.length}
            </span>
          </button>
          <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20">
            {cartItems?.map((item) => {
              return <CartItem key={item.id} item={item} fromCart={true} />
            })}
          </div>
          <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border border-gray-200 rounded-lg">
            <h1 className="text-xl text-gray-600">Total: {formatCurrency(totalPrice)}</h1>
            <button className="rounded-md bg-blue-300 px-2 text-white hover:bg-blue-400 transition-colors">
              Buy now
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ShoppingCart
