import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {About, Contact, Root, Services} from './routes';
import { Error } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    
  }, {
    path: "/about",
    element: <About />
  }, {
    path: "/services",
    element: <Services />
  }, {
    path: "/about",
    element: <Contact />
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
