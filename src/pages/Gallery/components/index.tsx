import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "./listItem";
import { getBike } from "../../../services/actions";
import { RootState } from "../../../store/store";
import { useQuery } from "react-query";

interface Props {

}

const Gallery: React.FC<Props> = (): JSX.Element => {
    const dispatch = useDispatch()
    const { data }: any = useSelector<RootState>(({ state: { gallery } }) => gallery)
    const { isLoading, isFetching } = useQuery(
        ["gallery", dispatch], () => {
            dispatch(getBike("", ""))
            return []
        },
        { keepPreviousData: true, retry: false, refetchOnWindowFocus: false, }
    )
    return (
        <div className="main__wrapper">
            {isLoading || isFetching
                ? <h1>Loading...</h1>
                : data
                    ? <ListItem data={data} />
                    : <h1>Error Connection...</h1>
            }
        </div>
    )
}

export default Gallery