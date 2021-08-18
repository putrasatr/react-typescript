import React from 'react';

interface Props {
    image: string;
    text?: string;
}

const Item: React.FC<Props> = ({ image, text }) => {
    return (
        <div className="item__img">
            <img src={image} alt="" />
        </div>
    )
};

export default Item