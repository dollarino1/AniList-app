import FrontPage from "./components/Public/FrontPage";
import Login from "./components/Public/Login";
import MainPage from "./components/Private/MainPage";
import Signup from "./components/Public/Signup";
import { FRONTPAGE_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, PROFILE_ROUTE, SIGNUP_ROUTE, LISTPAGE_ROUTE } from "./utils/consts";
import ListPage from "./components/Private/ListPage";
import Profile from './components/Private/Profile';

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
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: LISTPAGE_ROUTE,
        Component: ListPage
    }
];