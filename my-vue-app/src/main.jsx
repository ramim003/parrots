import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

import OurServices from './pages/OurServices';
import Layout from './pages/Layout';
import ReviewPage from './pages/ReviewPage';
import AboutUs from './pages/AboutUs';
import FacaltyUs from './pages/Facaltyus';
import Contact from './pages/Contact';
import Join from './pages/Join';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
    
      {
        path: "OurServices",
        element: <OurServices />,
      },
      {
        path: "ReviewPage",
        element: <ReviewPage />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "FacaltyUs",
        element: <FacaltyUs />,
      },
      {
        path: "Join",
        element: <Join />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
