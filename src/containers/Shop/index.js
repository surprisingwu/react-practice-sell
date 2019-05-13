import React from 'react'
import { CSSTransition } from 'react-transition-group'
import SupportIcon from '../../components/SupportIcon'
import {
  ShopWrapper,
  ShopContainer,
  ShopTittle,
  ShopSupports,
  ShopSupport,
  ShopBulletin,
  ShopClose,
  ShopBackground,
  ShopSubTitle
} from './style'
import Star from '../../components/Star'
export default props => {
  const { hide, isShow, data } = props
  const { supports, bulletin, name, score } = data;
  return (
    <CSSTransition
      unmountOnExit
      in={isShow}
      timeout={300}
      appear={true}
      classNames="shop-fade"
    >
      <ShopWrapper key={Symbol('shop').toString()}>
        <ShopContainer>
          <ShopTittle>{name}</ShopTittle>
          <Star size={48} score={score} />
          <ShopSubTitle>
            <div className="line"></div>
            <h2 className="title">优惠信息</h2>
            <div className="line"></div>
          </ShopSubTitle>
          <ShopSupports>
            {supports.map((item, index) => {
              return <ShopSupport key={index}>
                <SupportIcon size={2} type={item.type} />
                <span className="desc">{item.description}</span>
              </ShopSupport>
            })}
          </ShopSupports>
          <ShopSubTitle>
            <div className="line"></div>
            <h2 className="title">商品公告</h2>
            <div className="line"></div>
          </ShopSubTitle>
          <ShopBulletin>{bulletin}</ShopBulletin>
        </ShopContainer>
        <ShopClose onClick={() => hide()}>
          <i className="icon-close" />
        </ShopClose>
        <ShopBackground />
      </ShopWrapper>
    </CSSTransition>
  )
}
