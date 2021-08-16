import React from "react";

type ListProps = {
    data?: any;
}

export default class ItemList extends React.Component<ListProps> {
    render() {
        const { data } = this.props
        return (
            <div className="col__item"> 
                {data.map((item: string, i: number) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        )
    }
}
