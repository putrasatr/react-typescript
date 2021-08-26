import { combineReducers } from 'redux'
import accessToken, { AccessToken } from './login'
import gallery, { ResponData } from './gallery'

export interface State {
    accessToken: AccessToken;
    gallery: ResponData;
}

export default combineReducers<State>({
    accessToken,
    gallery
})
