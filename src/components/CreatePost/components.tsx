import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props {
    id?: string;
    productId: string;
}
type DataProps = { [data: string]: string }
type InputProps = { [text: string]: string }

const Component = ({ match }: RouteComponentProps<Props>) => {
    const { params } = match
    const [text, setInputText] = React.useState<InputProps>({})
    let [data, setData] = React.useState<DataProps>({})
    const handleChange = React.useCallback(
        ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
            data[name] = value
            text[name] = value
            setInputText(text);
            setData(data)
        },
        [setInputText, data]
    );
    // const handleSubmit = React.useCallback(
    //     (event: React.KeyboardEvent<HTMLInputElement>) => {
    //         if (event.which === 13) {
    //             const text = event.currentTarget.value.trim();
    //             setInputText('');
    //             setData((prevData: string[]) => [...prevData, checkPalindrome(text)])
    //         }
    //     },
    //     [setInputText]
    // );
    return (
        <div className="form">
            <div className="form__header">
                <span>Create A Bike {params.id}</span>
            </div>
            <div>
                <label htmlFor="brand">Brand</label>
                <input
                    id="brand"
                    name="brand"
                    placeholder="Please enter brand name"
                    value={text.brand}
                    onChange={handleChange}
                    autoFocus
                    onBlur={() => console.log("okay")}
                    className="form__input" />
            </div>
            <div>
                <label htmlFor="ev">Engine Volume</label>
                <input
                    id="ev"
                    name="engine_volume"
                    onChange={handleChange}
                    type="number"
                    placeholder="Please enter engine volume"
                    className="form__input" />
            </div>
            <div>
                <label htmlFor="ev">Description</label>
                <textarea
                    id="ev"
                    name="engine_volume"
                    placeholder="Please enter engine volume"
                    className="form__input" />
            </div>
        </div>
    )
};

export default Component