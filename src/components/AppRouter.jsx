import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { Context } from '../App';
import { privateRoutes, publicRoutes } from '../routes';
import { FRONTPAGE_ROUTE, MAINPAGE_ROUTE } from '../utils/consts';
import Preloader from '../utils/Preloader';
import Header from './Private/Header';
import MainPage from './Private/MainPage';

const AppRouter = () => {
    const {hasLogged} = useContext(Context)
    const isFetching = useSelector(state => state.mainPage.isFetching)
    return hasLogged
    ? (<>
        <Header />
        <Switch> 
            {isFetching ? <Preloader /> :
            <Route path={MAINPAGE_ROUTE} component={MainPage} exact={true} />}
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>)}

            <Redirect to={MAINPAGE_ROUTE}/>
        </Switch>
        </>
    )
    : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>)}

            <Redirect to={FRONTPAGE_ROUTE}/>
        </Switch>
    )
}

export default AppRouter
