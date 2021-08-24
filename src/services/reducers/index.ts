import { combineReducers } from 'redux'
import accessToken, { AccessToken } from './login'
import home, { ResponData } from './home'

export interface State {
    accessToken: AccessToken;
    home: ResponData;
}

export default combineReducers<State>({
    accessToken,
    home
})
