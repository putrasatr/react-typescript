import React from 'react';
import Item from "./item"

interface Props {
    data: string[];
}

const ListItem: React.FC<Props> = ({ data }) => {
    return (
        <div className="col__items">
            {data.map((item, i) => (
                <Item image={item} key={i} />
            ))}
        </div>
    )
};

export default ListItem