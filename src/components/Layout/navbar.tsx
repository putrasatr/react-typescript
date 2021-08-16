import React from "react";
import logo from "../../assets/images/caferacer.jpeg";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="App-logo">
            <img src={logo} alt="" className="App-logo__image" />
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