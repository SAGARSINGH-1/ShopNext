import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Components/pages/registration/Login.jsx'
import Main from './Components/pages/Hero.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from './Components/pages/Error.jsx'
import Home from './Components/pages/Home.jsx'
import Product from './Components/pages/Product.jsx'
import { Provider } from 'react-redux';
import store from './Components/Store/Store';
import Signup from './Components/pages/registration/Signup.jsx'
import Account from './Components/pages/Account.jsx'
import Orders from './Components/pages/Account/Orders.jsx'
import Cart from './Components/pages/Account/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/account/:username",
        element: <Account />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/account/your_orders",
        element: <Orders />
      },
      {
        path: "*",
        element: <Error />
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
