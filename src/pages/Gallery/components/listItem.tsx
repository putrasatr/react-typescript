import React from 'react';
import Item from "./item"
import { ItemProps } from "./item";

interface Props {
    data: ItemProps[];
}

const ListItem: React.FC<Props> = ({ data }) => {
    return (
        <div className="col__items">
            {data.map((item, i) => (
                <Item item={item} key={i} />
            ))}
        </div>
    )
};

export default ListItem