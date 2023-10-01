import React from 'react';
// import Pages from './Lazy';
const Home = React.lazy(() => import('../pages/Home'));
const Events = React.lazy(() => import('../pages/Events'));
const News = React.lazy(() => import('../pages/News'));
const About = React.lazy(() => import('../pages/About'));
const EventDetails = React.lazy(() => import('../pages/EventDetails'));

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
    path: '/news',
    element: <News />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
  },
];
