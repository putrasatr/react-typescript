import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "../components";
import { routers } from "./routes";

type RouteProps = {
    isExact?: boolean;
    path?: string;
    component?: any;
}

const renderWithLayout = (Component: any, props: any) => {
    return (
        <Layout {...props}>
            <Component {...props} />
        </Layout>
    );
};

const router = () => {
    return (
        <Switch>
            {routers.map(({ isExact, path, component }: RouteProps, i: number) => (
                <Route
                    key={i}
                    exact={isExact}
                    path={path}
                    render={(props) => renderWithLayout(component, props)}
                />
            ))}
        </Switch>
    )
};
export default router