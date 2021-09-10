import React, { useState } from "react";

interface Props {

}

const Login: React.FC<Props> = () => {
    const [isHide, setHide] = useState<boolean>(true)
    return (
        <div className="card__login">
            <div className="card__login__header">
                <h2>Otobai Sign In</h2>
            </div>
            <form className="card__login__form">
                <div className="card__login__form__input">
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" type="text" />
                </div>
                <div className="card__login__form__input">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type={isHide ? "password" : "text"} />
                    <button type="button" onClick={() => setHide(!isHide)}>{isHide ? "Show" : "Hide"}</button>
                </div>
            </form>
            <div className="card__login__form__submit">
                <button>
                    <span>Login</span>
                </button>
            </div>
        </div>
    )
}

export default Login