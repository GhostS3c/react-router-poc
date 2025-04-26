import { createRootRoute, createRouter, RouterProvider } from '@react-router/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const rootRoute = createRootRoute({
  component: () => <div>Hello from React Router 7.5 + React 19!</div>,
});

const router = createRouter({ routeTree: rootRoute });

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={router} />);
