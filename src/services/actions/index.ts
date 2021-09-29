import { apolloCllient, axiosClient } from "./connect";
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { GET_BIKE, ADD_BIKE } from "../../graphql";
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
export interface AddAction {
    type: "ADD_DATA"
    data: DataType
}
export interface SetFetcing {
    type: 'SET_FETCHING'
    isFetching: boolean
}
// export interface FileList
export interface SetLogin {
    type: 'SET_LOGIN'
    status: boolean
    msg: string,
    accessToken: string
}
export interface InputProps {
    brand?: string
    engine_volume?: string
    description?: string
}
export type Action =
    LoadAction
    | SetLogin
    | AddAction
export const setLogin = (msg: string, status: boolean, accessToken: string): SetLogin => ({ type: "SET_LOGIN", msg, status, accessToken })

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                await checkUser(username, password)
                dispatch(setLogin("Welcome", true, "fasklnfdlsinlkwe2314"))
                resolve()
            } catch (error) {
                dispatch(setLogin("username or password not found", false, ""))
            }
        })
    }
}

// Load Data Home Page
export const getDataSuccess = (data: DataType): LoadAction => {
    return { type: 'LOAD_DATA', data }
}

export const addDataSuccess = (data: DataType): AddAction => {
    return { type: 'ADD_DATA', data }
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

export const addBike = (body: InputProps): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                const { brand, description, engine_volume } = body
                const { data: { add } } = await apolloCllient.mutate({
                    mutation: ADD_BIKE,
                    variables: {
                        brand,
                        engine_volume,
                        description,
                        image: ""
                    }
                })
                dispatch(addDataSuccess(add));
                resolve()
            } catch (error) {
                console.log(error)
            }
        })
    }
}

export const postImage = (file: Blob | string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            try {
                let formData = new FormData();
                formData.append('image', file)
                const response = await axiosClient.post("/api/image", formData)
                console.log("response", response.data)
                resolve()
            } catch (error) {
                console.log(error)
            }
        })
    }
}