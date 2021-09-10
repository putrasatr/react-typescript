import { Action } from "../actions"
export interface AccessToken {
    isFetching: boolean;
    accessToken?: string;
    status: boolean;
    msg: string
}
const accessToken = (
    state: AccessToken = { isFetching: false, status: true, msg: "" },
    action: Action): AccessToken => {
    switch (action.type) {
        case 'SET_LOGIN':
            if (action.status) {
                localStorage.setItem("Auth", action.accessToken)
                window.location.href = "/"
            }
            return { ...state, msg: action.msg, status: action.status }
        default:
            return state
    }
}

export default accessToken