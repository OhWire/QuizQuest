import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Topics from './Components/Topics/Topics';
import Quiz from './Components/Quiz/Quiz';
import App from './App';

const router = createBrowserRouter([
{
  path:"/",
  element: <App/> 
},
{
  path:"/Topics",
  element: <Topics/>
},
{
  path:"/Quiz/:topic",
  element: <Quiz/>
},

{
  path:"/Quiz",
  element: <Quiz/>
}


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router}/>
   </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
