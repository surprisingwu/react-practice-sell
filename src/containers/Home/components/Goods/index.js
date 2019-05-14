import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import { GoodsWrapper, GoodsNav, GoodsDetail } from './style'
import SupportIcon from '../../../../components/SupportIcon'
class Goods extends Component {
  constructor(props) {
    super(props)
    this.menuWrapper = React.createRef()
    this.foodsWrapper = React.createRef()
    this.state = {
      activeIndex: 0,
      listHeight: []
    }
  }
  getIndex = () => {
    const { listHeight } = this.state
    for (let i = 0; i < listHeight.length; i++) {
      let height1 = listHeight[i];
      let height2 = listHeight[i + 1];
      if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
        this.followScroll(i);
        return i;
      }
    }
    return 0;
  }
  scrollHandler = pos => {
    if (pos.y <= 0) {
      this.scrollY = Math.abs(Math.round(pos.y))
    }
    this.getIndex()
  }
  componentDidMount() {
    this.menuScroll = new BScroll(this.menuWrapper.current, {
      click: true
    })
    this.foodsScroll = new BScroll(this.foodsWrapper.current, {
      click: true,
      probeType: 3
    })
    this.calculateHeight()
    this.foodsScroll.on('scroll', this.scrollHandler)
  }
  componentWillUnmount() {
    this.foodsScroll.off(this.scrollHandler)
  }
  calculateHeight = () => {
    const { listHeight } = this.state
    const foodList = this.foodsWrapper.current.querySelectorAll('li.goods-list');
    let height = 0;
    listHeight.push(height);
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      listHeight.push(height);
    }
  }
  followScroll = index => {
    let menuList = this.menuWrapper.current.querySelectorAll('li.nav-item');
    let el = menuList[index]
    this.setActiveIndex(index)
    this.menuScroll.scrollToElement(el, 300, 0, -100)
  }
  setActiveIndex = i => {
    this.setState({
      activeIndex: i
    })
  }
  selectMenu = index => {
    const foodList = this.foodsWrapper.current.querySelectorAll('li.goods-list')
    let el = foodList[index]
    this.setActiveIndex(index)
    this.foodsScroll.scrollToElement(el, 300)
  }
  render() {
    const { goods } = this.props
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
                  onClick={e => this.selectMenu(k, e)}
                >
                  <div className="content">
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
                        <li className="list" key={j}>
                          <Link to={`/detail/${i}`} className="list-item">
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
                            </div>
                          </Link>
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
  goods: state.home.goods
})

const mapDispatch = dispatch => ({})

export default connect(
  mapState,
  mapDispatch
)(Goods)