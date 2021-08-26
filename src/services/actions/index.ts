import { apolloCllient } from "./connect";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { GET_BIKE } from "../../graphql";
export type DataType = object[] | boolean | []
export interface SetAction {
    type: 'SET'
    accessToken: string
}
export interface LoadAction {
    type: "LOAD_DATA"
    data: DataType;
}
export interface SetFetcing {
    type: 'SET_FETCHING'
    isFetching: boolean
}
export type Action =
    SetAction
    | SetFetcing
    | LoadAction
export const set = (accessToken: string): SetAction => {
    return { type: 'SET', accessToken }
}
export const isFetching = (isFetching: boolean): SetFetcing => {
    return { type: 'SET_FETCHING', isFetching }
}
export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>((resolve) => {
            dispatch(isFetching(true))
            console.log('Login in progress')
            setTimeout(() => {
                dispatch(set('this_is_access_token'))
                setTimeout(() => {
                    dispatch(isFetching(false))
                    console.log('Login done')
                    resolve()
                }, 1000)
            }, 3000)
        })
    }
}

// Load Data Home Page
export const getDataSuccess = (data: DataType): LoadAction => {
    return { type: 'LOAD_DATA', data }
}

export const getBike = (bikeId?: string | "", keyword?: string | ""): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>((resolve) => {
            apolloCllient.query({
                query: GET_BIKE,
                variables: {
                    bikeId,
                    keyword
                }
            }).then(({ data: { otobai } }) => {
                dispatch(getDataSuccess(otobai.items))
            }).catch(err => console.log(err))
        })
    }
}
