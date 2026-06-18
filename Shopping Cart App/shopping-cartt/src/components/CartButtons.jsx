import { useCart } from '../context/cartContext'

const CartButtons = ({ item, fromCart }) => {
  const { addToCart, removeFromCart, updateQuantity } = useCart()
  return (
    <div className={`w-max absolute right-5 top-5 ${fromCart && 'scale-90'}`}>
      <div className="space-x-3">
        {!item.inCart ? (
          <button
            type="button"
            className="bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors"
            onClick={() => addToCart(item)}
          >
            + Add to cart
          </button>
        ) : (
          <div>
            <div className="flex">
              <button
                className="border border-gray-300 rounded-lg px-3"
                onClick={() => {
                  if (item.quantity === 1) {
                    removeFromCart(item)
                  } else {
                    updateQuantity(item, -1)
                  }
                }}
              >
                -
              </button>
              <p className="flex items-center gap-x-1 mx-1">
                <span className="min-w-7 bg-green-100 grid place-items-center border border-gray-300 rounded-full">
                  {item.quantity}
                </span>
                <span className="text-xs">in cart</span>
              </p>
              <button
                className="border border-gray-300 rounded-lg px-3"
                onClick={() => updateQuantity(item, 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-pink-300 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white hover:bg-pink-400"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartButtons
