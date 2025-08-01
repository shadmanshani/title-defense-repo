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
import Diagnosis from './Components/Pages/Diagnosis';
import Booking from './Components/Pages/Booking';
import Track from './Components/Pages/Track';
import MobileRepair from './Components/Pages/MobileRepair';
import LaptopRepair from './Components/Pages/LaptopRepair';
import MouseKeyboard from './Components/Pages/MouseKeyboard';
import OthersService from './Components/Pages/OthersService';
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
      },
      {
        path: '/diagnosis',
        element: <Diagnosis></Diagnosis>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      },
      {
        path: '/track',
        element: <Track></Track>
      },
      {
        path: '/services/mobile',
        element: <MobileRepair></MobileRepair>
      },
      {
        path: '/services/laptop',
        element: <LaptopRepair></LaptopRepair>
      },
      {
        path: '/services/mouse-keyboard',
        element: <MouseKeyboard></MouseKeyboard>
      },
      {
        path: '/services/others',
        element: <OthersService></OthersService>
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
