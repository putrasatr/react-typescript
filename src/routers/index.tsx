import React from "react";
import { StaticContext, RouteComponentProps } from "react-router";
import { Switch, Route } from "react-router-dom";
import { Layout } from "../components";
import { routers } from "./routes";

interface Props {
    isExact?: boolean;
    path?: string;
    Component?: any;
}

interface RenderProps {
    Component: any;
    props: RouteComponentProps<{
        [x: string]: string | undefined;
    }, StaticContext, unknown>;
}

const renderWithLayout: React.FC<RenderProps> = ({ Component, props }) => {
    return (
        <Layout {...props}>
            <Component {...props} />
        </Layout>
    );
};

const router = () => {
    return (
        <Switch>
            {routers.map(({ isExact, path, Component }: Props, i: number) => (
                <Route
                    key={i}
                    exact={isExact}
                    path={path}
                    render={(props) => renderWithLayout({ Component, props })}
                />
            ))}
        </Switch>
    )
};
export default router