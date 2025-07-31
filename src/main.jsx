import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Location from './Components/Pages/Location';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/location',
        element: <Location></Location>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  </StrictMode>,
)
