import React from "react";
import { Navbar } from "./navbar";
import { Props } from "../../constants";
import Footer from "./footer";

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer>
                <span>&copy; Putra Satria Pratama 2021</span>
            </Footer>
        </div>
    )
}

export default Layout