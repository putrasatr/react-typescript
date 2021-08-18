import React from "react";
import { PropsRoute } from "../../../constants";
import ListItem from "./listItem";
import image1 from "../../../assets/images/moto4K.jpg";
import image2 from "../../../assets/images/motox.jpeg";
import image3 from "../../../assets/images/xsr.jpeg";

const Home: React.FC<PropsRoute> = (): JSX.Element => {
    const imgArr = [image1, image2, image3]
    return (
        <div className="main__wrapper">
            <ListItem data={imgArr} />
        </div>
    )
}
export default Home