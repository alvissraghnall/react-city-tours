import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Root} from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
