import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import logo from "../../../assets/images/moto4K.jpg";

type Props = {
    image: string;
}

const DetailItem: React.FC<any> = ({ match }: RouteComponentProps<Props>) => {
    const { params: { image } } = match
    return (
        <div>
            {image}
            <img src={logo} alt="" style={{ width: '200px', height: "100px" }} />
        </div>
    )
};

export default DetailItem