import React, { Component } from 'react';
import {LoadingWrapper, LoadingImg, LoadingText } from './style'

class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
        <LoadingImg/>
        <LoadingText>正在加载...</LoadingText>
      </LoadingWrapper>
    );
  }
}

export default Loading;