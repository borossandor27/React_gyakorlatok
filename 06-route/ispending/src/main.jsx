import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Új importok
import './index.css'
import App from './App.jsx'
import Users, { usersLoader } from './Users.jsx' // Importáljuk a komponenst és a loadert

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Ez a "szülő" elem, amiben a NavLink és az Outlet van
    children: [
      {
        path: "users",
        element: <Users />,
        loader: usersLoader, // Itt rendeljük hozzá a lassú API hívást
      },
      {
        index: true,
        element: <h1>Üdvözöllek a főoldalon!</h1>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Az App helyett a RouterProvider-t adjuk át a routerrel */}
    <RouterProvider router={router} />
  </StrictMode>,
)