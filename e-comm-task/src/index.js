import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import { routes } from './routes/routes';
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
     <RouterProvider router={router} >
        
      
    <App />
     </RouterProvider>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals