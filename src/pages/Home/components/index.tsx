import React from "react";
import { Link } from "react-router-dom";
import { PropsRoute } from "../../../constants";

const Home: React.FC<PropsRoute> = ({ home }): JSX.Element => {
    const random = Math.random() * 1000 | 0
    return (
        <div className="container">
            <span className="title">{home}</span>
            <Link to={`/add/${random}`}>
                <span>Add</span>
            </Link>
        </div>
    )
}
export default Home