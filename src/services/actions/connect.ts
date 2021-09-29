import axios from "axios";
import ApolloClient from "apollo-boost";
import { API_URL_OTOBAI, API_URL_GQL } from "../../constants";

export const axiosClient = axios.create({
    baseURL: API_URL_OTOBAI,
    headers: {
        "Authentication": `Bearer ${localStorage.getItem("auth")}`,
        "Accept": "*/*"
    }
})

export const apolloCllient = new ApolloClient({
    uri: API_URL_GQL
})