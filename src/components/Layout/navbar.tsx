import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../utils";
type LinkProps = {
    urlTo: string;
    name: string;
}
const links: LinkProps[] = [
    { name: "Home", urlTo: "/" },
    { name: "Post", urlTo: "/post/23" },
    { name: "Gallery", urlTo: "/gallery" }
]

export const Navbar: React.FC = () => {
    const [isNavOpen, setNavOpen] = useState<boolean>(false)

    return (
        <div className="App-logo">
            <div className="jumbotron">
                <h1 className="jumbotron__text">Otobai.</h1>
                <h1 className="jumbotron__text">Ride With Style</h1>
                {!isAuthenticated && <button className="jumbotron__btn__login">
                    <Link to="/signin">
                        Login
                    </Link>
                </button>}
            </div>
            <div className="nav__btn">
                <button className="nav__btn__set" onClick={() => setNavOpen(!isNavOpen)}>
                    <span>X</span>
                </button>
            </div>
            <nav className={isNavOpen ? "nav__active" : "nav"}>
                <ul>
                    {links.map(({ urlTo, name }: LinkProps, i: number) => (
                        <Link className="item__link" to={urlTo} key={i}>
                            <li>
                                <span>{name}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
};