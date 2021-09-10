import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { API_URL_OTOBAI } from '../../../constants';
import { getBike, getDataSuccess } from '../../../services/actions';
import { ResponData } from '../../../services/reducers/gallery';
import { RootState } from '../../../store/store';

type Props = {
    bikeId: string;
}

const DetailItem = ({ match }: RouteComponentProps<Props>) => {
    const { params: { bikeId } } = match
    const dispatch = useDispatch()
    const { data }: any = useSelector<RootState>(({ state: { gallery } }): ResponData => gallery)

    useEffect(() => {
        dispatch(getBike(bikeId, ""))
        return () => {
            dispatch(getDataSuccess([]))
        }
    }, [dispatch, bikeId])

    return (
        <div>
            <img src={API_URL_OTOBAI + data[0].image} alt="" style={{ width: '200px', height: "100px" }} />
        </div>
    )
};

export default DetailItem