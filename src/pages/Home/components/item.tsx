import React from 'react';
import { API_URL_OTOBAI } from '../../../constants';

export type ItemProps = {
    _id: number;
    image: string;
    description: string;
    created_date: string;
    engine_volume: string;
}
interface Props {
    item: ItemProps;
    text?: string;
}

const Item: React.FC<Props> = ({ item, text }) => {
    const { _id, image, created_date, description, engine_volume } = item
    return (
        <div className="item">
            <span>{_id}</span>
            <span>{created_date}</span>
            <span>{description}</span>
            <span>{engine_volume}</span>
            <img src={API_URL_OTOBAI + image} alt="" />
        </div>
    )
};

export default Item