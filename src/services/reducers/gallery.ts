import { Action, DataType } from '../actions'
// States' definition
export interface ResponData {
    data: DataType;
}

const gallery = (
    state: ResponData = { data: [] },
    action: Action): ResponData => {
    switch (action.type) {
        case 'LOAD_DATA':
            return { ...state, data: action.data }
        case "LOAD_DATA_FAILED":
            return { ...state, data: action.data }
        case "LOAD_DATA_VIEW":
            console.log([...state.data, action.data])
            return {
                ...state,
                data: [...state.data, action.data]
            }
        default:
            return state
    }
}
export default gallery