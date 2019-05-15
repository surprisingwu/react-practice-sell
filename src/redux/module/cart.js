const initialData = {
  ids: [],
  foods: {}
}

const types = {
  ADD_CART: 'cart/add_cart',
  DECREASE_CART: 'cart/decrease_cart',
  CLEAR_CART: 'cart/clear_cart'
}

export const actions = {
  addCartCount: (food) => ({
    type: types.ADD_CART,
    food
  }),
  decreaseCartCount: (id) => ({
    type: types.DECREASE_CART,
    id
  })
}
// {ids: ['g-1'],foods: {'g-1':{}}}
const addHandler = (state, action) => {
  const _state_ = JSON.parse(JSON.stringify(state));
  const { id, name, price } = action.food
  if (_state_.foods[id]) { 
    _state_.foods[id].count++
  } else {
    _state_.ids.push(id)
    _state_.foods[id] = {
      id,
      name,
      price,
      count: 1
    }
  }
  return _state_
}
const decreaseHandler = (state, action) => {
  const _state_ = JSON.parse(JSON.stringify(state));
  const id = action.id
  const { count } = _state_.foods[id]
  if ((count - 1) < 0) {
    _state_.ids = _state_.ids.filter(i => i !== id)
    delete _state_.foods[id]
  } else {
    _state_.foods[id].count--
  }
  return _state_
}
// {count: xx, name: xx, price}
export default (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_CART:
      return addHandler(state, action)
    case types.DECREASE_CART:
      return decreaseHandler(state, action)
    case types.CLEAR_CART:
      return initialData
    default:
      return state;
  }
}