import { Action, DataType } from '../actions'

export interface ResponAdd {
    data: DataType,
    isSuccess: boolean,
    isLoading: boolean,
    filename: string,
    status: boolean
    isSetImageLoading: boolean
}
const initialState = {
    data: false,
    isSuccess: false,
    isLoading: false,
    filename: "",
    status: false,
    isSetImageLoading: false
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
        case "SET_IMAGE":
            return {
                ...state,
                filename: action.filename,
                status: action.status
            }
        case "DELETE_IMAGE":
            return {
                ...state,
                isSetImageLoading: action.isLoading,
                filename: action.filename,
                status: action.status
            }
        case "SET_IMAGE_LOADING":
            return { ...state, isSetImageLoading: action.isSetImageLoading }
        default:
            return state
    }
}
export default post