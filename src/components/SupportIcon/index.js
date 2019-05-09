import React from 'react'
import {SupportIcon} from './style'

export default (props) =>{
  const { size, type } = props
 const  iconCls = () => {
    const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    return `support-icon-${size} ${classMap[type]}`
  }
    return (
      <SupportIcon className={`support-ico ${iconCls()}`}></SupportIcon>
    )
}
