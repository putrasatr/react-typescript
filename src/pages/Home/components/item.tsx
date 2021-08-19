import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    image: string;
    text?: string;
}

const Item: React.FC<Props> = ({ image, text }) => {
    const imgName = image.split("/")[3]
    console.log(imgName)
    return (
        <div className="item__img">
            <Link to={`/detail/${imgName}`}>
                <img src={image} alt="" />
            </Link>
        </div>
    )
};

export default Item