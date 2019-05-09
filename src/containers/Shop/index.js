import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { ShopWrapper, ShopClose, ShopBackground } from './style'

export default (props) => {
  const { close, flag } = props
  return (
    <ShopWrapper>
      <CSSTransition in={flag} timeout={500} classNames="shop-fade">
        <ShopClose onClick={() => close()}>
          <i className="icon-close" />
        </ShopClose>
        <ShopBackground />
      </CSSTransition>
    </ShopWrapper>
  )
}
