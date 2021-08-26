import React, { Fragment } from "react";
import Fade from 'react-reveal/Fade'

import { PropsRoute } from "../../../constants";
import { content, ContentProps } from "../../../constants/contents";

const Home: React.FC<PropsRoute> = (): JSX.Element => {
    return (
        <Fragment>
            <div className="main__wrapper">
                {content.map(({ title, desc }: ContentProps, i: number): JSX.Element => (
                    <Fade bottom key={i}>
                        <div className="content__card">
                            <strong>{title}</strong>
                            <div className="content__card__desc">
                                <span>
                                    {desc}
                                </span>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </Fragment>
    )
}
export default Home