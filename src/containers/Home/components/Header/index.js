import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='header'>
        <div className="header-info">
          <div className="header-content">
            <div className="header-img">
              <img src={data.avatar} alt=""/>
            </div>
            <div className="header-desc">
              <h2 className="title">{data.name}</h2>
              <span className="specialty">{data.description}/{data.deliveryTime}分钟送达</span>
              <div className="activity">
                <div className="desc">
                  <i className="icon"></i>
                  <span className="text">{data.supports[0].description}</span>
                </div>
                <div className="count">{data.supports.length}个<i className="icon"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bulletin">
          <img src="" className="" alt=""/>
          <div className="desc">{data.bulletin}</div>
          <i className="icon"></i>
        </div>
      </div>
    )
  }
}
