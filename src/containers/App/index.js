import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {GlobalStyle} from '../../style'
import Home from '../Home'
import Detail from '../Detail'
import ErrorToast from '../../components/ErrorToast'
import {actions} from '../../redux/module/app'

class App extends Component {
  render() {
    const {error, clearError} = this.props
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path={`/detail/:id`} component={Detail}/>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
        <GlobalStyle />
        {error ? <ErrorToast msg={error} clearError={clearError} />:''}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  error: state.app.error
})

const mapDispatchToProps = (dispatch) => ({
  clearError() {
    dispatch(actions.clearError())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
