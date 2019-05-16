import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CartWrapper } from './style'

export default props => {
  const { food, addGood, navId, decreaseGood, good } = props
  const add = e => {
    const _food_ = food ? food : good
    addGood(Object.assign({}, _food_, {
      navId
    }))
    e.stopPropagation()
  }
  const decrease = e => {
    decreaseGood(food.id, navId)
    e.stopPropagation()
  }
  return (
    <CartWrapper>
      <CSSTransition
        unmountOnExit
        in={food&&food.count>0}
        timeout={400}
        appear={true}
        classNames="move"
      >
        <div className="cart-decrease" onClick={decrease}>
          <span className="inner icon-remove_circle_outline" />
        </div>
      </CSSTransition>
      {(food && food.count) > 0 ? (
        <div className="cart-count">{food.count}</div>
      ) : null}
      <div className="cart-add icon-add_circle" onClick={add} />
    </CartWrapper>
  )
}
