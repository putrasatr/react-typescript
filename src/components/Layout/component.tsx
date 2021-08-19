import React from "react";
import { Navbar } from "./navbar";
import { Props } from "../../constants";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer>
                <h2>Otobai</h2>
                <span className="copyright">&copy; KrazyMoving</span>
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
                    </ul>
                </div>
            </Footer>
        </div>
    )
}

export default Layout