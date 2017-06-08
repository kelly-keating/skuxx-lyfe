
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import rootReducer from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store is a function
const store = (history) => {
  return createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )
}

export default store
