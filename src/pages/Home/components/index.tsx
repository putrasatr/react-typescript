import React from "react";

import { PropsRoute } from "../../../constants";
import { content, ContentProps } from "../../../constants/contents";

const Home: React.FC<PropsRoute> = (): JSX.Element => {

    return (
        <div className="main__wrapper">
            {content.map(({ title, desc }: ContentProps, i: number): JSX.Element => (
                <div className="content__card" key={i}>
                    <strong>{title}</strong>
                    <div className="content__card__desc">
                        <span>
                            {desc}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Home