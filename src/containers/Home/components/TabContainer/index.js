import React, { Component, Fragment } from 'react'
import {NavLink, Route} from 'react-router-dom'
import Goods from '../Goods'
import Rating from '../Rating'
import {
  TabWrapper,
  SellContainer
} from './style'
export default class TabContainer extends Component {
  render() {
    const active = {
      color: 'rgb(240, 20, 20)',
      'border-bottom': '2px solid rgb(240, 20, 20)'
    }
    return (
      <Fragment>
      <TabWrapper>
        <NavLink className="tab-item" exact activeStyle={active} to='/'>商品</NavLink>
        <NavLink className="tab-item" activeStyle={active} to='/ratings'>评论</NavLink>
        <NavLink className="tab-item" activeStyle={active} to='/seller'>商家</NavLink>
        </TabWrapper>
        <SellContainer>
          <Route path="/ratings" component={Rating} />
          <Route path="/" exact component={Goods}/>
        </SellContainer>
        </Fragment>
    )
  }
}
