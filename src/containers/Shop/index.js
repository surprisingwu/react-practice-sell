import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { ShopWrapper, ShopClose, ShopBackground } from './style'

export default props => {
  const { hide, isShow } = props
  return (
    <CSSTransition
      unmountOnExit
      in={isShow}
      timeout={300}
      appear={true}
      classNames="shop-fade"
    >
      <ShopWrapper key={Symbol('shop').toString()}>
        <ShopClose onClick={() => hide()}>
          <i className="icon-close" />
        </ShopClose>
        <ShopBackground />
      </ShopWrapper>
    </CSSTransition>
  )
}
