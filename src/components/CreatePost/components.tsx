import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    useQuery
} from "react-query";
import { useForm } from "react-hook-form";

interface Props {
    id?: string;
    productId: string;
}
// type DataProps = { [data: string]: string }
type InputProps = { [text: string]: string }

const Component = ({ match }: RouteComponentProps<Props>) => {
    const { params } = match
    const { register, handleSubmit } = useForm()
    const { data } = useQuery(
        ["getOtobai"],
        () => {

        },
        { keepPreviousData: true, refetchOnReconnect: true, refetchOnWindowFocus: false }
    )

    const onSubmit = useCallback(
        (body: InputProps) => {
            console.log(body)
            console.log(data)
        },
        [data],
    )
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
                <div className="form__header">
                    <span>Create A Bike {params.id}</span>
                </div>
                <div className="form__input">
                    <label htmlFor="brand">Brand</label>
                    <input
                        id="brand"
                        placeholder="Please enter brand name"
                        autoFocus
                        className="form__input__control"
                        {...register("brand")} />
                </div>
                <div className="form__input">
                    <label htmlFor="ev">Engine Volume</label>
                    <input
                        id="ev"
                        type="number"
                        placeholder="Please enter engine volume"
                        className="form__input__control"
                        {...register("engine_volume")} />
                </div>
                <div className="form__input">
                    <label htmlFor="ev">Description (optional)</label>
                    <textarea
                        id="ev"
                        name="engine_volume"
                        placeholder="Please enter description"
                        className="form__input__control" />
                </div>
                <div className="form__input">
                    <button className="form__input__button" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
};

export default Component