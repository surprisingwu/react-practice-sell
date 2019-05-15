import {combineReducers} from 'redux'
import home from './home'
import app from './app'
import cart from './cart'

export default combineReducers({
  home,
  app,
  cart
})