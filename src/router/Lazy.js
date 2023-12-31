import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Events = React.lazy(() => import('../pages/Events'));
const About = React.lazy(() => import('../pages/About'));
const EventDetails = React.lazy(() => import('../pages/EventDetails'));

const Pages = {
  Home,
  Events,
  About,
  EventDetails,
};

export default Pages;
