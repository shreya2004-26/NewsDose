import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sports from './Pages/Sports';
import Entertainment from './Pages/Entertainment';
import Technology from './Pages/Technology';
import Business from './Pages/Business';
import Science from './Pages/Science';
import Health from './Pages/Health';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/", element:<App/>
  },
  {
    path:"/sports",element:<Sports/>
  },
  {
    path:"/entertainment",element:<Entertainment/>
  },
  {
    path:"/technology",element:<Technology/>
  },
  {
    path:"/health",element:<Health/>
  },
  {
    path:"/science",element:<Science/>
  },
  {
    path:"/business",element:<Business/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
