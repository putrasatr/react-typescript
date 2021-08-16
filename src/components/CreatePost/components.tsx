import React from "react";
import {
    Link,
    RouteComponentProps
} from "react-router-dom";
import ItemList from "./itemList"

type TParams = {
    id?: string;
    productId: string;
}
type PropsData = object;

const Component = ({ match }: RouteComponentProps<TParams>) => {
    const { params } = match
    const [text, setInputText] = React.useState('')
    const [data, setData] = React.useState<PropsData | any>([])
    const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputText(event.target.value);
        },
        [setInputText]
    );
    const handleSubmit = React.useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.which === 13) {
                const text = event.currentTarget.value.trim();
                setInputText('');
                setData([...data, text])
            }
        },
        [data, setInputText]
    );
    return (
        <div>
            <span>{params.productId}</span>
            <input
                value={text}
                onChange={handleChange}
                autoFocus
                onBlur={() => console.log("okay")}
                onKeyDown={handleSubmit} />
            <Link to="/">
                <span>Back</span>
            </Link>
            <ItemList data={data} />
        </div>
    )
};

export default Component