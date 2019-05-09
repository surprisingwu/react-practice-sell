import React, { useState,Fragment } from 'react'
import ShopInfo from '../../../Shop'
import SupportIcon from '../../../../components/SupportIcon'
import {
  MyHeader,
  HeaderInfo,
  HeaderBulletin,
  HeaderContent,
  HeaderImg,
  HeaderDesc,
  HeaderTitle,
  HeaderSpecialty,
  HeaderActivity,
  HeaderBackground
} from './style'
export default props => {
  const [showShopInfo, setShopInfo] = useState(false)
  const { data } = props
  return (
    <Fragment>
      <MyHeader onClick={() => setShopInfo(true)}>
        <HeaderInfo>
          <HeaderContent>
            <HeaderImg>
              <img className="img" src={data.avatar} alt="" />
            </HeaderImg>
            <HeaderDesc>
              <HeaderTitle>
                <i className="icon" />
                <span className="name">{data.name}</span>
              </HeaderTitle>
              <HeaderSpecialty>
                {data.description}/{data.deliveryTime}分钟送达
              </HeaderSpecialty>
              <HeaderActivity>
                <div className="desc">
                  <SupportIcon size="1" type={data.supports[0].type} />
                  <span className="text">{data.supports[0].description}</span>
                </div>
                <div className="count">
                  {data.supports.length}个
                  <i className="icon-keyboard_arrow_right" />
                </div>
              </HeaderActivity>
            </HeaderDesc>
          </HeaderContent>
        </HeaderInfo>
        <HeaderBulletin>
          <span className="icon" />
          <span className="desc">{data.bulletin}</span>
          <i className="arrow icon-keyboard_arrow_right" />
        </HeaderBulletin>
        <HeaderBackground>
          <img src={data.avatar} alt="" width="100%" height="100%" />
        </HeaderBackground>
      </MyHeader>
      <ShopInfo flag={showShopInfo} close={() => setShopInfo(false)} />
    </Fragment>
  )
}
