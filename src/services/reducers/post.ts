import { Action, DataType } from '../actions'

export interface ResponAdd {
    data: DataType,
    isSuccess: boolean,
    isLoading: boolean
}
const initialState = {
    data: false,
    isSuccess: false,
    isLoading: false
}
const post = (
    state: ResponAdd = initialState,
    action: Action
): ResponAdd => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                data: action.data,
                isSuccess: true,
                isLoading: false

            }

        default:
            return state
    }
}
export default post