import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { ShopWrapper, ShopClose, ShopBackground } from './style'

export default props => {
  const { hide, isShow } = props
  return (
    <CSSTransition
      unmountOnExit={true}
      in={isShow}
      timeout={300}
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
