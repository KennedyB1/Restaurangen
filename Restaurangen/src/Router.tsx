import { createBrowserRouter} from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Menu } from "./Components/Menu";
import { Booking } from "./Components/Booking";
import { Admin } from "./Components/Admin";
import { Contact } from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Gdpr from "./Components/Gdpr";
import { LoggedInAdmin } from "./Components/LoggedInAdmin";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                index: true
            },
            {
                path: "/om",
                element: <About></About>
            },
            {
                path: "/meny",
                element: <Menu></Menu>
            },
            {
                path: "/bokning",
                element: <Booking></Booking>
            },
            {
                path: "/admin",
                element: <Admin></Admin>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/kontakt",
                element: <Contact></Contact>
            },
            {
                path: "/gdpr",
                element: <Gdpr></Gdpr>
            },
            {
                path: "/loggedin",
                element: <LoggedInAdmin></LoggedInAdmin>
            }
        ]
    }
]) 