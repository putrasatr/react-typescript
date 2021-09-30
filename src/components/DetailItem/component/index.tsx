import React, { useEffect, useState } from 'react';
import Fade from "react-reveal/Fade"
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
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const { data }: any = useSelector<RootState>(({ state: { gallery } }): ResponData => gallery)
    useEffect(() => {
        setIsLoading(true)
        dispatch(getBike(bikeId, ""))
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => {
            dispatch(getDataSuccess([]))
        }
    }, [dispatch, bikeId])
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Fade bottom>
            <div className="card__detail">
                <h1>{data[0]?.brand}</h1>
                <div className="box__image__detail">
                    <img src={API_URL_OTOBAI + data[0]?.image} alt="" />
                </div>
                <div className="detail__description">
                    <span>{data[0]?.engine_volume.replace(/[A-Za-z]/ig, "")} CC</span>
                    <span>{data[0]?.description}</span>
                </div>
            </div>
        </Fade>
    )
};

export default DetailItem