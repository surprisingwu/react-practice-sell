import React, { Component } from 'react'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import { GoodsWrapper, GoodsNav, GoodsDetail } from './style'
import SupportIcon from '../../../../components/SupportIcon'
import CartControl from '../../../../components/CartControl'
import { actions as cartActions } from '../../../../redux/module/cart'
class Goods extends Component {
  constructor(props) {
    super(props)
    this.menuWrapper = React.createRef()
    this.foodsWrapper = React.createRef()
    this.preventScroll = false;
    this.state = {
      activeIndex: 0,
      listHeight: []
    }
    // this.activeEl = React.createRef()
  }
  getIndex = () => {
    const { listHeight } = this.state
    for (let i = 0; i < listHeight.length; i++) {
      let height1 = listHeight[i]
      let height2 = listHeight[i + 1]
      if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
        this.followScroll(i)
        return i
      }
    }
    return 0
  }
  scrollHandler = pos => {
    if(this.preventScroll) return
    if (pos.y <= 0) {
      this.scrollY = Math.abs(Math.round(pos.y))
    }
    // 点击左边tab栏的时候, 只滚动右边的goods
    this.getIndex()
  }
  scrollEndHandler = () => {
    this.preventScroll && (this.preventScroll = false);
  }
  componentDidMount() {
    console.log(this.props)
    this.menuScroll = new BScroll(this.menuWrapper.current, {
      click: true
    })
    this.foodsScroll = new BScroll(this.foodsWrapper.current, {
      click: true,
      probeType: 3
    })
    this.calculateHeight()
    this.foodsScroll.on('scroll', this.scrollHandler)
    this.foodsScroll.on('scrollEnd', this.scrollEndHandler)
  }
  componentWillUnmount() {
    this.foodsScroll.off('scroll',this.scrollHandler)
    this.foodsScroll.off('scrollEnd',this.scrollEndHandler)
  }
  calculateHeight = () => {
    const { listHeight } = this.state
    const foodList = this.foodsWrapper.current.querySelectorAll('li.goods-list')
    let height = 0
    listHeight.push(height)
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i]
      height += item.clientHeight
      listHeight.push(height)
    }
  }
  followScroll = index => {
    let menuList = this.menuWrapper.current.querySelectorAll('li.nav-item')
    let el = menuList[index]
    this.setActiveIndex(index)
    this.menuScroll.scrollToElement(el, 300, 0, -100)
  }
  goToDetail = (id) => {
    this.props.history.push(`/detail/${id}`)
  }
  setActiveIndex = i => {
    this.setState({
      activeIndex: i
    })
  }
  selectMenu = (index) => {
    const foodList = this.foodsWrapper.current.querySelectorAll('li.goods-list')
    let el = foodList[index]
    this.setActiveIndex(index)
    this.preventScroll = true
    this.foodsScroll.scrollToElement(el, 300)
  }
  render() {
    const { goods, cart, addGood, decreaseGood } = this.props
    const { activeIndex } = this.state
    return (
      <GoodsWrapper>
        <GoodsNav ref={this.menuWrapper}>
          <ul className="nav-container">
            {goods.map((nav, k) => {
              return (
                <li
                  className={`nav-item ${k === activeIndex ? 'active' : ''}`}
                  key={k}
                  onClick={(e) => this.selectMenu(k, e)}
                >
                  <div
                    className="content"
                    style={activeIndex>0&&k===activeIndex-1?{ borderWidth: '0px' }:{}}
                  >
                    <div className="select-good-count">
                      {cart.tips[nav.id]&&cart.tips[nav.id].count>0?<span className="count">{cart.tips[nav.id].count}</span>:null}
                    </div>
                    <div className="title">
                      <SupportIcon type={nav.type} size={3} />
                      {nav.name}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </GoodsNav>
        <GoodsDetail ref={this.foodsWrapper}>
          <ul className="goods-container">
            {goods.map((list, i) => {
              return (
                <li className="goods-list" key={i}>
                  <div className="list-title">{list.name}</div>
                  <ul className="goods">
                    {list.foods.map((item, j) => {
                      return (
                        <li className="list" key={j} onClick={() => this.goToDetail(item.id)}>
                          <div to={`/detail/${i}`} className="list-item">
                            <img className="img" src={item.image} alt="" />
                            <div className="content">
                              <h2 className="title">{item.name}</h2>
                              {item.description ? (
                                <div className="desc txt">
                                  {item.description}
                                </div>
                              ) : null}
                              <div className="sell-info txt">
                                <span className="sell-count txt">
                                  月售{item.sellCount}份
                                </span>
                                <span className="rating txt">
                                  好评率{`${item.rating}%`}
                                </span>
                              </div>
                              <div className="price">
                                <span className="now">¥{item.price}</span>
                                {item.oldPrice ? (
                                  <span className="old">{`¥${
                                    item.oldPrice
                                  }`}</span>
                                ) : null}
                              </div>
                              <div className="cart_control_wrapper">
                                <CartControl
                                  addGood={addGood}
                                  decreaseGood={decreaseGood}
                                  food={cart.foods[item.id]}
                                  navId = {list.id}
                                  good={item}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </GoodsDetail>
      </GoodsWrapper>
    )
  }
}
const mapState = state => ({
  goods: state.home.goods,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  addGood(food) {
    dispatch(cartActions.addCartCount(food))
  },
  decreaseGood(id, navId) {
    dispatch(cartActions.decreaseCartCount(id,  navId))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Goods)
