import { Action, DataType } from '../actions'
// States' definition
export interface ResponData {
    data: DataType;
}

const gallery = (
    state: ResponData = { data: false },
    action: Action): ResponData => {
    switch (action.type) {
        case 'LOAD_DATA':
            return { ...state, data: action.data }
        default:
            return state
    }
}
export default gallery