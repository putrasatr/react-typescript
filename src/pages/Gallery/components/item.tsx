import Fade from 'react-reveal/Fade';
import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL_OTOBAI } from '../../../constants';

export type ItemProps = {
    _id: number;
    image: string;
    description: string;
    created_date: string;
    brand: string;
}
interface Props {
    item: ItemProps;
    text?: string;
}

const Item: React.FC<Props> = ({ item, text }) => {
    const { _id, image, brand, description } = item
    return (
        <Fade bottom>
            <div className="item container__item">
                <Link to={`/detail/${_id}`}>
                    <img src={API_URL_OTOBAI + image} alt="" className="item__image" />
                </Link>
                <Link to="/post/12">
                    <div className="item__card__brand">
                        <strong>{brand}</strong>
                    </div>
                </Link>
                <Link to={`/detail/${_id}`}>
                    <div className="item__card">
                        <span>{description}</span>
                    </div>
                </Link>
            </div>
        </Fade>
    )
};

export default Item