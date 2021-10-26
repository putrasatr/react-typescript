export type PropsRoute = {
    home: string;
    add?: string;
    match?: object | string;
};
export const userData = {
    username: "Putra",
    password: "putra234"
}

// export const API_URL = "http://localhost:3002/"
// export const API_URL_GQL = "http://localhost:4001/graphql"
// export const API_URL_OTOBAI = "http://localhost:4001/"

// export const API_URL = "http://192.168.1.58:3002/"
// export const API_URL_GQL = "http://192.168.1.58:4001/graphql"
// export const API_URL_OTOBAI = "http://192.168.1.58:4001/"

export const API_URL = process.env.REACT_APP_API_URL
export const API_URL_GQL = process.env.REACT_APP_API_URL_GQL
export const API_URL_OTOBAI = process.env.REACT_APP_API_URL_OTOBAI