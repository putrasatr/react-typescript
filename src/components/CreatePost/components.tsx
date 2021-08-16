import React from "react";
import {
    Link,
    RouteComponentProps
} from "react-router-dom";

type TParams = {
    id?: string;
    productId: string;
}

const Component = ({ match }: RouteComponentProps<TParams>) => {
    const { params } = match

    return (
        <div>
            <span>{params.productId}</span>
            <input />
            <Link to="/">
                <span>Back</span>
            </Link>
        </div>
    )
};

export default Component