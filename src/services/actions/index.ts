import { axiosClient } from "./connect";

export const getNews = async () => {
    const { data } = await axiosClient.get("news/list")
    return new Promise(resolve => {
        if (data)
            resolve(data)
        resolve([])
    })
}