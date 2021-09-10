import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "./listItem";
import { getBike } from "../../../services/actions";
import { RootState } from "../../../store/store";



interface Props {

}

const Gallery: React.FC<Props> = (): JSX.Element => {
    const dispatch = useDispatch()
    const { data }: any = useSelector<RootState>(({ state: { gallery } }) => gallery)
    useEffect(() => {
        dispatch(getBike("", ""))
    }, [dispatch])
    return (
        <div className="main__wrapper">
            {data
                ? <ListItem data={data} />
                : <h1>Error Connection</h1>}
        </div>
    )
}

export default Gallery