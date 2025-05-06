import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Home from './../pages/Home';
import MainLayout from '../layout/MainLayout';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"product",
                element:<ProductList/>,
            },
            {
                path:"product/:id",
                element:<ProductDetail/>,
            },
        ]
    }
   
])

export default AppRoutes;
