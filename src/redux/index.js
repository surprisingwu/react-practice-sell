import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './module'
import api from './middleware/api'

let store

if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, api))
  )
} else {
  store = createStore(reducer, applyMiddleware(thunk,api))
}

export default store
