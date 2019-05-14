const initialData = {}

const types = {
  ADD_CART: 'cart/add_cart',
  DECREASE_CART: 'cart/decrease_cart'
}

export const actions = {
  addCartCount: (food) => ({
    type: types.ADD_CART,
    food
  }),
  decreaseCartCount: (food) => ({
    type: types.DECREASE_CART,
    food
  })
}

// {count: xx, name: xx, price}
export default (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_CART:
      
    case types.DECREASE_CART:
      
    default:
      return state;
  }
}