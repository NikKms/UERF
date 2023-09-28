import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Events = React.lazy(() => import("../pages/Events"));


export const routes = [
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/events",
        element: <Events />,
    },

];
