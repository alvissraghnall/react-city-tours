import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {About, Contact, Layout, Root, Services} from './routes';
import { Error } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "about",
        element: <About />
      }, {
        path: "services",
        element: <Services />
      }, {
        path: "contact",
        element: <Contact />
      }
    ]
    
  }, 
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Layout> */}
      <RouterProvider router={router} />
    {/* </Layout> */}
  </React.StrictMode>
)
