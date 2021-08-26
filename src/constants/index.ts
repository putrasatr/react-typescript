export type PropsRoute = {
    home: string;
    add?: string;
    match?: object | string;
};
export type Props = {
    children?: any;
}

// export const API_URL = "http://localhost:3002/"
// export const API_URL_GQL = "http://localhost:4001/graphql"
// export const API_URL_OTOBAI = "http://localhost:4001/"

export const API_URL = "http://192.168.1.58:3002/"
export const API_URL_GQL = "http://192.168.1.58:4001/graphql"
export const API_URL_OTOBAI = "http://192.168.1.58:4001/"