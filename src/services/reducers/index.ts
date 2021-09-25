import { combineReducers } from 'redux'
import accessToken, { AccessToken } from './login'
import gallery, { ResponData } from './gallery'
import post,{ResponAdd} from './post'

export interface State {
    accessToken: AccessToken;
    gallery: ResponData;
    post:ResponAdd;
}

export default combineReducers<State>({
    accessToken,
    gallery,
    post
})
