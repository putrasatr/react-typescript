import { Action } from "../actions"
export interface AccessToken {
    isFetching: boolean;
    accessToken?: string;
}
const accessToken = (
    state: AccessToken = { isFetching: false },
    action: Action): AccessToken => {
    switch (action.type) {
        case 'SET':
            return { ...state, accessToken: action.accessToken }
        case 'SET_FETCHING':
            return { ...state, isFetching: action.isFetching }
        default:
            return state
    }
}

export default accessToken