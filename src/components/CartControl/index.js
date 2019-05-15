import React from 'react'
import {CartWrapper} from './style'

export default (props) => {
  const { food, addGood, decreaseGood, good } = props
  const add = (e) => {
    const _food_ = food?food:good
    addGood(_food_)
  }
  const decrease = (e) => {
    decreaseGood(food.id)
  }
    return (
      <CartWrapper>
        {(food&&food.count)>0?<div
          className="cart-decrease"
          onClick={decrease}
        >
          <span className="inner icon-remove_circle_outline" />
        </div>:null}
        {(food&&food.count) > 0 ? <div className="cart-count">{food.count}</div> : null}
        <div className="cart-add icon-add_circle" onClick={add} />
      </CartWrapper>
    )
}
