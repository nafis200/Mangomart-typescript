import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import { router } from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
      <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      </AuthProvider>
  </StrictMode>,
)
