import React, { Component } from 'react'

export default (props) => {
  const {food, addToCart, decreaseToCart} = props
  const add = () => {
    addToCart()
  }
  const decrease = () => {
    decreaseToCart()
  }
    return (
      <div class="cartcontrol">
        <div
          class="cart-decrease"
          onClick={add}
        >
          <span class="inner icon-remove_circle_outline" />
        </div>
        {food.count > 0 ? <div class="cart-count">{food.count}</div> : null}
        <div class="cart-add icon-add_circle" onClick={decrease} />
      </div>
    )
}
