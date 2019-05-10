import React, { Component } from 'react'

export default (props) =>{
  const { size, score } = props
  const startType = `start-${size}`;
  const itemClasses =() => {
    let result = []
    const score = Math.floor(this.score * 2) / 2
    const hasDecimal = score % 1 !== 0
    const integer = Math.floor(score)
    for (let i = 0; i < integer; i++) {
      result.push(CLS_ON)
    }
    if (hasDecimal) {
      result.push(CLS_HALF)
    }
    while (result.length < LENGTH) {
      result.push(CLS_OFF)
    }
    return result
  }
  render() {
    return (
      <div className={`star ${startType}`}>
        {itemClasses.map((itemClass, index) => {
          <span className={`star-item ${itemClass}`} key={index}></span>
      })}
    </div>
    )
  }
}
