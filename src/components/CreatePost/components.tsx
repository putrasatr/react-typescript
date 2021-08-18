import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ItemList from "./itemList"

interface Props {
    id?: string;
    productId: string;
}

const Component = ({ match }: RouteComponentProps<Props>) => {
    const { params } = match
    const [text, setInputText] = React.useState('')
    const [data, setData] = React.useState<never[] | string[]>([])
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
                setData((prevData: string[]) => [...prevData, text])
            }
        },
        [setInputText]
    );
    return (
        <div className="form">
            <input
                value={text}
                onChange={handleChange}
                autoFocus
                onBlur={() => console.log("okay")}
                onKeyDown={handleSubmit}
                className="form__input" />
            <ItemList data={data} params={params}/>
        </div>
    )
};

export default Component