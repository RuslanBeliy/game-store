import { createBrowserRouter } from 'react-router-dom';

import { Error, FullGame, Home, Layout, Order } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'game/:id', element: <FullGame /> },
      { path: 'order', element: <Order /> },
    ],
  },
]);
