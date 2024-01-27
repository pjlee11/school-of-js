import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from './components/Menu';
import DrinkPage from './components/DrinkPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Menu,
  },
  {
    path: "drink/:drinkId",
    Component: DrinkPage
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
