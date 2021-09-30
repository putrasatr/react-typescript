import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"

import { addBike, deleteImage, InputProps, postImage, setImageLoading } from "../../services/actions"
import { RootState } from "../../store/store"
import loadingImg from "../../assets/images/tire.png"

interface Props {
    id?: string;
    productId: string;
}

const Component = ({ match }: RouteComponentProps<Props>) => {
    const { params } = match
    const dispatch = useDispatch()
    const [source, setSource] = useState<string>("");
    const { register, handleSubmit } = useForm()
    const { isSetImageLoading, filename }: any = useSelector<RootState>(({ state: { post } }) => ({ ...post }))
    const handleCapture = (target: EventTarget & HTMLInputElement) => {
        if (target.files) {
            if (target.files.length !== 0) {
                dispatch(setImageLoading(true))
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
                dispatch(postImage(target.files[0]))
            }
        }
    }
    const onSubmit = useCallback(
        (body: InputProps) => {
            dispatch(addBike({ ...body, filename }))
        },
        [dispatch, filename],
    )
    const handleDeleteImage = useCallback(() => {
        dispatch(deleteImage(filename))
        setSource("")
    }, [dispatch, filename])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
                <div className="form__header">
                    <span>Create A Bike {params.id}</span>
                </div>
                <div className="form__input">
                    <label htmlFor="brand">Brand</label>
                    <input
                        required
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
                        required
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
                    <label htmlFor="ev">Post Image</label>
                    {source &&
                        <div className={`box__image ${isSetImageLoading ? "op-3" : ""}`}>
                            <div onClick={handleDeleteImage} className="change__img"><h2>Delete</h2></div>
                            {isSetImageLoading && <img className="img__loading" src={loadingImg} alt="" />}
                            <img src={source} alt={"snap"}></img>
                        </div>}
                    <input
                        required
                        id="ev"
                        accept="image/*"
                        capture="environment"
                        type="file"
                        autoComplete="off"
                        placeholder="Please enter image"
                        className="form__input__control__file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCapture(e.target)} />
                </div>
                <div className="form__input">
                    <button className="form__input__button" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
};

export default Component