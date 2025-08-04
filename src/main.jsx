import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocation } from 'react-router-dom';
import './index.css';
// import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigationType,
  useRoutes,
  UNSAFE_useScrollRestoration as useScrollRestoration,
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
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import DetailsInfo from './Components/Pages/DetailsInfo';
import { AuthProvider } from './Components/Context/AuthContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    // Scroll to top when the pathname changes and it's not a back/forward navigation
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}

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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details',
        element: <DetailsInfo></DetailsInfo>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HeroUIProvider>
        <RouterProvider router={router} />
      </HeroUIProvider>
    </AuthProvider>
  </StrictMode>,
)
