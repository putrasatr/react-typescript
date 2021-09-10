import React from "react";
import { StaticContext, RouteComponentProps } from "react-router";
import { Switch, Route } from "react-router-dom";

import { Login } from "../pages";
import { Layout } from "../components";
import { routers } from "./routes";
import ProtectedRoute from "./protected.route";

interface Props {
    isExact?: boolean;
    path?: string;
    Component?: any;
}

export interface RenderProps {
    Component: any;
    props: RouteComponentProps<{
        [x: string]: string | undefined;
    }, StaticContext, unknown>;
}

export const renderWithLayout: React.FC<RenderProps> = ({ Component, props }) => {
    return (
        <Layout {...props}>
            <Component {...props} />
        </Layout>
    );
};

const router = (props: any) => {
    return (
        <Switch>
            <Route
                exact
                path="/signin"
                render={(props) => renderWithLayout({ Component: Login, props })}
            />
            {routers.map(({ isExact, path, Component }: Props, i: number) => (
                <ProtectedRoute
                    key={i}
                    exact={isExact}
                    path={path}
                    component={Component}
                />
            ))}
        </Switch>
    )
};
export default router