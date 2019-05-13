import React, { Component } from 'react'
import { GoodsWrapper, GoodsNav, GoodsDetail } from './style'

export default class Goods extends Component {
  render() {
    return (
      <GoodsWrapper>
        <GoodsNav>nav</GoodsNav>
        <GoodsDetail>
          <div className="container">
            <ul className="goods-list">
              <li className="list">
                <div className="title">单人特色套餐</div>
                <ul className="good-list">
                  <li className="list-item">
                    <img className="img" src="" alt="" />
                    <div className="content">
                      <h2 className="title">皮蛋瘦肉粥</h2>
                      <div className="desc">咸粥</div>
                      <div className="sell-info">
                        <span className="sell-count">月售1132份</span>
                        <span className="rating">好评率100%</span>
                      </div>
                      <div className="price">
                        <span className="now">¥24</span>
                        <span className="old">¥28</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </GoodsDetail>
      </GoodsWrapper>
    )
  }
}
