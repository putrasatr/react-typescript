import { apolloCllient } from "./connect";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { GET_BIKE } from "../../graphql";
import { checkUser } from "../../helpers";
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
export interface SetLogin {
    type: 'SET_LOGIN'
    status: boolean
    msg: string,
    accessToken: string
}
export type Action =
    LoadAction
    | SetLogin
export const setLogin = (msg: string, status: boolean, accessToken: string): SetLogin => ({ type: "SET_LOGIN", msg, status, accessToken })

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                await checkUser(username, password)
                dispatch(setLogin("Welcome", true,"fasklnfdlsinlkwe2314"))
                resolve()
            } catch (error) {
                dispatch(setLogin("username or password not found", false,""))
            }
        })
    }
}

// Load Data Home Page
export const getDataSuccess = (data: DataType): LoadAction => {
    return { type: 'LOAD_DATA', data }
}

export const getBike = (bikeId?: string | "", keyword?: string | ""): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                const { data: { otobai } } = await apolloCllient.query({
                    query: GET_BIKE,
                    variables: {
                        bikeId,
                        keyword
                    }
                })
                dispatch(getDataSuccess(otobai.items));
                resolve()
            } catch (error) {
                console.log(error)
            }
        })
    }
}
