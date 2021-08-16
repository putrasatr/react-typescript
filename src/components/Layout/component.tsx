import React from "react";
import { Navbar } from "./navbar";
import { Props } from "../../constants";

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout