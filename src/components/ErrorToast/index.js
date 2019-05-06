import React, { Component } from 'react';
import {ErrorToastContent, ErrorToastWrapper } from "./style.js";

class ErrorToast extends Component {
  render() {
    const { msg } = this.props
    return (
      <ErrorToastWrapper>
        <ErrorToastContent>
          {msg}
        </ErrorToastContent>
      </ErrorToastWrapper>
    );
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.clearError();
    }, 3000);
  }

  componentWillUnmount() {
    if(this.timer) {
      clearTimeout(this.timer)
    }
  }
}

export default ErrorToast;