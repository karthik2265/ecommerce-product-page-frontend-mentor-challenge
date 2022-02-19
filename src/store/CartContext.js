import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = (props) => {
  const [noOfItems, setNoOfItems] = useState(0)

  const incrementItemsHandler = function () {
    setNoOfItems((prev) => prev + 1)
  }
  const decrementItemsHandler = function () {
    setNoOfItems((prev) => {
      if (prev > 0) return prev - 1
      else return 0
    })
  }

  const deleteItemsHandler = function () {
    setNoOfItems(0)
  }

  return (
    <CartContext.Provider
      value={{
        noOfItems: noOfItems,
        incrementItemsCount: incrementItemsHandler,
        decrementItemsCount: decrementItemsHandler,
        deleteItems: deleteItemsHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
