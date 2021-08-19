import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <div className="App-logo">
            <div className="jumbotron">
                <h1 className="jumbotron__text">Ride With Style</h1>
                <button className="jumbotron__btn__login">Login</button>
            </div>
            <nav>
                <ul>
                    <Link className="item__link" to="/">
                        <li>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link className="item__link" to="/post/12">
                        <li>
                            <span>Post</span>
                        </li>
                    </Link>
                    <Link className="item__link" to="/gallery">
                        <li>
                            <span>Gallery</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};