import FrontPage from "./components/Public/FrontPage";
import Login from "./components/Public/Login";
import MainPage from "./components/Private/MainPage";
import Signup from "./components/Public/Signup";
import { FRONTPAGE_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, 
    PROFILE_ROUTE, SIGNUP_ROUTE, LISTPAGE_ROUTE, 
    TRENDING_ROUTE, SEASON_ROUTE, UPCOMING_ROUTE, 
    POPULAR_ROUTE } from "./utils/consts";
import ListPage from "./components/Private/ListPage";
import Profile from './components/Private/Profile';
import Trending from "./components/Private/MainPage/Trending";
import SeasonPopular from "./components/Private/MainPage/SeasonPopular";
import Upcoming from "./components/Private/MainPage/Upcoming";
import Popular from "./components/Private/MainPage/Popular";

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
        path: TRENDING_ROUTE,
        Component: Trending
    },
    {
        path: SEASON_ROUTE,
        Component: SeasonPopular
    },
    {
        path: UPCOMING_ROUTE,
        Component: Upcoming
    },
    {
        path: POPULAR_ROUTE,
        Component: Popular
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