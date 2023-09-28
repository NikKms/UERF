import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Routings = () => {
    return (
        <Suspense>
            <Routes>
                {routes.map((routeProps) => (
                    <Route {...routeProps} key={routeProps.path} />
                ))}
                {/* {privateRoutes.map(({ element, ...privateRouteProps }) => (
                    <Route
                        element={
                            <RequireAuth
                                redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
                            >
                                {element}
                            </RequireAuth>
                        }
                        {...privateRouteProps}
                        key={`privateRoute-${privateRouteProps.path}`}
                    />
                ))} */}
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </Suspense>
    );
};

export default Routings;