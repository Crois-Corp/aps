import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer, { initialState } from '.'

import { IAppState } from '../types'
import { thunk } from 'redux-thunk'

export const state: IAppState = {
  ...initialState,

  dashboard: Object.assign({}, initialState.dashboard),
  sales: Object.assign({}, initialState.sales),
  plan: Object.assign({}, initialState.plan),
  user: Object.assign({}, initialState.user),
  information: Object.assign({}, initialState.information),
  delivery: Object.assign({}, initialState.delivery)
}

const middlewares = [thunk]

// Redux DevTools 확장 프로그램 연결
const composeEnhancers = 
  (typeof window !== 'undefined' && 
   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const configureStore = () =>
  createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
  )

export default configureStore
