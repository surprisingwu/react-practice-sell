import React from 'react'
import {StarWrapper} from './style'

const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default (props) =>{
  const { size, score: _score_ } = props;
  const startType = `star-${size}`;
  const itemClasses = () => {
    let result = []
    const score = Math.floor(_score_ * 2) / 2
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
  };
    return (
      <StarWrapper className={`${startType}`}>
        {itemClasses().map((itemClass, index) => 
          <span className={`star-item ${itemClass}`} key={index}></span>
      )}
    </StarWrapper>
    )
}
