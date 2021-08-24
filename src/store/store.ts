import { createStore, combineReducers, applyMiddleware } from 'redux'
import stateReducer, { State } from '../services/reducers'
import thunk from 'redux-thunk'

export interface RootState {
  stateReducer: State
}
export default createStore(combineReducers<RootState>({
  stateReducer
}), applyMiddleware(thunk))