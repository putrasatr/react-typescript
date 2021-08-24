import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PropsRoute } from "../../../constants";
import ListItem from "./listItem";
import { RootState } from "../../../store/store";
import { getBike } from "../../../services/actions";

const Home: React.FC<PropsRoute> = (): JSX.Element => {
    const dispatch = useDispatch()
    const { data }: any = useSelector<RootState>(({ stateReducer: { home } }) => home)
    useEffect(() => {
        dispatch(getBike(0, 2))
    }, [dispatch])
    return (
        <div className="main__wrapper">
            {data
                ? <ListItem data={data} />
                : <h1>Error Connection</h1>}
        </div>
    )
}
export default Home