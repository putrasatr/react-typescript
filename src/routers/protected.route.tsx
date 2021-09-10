import React from "react";
import { StaticContext, RouteComponentProps } from "react-router";
import { Redirect, Route } from "react-router-dom";

import { isAuthenticated } from "../utils";
import { Layout } from "../components";

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

const ProtectedRoute = ({ component, ...rest }: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? renderWithLayout({ Component: component, props })
            : <Redirect to={{ pathname: '/signin' }} />
    );
    return <Route {...rest} render={routeComponent} />;
};
export default ProtectedRoute