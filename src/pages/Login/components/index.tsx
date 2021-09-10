import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isAuthenticated } from "../../../utils";
import { inputValidator } from "../../../helpers";
import { login } from "../../../services/actions";
import { AccessToken } from "../../../services/reducers/login";
import { RootState } from "../../../store/store";
import { Redirect } from "react-router";

interface Props {

}
export type BodyTypes = {
    [body: string]: string
    username: string
    password: string
    usernameError: string
    passwordError: string
}

const Login: React.FC<Props> = () => {
    const [isHide, setHide] = useState<boolean>(true)
    const [body, setBody] = useState<BodyTypes>({ password: "", username: "", passwordError: "", usernameError: "" })
    const dispatch = useDispatch()
    const { msg }: any = useSelector<RootState>(({ state: { accessToken } }): AccessToken => accessToken)
    const handleChange = React.useCallback(
        ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
            name === "username"
                ? setBody(p => ({ ...p, username: value, usernameError: inputValidator(value, name) }))
                : setBody(p => ({ ...p, password: value, passwordError: inputValidator(value, name) }))
        },
        []
    );
    const handleSubmit = React.useCallback(
        async (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.which === 13) {
                if (!body.passwordError && !body.usernameError) {
                    dispatch(login(body.username, body.password))
                }
            }
        },
        [body, dispatch]
    );
    if (isAuthenticated) return <Redirect to="/" />
    return (
        <div className="card__login">
            <div className="card__login__header">
                <h2>Otobai Sign In</h2>
                <strong>
                    <span>{msg}</span>
                </strong>
            </div>
            <form className="card__login__form">
                <div className="card__login__form__input">
                    <label htmlFor="username">Username</label>
                    <input
                        value={body.username}
                        onKeyDown={handleSubmit}
                        onChange={handleChange}
                        autoComplete="off"
                        name="username"
                        id="username"
                        type="text" />
                    <small className="text__error">{body.usernameError}</small>
                </div>
                <div className="card__login__form__input">
                    <label htmlFor="password">Password</label>
                    <input
                        value={body.password}
                        onChange={handleChange}
                        onKeyDown={handleSubmit}
                        onClick={() => setHide(!isHide)}
                        autoComplete="on"
                        name="password"
                        id="password"
                        type={isHide ? "password" : "text"} />
                    <small className="text__error">{body.passwordError}</small>
                    {/* <button type="button" onClick={() => setHide(!isHide)}>{isHide ? "Show" : "Hide"}</button> */}
                </div>
                <small>type enter for submit</small>
            </form>
        </div>
    )
}

export default Login