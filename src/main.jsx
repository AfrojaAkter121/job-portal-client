import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { router } from './Route/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Contex/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
