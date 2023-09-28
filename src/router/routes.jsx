import React from 'react';
// import Pages from './Lazy';
const Home = React.lazy(() => import('../pages/Home'));
const Events = React.lazy(() => import('../pages/Events'));
const About = React.lazy(() => import('../pages/About'));

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
