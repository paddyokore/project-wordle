import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './components/App';
import ShowGame from './components/ShowGame';

import './reset.css';
import './styles.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/game",
        element: <ShowGame />,
      },
  ]);

const root = createRoot(document.querySelector('#root'));
root.render(
    <RouterProvider router={router}/>
);
