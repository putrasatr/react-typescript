import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    image: string;
    text?: string;
}

const Item: React.FC<Props> = ({ image, text }) => {
    const imageName = image.split("/")[3].split(".")[0]
    return (
        <div className="item__img">
            <Link to={`/detail/${imageName}`} >
                <img src={image} alt="" />
            </Link>
        </div>
    )
};

export default Item