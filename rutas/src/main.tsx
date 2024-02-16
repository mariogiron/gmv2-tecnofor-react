import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import Info from './pages/Info.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import AdminLayout from './pages/layout/AdminLayout.tsx'
import Listados from './pages/admin/Listados.tsx'
import Graficos from './pages/admin/Graficos.tsx'
import AuthLayout from './pages/layout/AuthLayout.tsx'
import Registro from './pages/auth/Registro.tsx'
import Login from './pages/auth/Login.tsx'
import ListaEmpleados from './pages/admin/ListaEmpleados.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'

/**
 * APP
 * 
 *  LAYOUT ADMIN
 *    /admin/graficos
 *    /admin/listados
 * 
 *  LAYOUT AUTH
 *    /login
 *    /registro
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'info', element: <Info /> },
      { path: 'sobremi', element: <About /> },
      {
        element: <ProtectedRoute isAllowed={false} />, children: [
          { path: 'contacto', element: <Contact /> },
        ]
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          { path: 'lista', element: <Listados /> },
          { path: 'graficos', element: <Graficos /> },
          {
            path: 'empleados/:empleadoId',
            element: <ListaEmpleados />,
            loader: async ({ params }) => {
              // return fetch(`https://peticiones.online/api/users/${params.empleadoId}`);
              // Capturar el error
              const response = await fetch(`https://peticiones.online/api/users/${params.empleadoId}`);
              const data = await response.json();
              if (data.error) {
                throw redirect('/login');
              }
              return data;
            }
          }
        ]
      },
      {
        element: <AuthLayout />,
        children: [
          { path: 'registro', element: <Registro /> },
          { path: 'login', element: <Login /> }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)