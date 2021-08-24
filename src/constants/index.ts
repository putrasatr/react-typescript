export type PropsRoute = {
    home: string;
    add?: string;
    match?: object | string;
};
export type Props = {
    children?: any;
}

export const API_URL = "http://localhost:3002/"
export const API_URL_GQL = "http://localhost:4001/graphql"