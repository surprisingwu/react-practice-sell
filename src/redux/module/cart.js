const initialData = {
  ids: [],
  foods: {},
  tips: {}
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
  decreaseCartCount: (id, navId) => ({
    type: types.DECREASE_CART,
    id,
    navId
  })
}
// {ids: ['g-1'],foods: {'g-1':{}}}
const addHandler = (state, action) => {
  const _state_ = JSON.parse(JSON.stringify(state));
  const { id, name, price, navId } = action.food
  const { tips, ids, foods } = _state_;
  if (foods[id]) { 
    foods[id].count++
    tips[navId].count++
  } else {
    ids.push(id)
    foods[id] = {
      id,
      name,
      price,
      count: 1
    }
   tips[navId]?tips[navId].count++:(tips[navId] = {count:1})
  }
  return _state_
}
const decreaseHandler = (state, action) => {
  const _state_ = JSON.parse(JSON.stringify(state));
  const { id, navId } = action;
  const { foods, ids, tips } = _state_;
  const { count } = foods[id]
  if ((count - 1) < 0) {
    _state_.ids = ids.filter(i => i !== id)
    delete foods[id]
    tips[navId].count - 1 > 0 ? tips[navId].count-- : (delete tips[navId]);
  } else {
    _state_.foods[id].count--;
    tips[navId].count--;
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