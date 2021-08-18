import React from "react";

type ParamsProps = {
    id?: string;
    productId?: string
}
interface ListProps {
    data?: any;
    params: ParamsProps
}

export default class ItemList extends React.Component<ListProps> {
    render() {
        const { data, params } = this.props
        return (
            <div className="col__item">
                {params.productId}
                {data.map((item: string, i: number) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        )
    }
}
