
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={AppRoutes} />
  </>,
)
