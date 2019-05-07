import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/module/home'
import Header from './components/Header'
class Home extends Component {
  
  render() {
    const { seller, goods, ratings } = this.props;
    if (seller && goods && ratings) { 
      console.log(seller);
      return (
        <div>
          <Header data={seller}/>
        </div>
      )
    } else {
      return (
        <div>没有数据</div>
      )
    }
    
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
