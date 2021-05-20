import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import { FRONTPAGE_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, SIGNUP_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: FRONTPAGE_ROUTE,
        Component: FrontPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: SIGNUP_ROUTE,
        Component: Signup
    }
];

export const privateRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage
    }
];