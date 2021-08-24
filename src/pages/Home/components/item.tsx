import React from 'react';
// import { Link } from 'react-router-dom';

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
        <div className="item__img">
            <span>{_id}</span>
            <span>{image}</span>
            <span>{created_date}</span>
            <span>{description}</span>
            <span>{engine_volume}</span>
        </div>
    )
};

export default Item