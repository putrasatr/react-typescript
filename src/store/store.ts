import { createStore, combineReducers, applyMiddleware } from 'redux'
import state, { State } from '../services/reducers'
import thunk from 'redux-thunk'

export interface RootState {
  state: State
}
export default createStore(combineReducers<RootState>({
  state
}), applyMiddleware(thunk))