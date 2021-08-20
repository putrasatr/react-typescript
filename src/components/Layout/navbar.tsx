import React from "react";
import { Link } from "react-router-dom";
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
    return (
        <div className="App-logo">
            <div className="jumbotron">
                <h1 className="jumbotron__text">Otobai.</h1>
                <h1 className="jumbotron__text">Ride With Style</h1>
                <button className="jumbotron__btn__login">Login</button>
            </div>
            <nav>
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