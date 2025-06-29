import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './products';
import ProductDetails from './ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "products/",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({params}) => {
          return {id: params.id}
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
