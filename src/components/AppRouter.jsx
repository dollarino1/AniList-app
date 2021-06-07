import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { Context } from '../App';
import { privateRoutes, publicRoutes } from '../routes';
import { FRONTPAGE_ROUTE, MAINPAGE_ROUTE } from '../utils/consts';
import Header from './Private/Header';

const AppRouter = () => {
    const {hasLogged} = useContext(Context)
    return hasLogged
    ? <>
        <Header />
        <Switch> 
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} key={Component} component={Component} exact={true}/>)}
            <Redirect to={MAINPAGE_ROUTE}/>
        </Switch>
        </>
    
    : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>)}

            <Redirect to={FRONTPAGE_ROUTE}/>
        </Switch>
    )
}

export default AppRouter
