import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actions} from '../../redux/module/home'
class Home extends Component {
  
  render() {
    return (
      <div>
        我是home
      </div>
    )
  }
  componentDidMount() {
    this.props.getSellerData()
  }
}

const mapState = (state) => ({
  seller: state.home.seller,
  goods: state.home.goods,
  ratings: state.home.ratings
})
const mapDispatch = (dispatch) => ({
  getSellerData() { 
    dispatch(actions.loadShopData())
  }
})
export default connect(mapState, mapDispatch) (Home)
