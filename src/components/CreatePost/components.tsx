import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"

import { addBike, InputProps } from "../../services/actions"
import { RootState } from "../../store/store"

interface Props {
    id?: string;
    productId: string;
}
// type DataProps = { [data: string]: string }


const Component = ({ match }: RouteComponentProps<Props>) => {
    const { params } = match
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { isLoading, isSuccess }: any = useSelector<RootState>(({ state }) => state.post)
    const onSubmit = useCallback(
        (body: InputProps) => {
            dispatch(addBike(body))
        },
        [dispatch],
    )
    if (isSuccess) alert("Success Add Bike")
    if (isLoading) console.log("Loading")
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
                <div className="form__header">
                    <span>Create A Bike {params.id}</span>
                </div>
                <div className="form__input">
                    <label htmlFor="brand">Brand</label>
                    <input
                        autoComplete="off"
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
                        autoComplete="off"
                        placeholder="Please enter engine volume"
                        className="form__input__control"
                        {...register("engine_volume")} />
                </div>
                <div className="form__input">
                    <label htmlFor="ev">Description (optional)</label>
                    <textarea
                        id="ev"
                        autoComplete="off"
                        {...register("description")}
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