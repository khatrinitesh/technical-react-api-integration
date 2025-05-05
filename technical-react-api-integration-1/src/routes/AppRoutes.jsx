import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import OtpPage from '../pages/OtpPage';
import Landing from '../pages/Landing';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>,
    },
    {
        path:"/login",
        element:<LoginPage/>,
    },
    {
        path:"/register",
        element:<RegisterPage/>,
    },
    {
        path:"/otp",
        element:<OtpPage/>,
    },
])

export default AppRoutes;
