import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Goods from '../Goods'
import Rating from '../Rating'
import Seller from '../Seller'
import {
  TabWrapper
} from './style'
export default class TabContainer extends Component {
  render() {
    const active = {
      color: 'rgb(240, 20, 20)'
    }
    return (
      <TabWrapper>
        <NavLink className="tab-item" activeStyle={active} to='/goods'>商品</NavLink>
        <NavLink className="tab-item" activeStyle={active} to='/ratings'>评论</NavLink>
        <NavLink className="tab-item" activeStyle={active} to='/seller'>商家</NavLink>
      </TabWrapper>
    )
  }
}
