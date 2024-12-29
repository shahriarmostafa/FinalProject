import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
import AuthProvider from './AuthProvider.jsx/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
