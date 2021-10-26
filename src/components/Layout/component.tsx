import React from "react";
import { Navbar } from "./navbar";
import { RouterProps } from "react-router";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../utils";

const Layout: React.FC<RouterProps> = ({ children, history }): JSX.Element => {
    const handleLogout = () => {
        localStorage.clear()
        history.push("/signin")
    }
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer>
                <h2>Otobai</h2>
                <span className="copyright">&copy; KrazyMoving</span>
                {isAuthenticated &&
                    <div className="footer__content">
                        <ul className="link__item__footer">
                            <li>
                                <Link to="/" className="link__item__footer__link">
                                    <span className="link__item__footer__link">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link__item__footer__link" to="/post/1">
                                    <span className="link__item__footer__link">Post</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link__item__footer__link" to="/gallery">
                                    <span className="link__item__footer__link">Gallery</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="link__item__footer">
                            <li>
                                <a href="https://github.com/putrasatr/react-typescript" target="blank" className="link__item__footer__link">
                                    <span className="link__item__footer__link">Github</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://react.com" className="link__item__footer__link" target="blank">
                                    <span className="link__item__footer__link">React</span>
                                </a>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="link__item__footer__link">
                                    <a href="/signin" className="link__item__footer__link">Logout</a>
                                </button>
                            </li>
                        </ul>
                    </div>}
            </Footer>
        </div>
    )
}

export default Layout